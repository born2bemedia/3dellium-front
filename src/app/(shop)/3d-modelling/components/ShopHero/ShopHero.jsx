"use client";
import React, { use, useEffect, useState } from "react";
import { fadeInUp, fadeInLeft } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./ShopHero.module.scss";
import Image from "next/image";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN;

const ShopHero = ({ categorySlugs }) => {
  const [heroProduct, setHeroProduct] = useState(null);

  useEffect(() => {
    async function fetchRandomProduct() {
      try {
        const categoryRes = await fetch(
          `${API_URL}/api/categories?where[slug][in]=${categorySlugs.join(
            ","
          )}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        const categoryData = await categoryRes.json();
        const categoryIds = categoryData.docs.map((cat) => cat.id);

        const heroProductsRes = await fetch(
          `${API_URL}/api/products?where[category][in]=${categoryIds.join(
            ","
          )}&limit=1&sort=random`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        const heroProductsData = await heroProductsRes.json();
        //console.log(heroProductsData);
        if (heroProductsData.docs.length > 0) {
          setHeroProduct(heroProductsData.docs[0]);
        }
      } catch (error) {
        console.error("Error fetching random heroProduct:", error);
      }
    }

    fetchRandomProduct();
  }, []);

  useEffect(() => {
    console.log(heroProduct);
  }, [heroProduct]);

  return (
    <section className={styles.shopHero}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className={styles.title}
        >
          <h1>3D Modelling</h1>
          <p>Explore. Print. Simplify Life.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className={styles.body}
        >
          {heroProduct && (
            <div className={styles.heroProduct}>
              <Link
                href={`/heroProduct/${heroProduct.slug}`}
                className={styles.cardImage}
              >
                <Image
                  width={235}
                  height={200}
                  src={
                    heroProduct.image?.url
                      ? `${API_URL}${heroProduct.image.url}`
                      : "/placeholder.jpg"
                  }
                  alt={heroProduct.title}
                />
              </Link>
              <div className={styles.cardBottom}>
                <h3>{heroProduct.title}</h3>
                <span className={styles.price}>
                  {heroProduct.price}
                  <span>€</span>
                </span>
                <AddToCartButtonLoop product={heroProduct} />
              </div>
            </div>
          )}

          <Image
            src={"/images/modelling/hero.png"}
            width={1360}
            height={545}
            alt="hero"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShopHero;
