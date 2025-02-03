import React from "react";

import styles from "./ShopHero.module.scss";
import Image from "next/image";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";
import Link from "next/link";
import Skeleton from "@/components/Skeleton/Skeleton";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN;

const CACHE_TAG_PRODUCTS = "products";

async function fetchLatestProductsFromCategories(categorySlugs) {
  try {
    const categoryRes = await fetch(
      `${API_URL}/api/categories?where[slug][in]=${categorySlugs.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "force-cache",
        next: {
          tags: [CACHE_TAG_PRODUCTS],
        },
      }
    );

    if (!categoryRes.ok) {
      throw new Error(`Error ${categoryRes.status}: ${categoryRes.statusText}`);
    }

    const categoryData = await categoryRes.json();
    const categoryIds = categoryData.docs.map((cat) => cat.id);

    const productsRes = await fetch(
      `${API_URL}/api/products?where[category][in]=${categoryIds.join(
        ","
      )}&sort=-createdAt&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "force-cache",
        next: {
          tags: [CACHE_TAG_PRODUCTS],
        },
      }
    );

    if (!productsRes.ok) {
      throw new Error(`Error ${productsRes.status}: ${productsRes.statusText}`);
    }

    const productsData = await productsRes.json();
    //console.log(productsData);

    return productsData.docs[0];
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return [];
  }
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

          <Image src={image} width={1360} height={545} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
