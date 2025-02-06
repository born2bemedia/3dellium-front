import React from "react";

import styles from "./ShopHero.module.scss";
import Image from "next/image";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";
import Link from "next/link";
import Skeleton from "@/components/Skeleton/Skeleton";
import { API_TOKEN, API_URL } from "@/helpers/constants";
import fetchFromAPI from "@/helpers/fetchFromAPI";

const CACHE_TAG_PRODUCTS = "products";

async function fetchLatestProductsFromCategories(categorySlugs) {
  const categoryData = await fetchFromAPI("/api/categories", {
    query: `where[slug][in]=${categorySlugs.join(",")}`,
    tag: CACHE_TAG_PRODUCTS,
  });

  const categoryIds = categoryData.docs.map((cat) => cat.id);

  const productsData = await fetchFromAPI("/api/products", {
    query: `where[category][in]=${categoryIds.join(
      ","
    )}&sort=-createdAt&limit=1`,
    tag: CACHE_TAG_PRODUCTS,
  });

  return productsData.docs[0];
}

const ShopHero = async ({
  categorySlugs,
  title,
  subtitle,
  image,
  imageMob,
}) => {
  const heroProduct = await fetchLatestProductsFromCategories(categorySlugs);

  return (
    <section className={styles.shopHero}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div
          className={styles.body}
          style={{ backgroundImage: `url(${imageMob})` }}
        >
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

          <Image src={image} width={1360} height={545} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
