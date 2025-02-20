import React from "react";
import { fadeInUp, fadeInLeft } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./AnimationHero.module.scss";
import { API_URL, CACHE_TAG_PRODUCTS } from "@/helpers/constants";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import Link from "next/link";
import Image from "next/image";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";

async function fetchProductById(id) {
  const productsData = await fetchFromAPI(`/api/products/${id}`, {
    tag: CACHE_TAG_PRODUCTS,
  });

  return productsData;
}

const AnimationHero = async () => {
  const heroProduct = await fetchProductById(11);

  return (
    <section className={styles.shopHero}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Animations</h1>
          <p>Move. Express. Enrich Life.</p>
        </div>
        <div className={styles.body}>
          {heroProduct && (
            <div className={styles.heroProduct}>
              <Link
                href={`/product/${heroProduct.slug}`}
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
          <div className={styles.videoWrap}>
            <video
              width="1360"
              height="545"
              autoPlay={true}
              muted
              loop
              preload="none"
            >
              <source src="/images/animations/heroAnim.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationHero;
