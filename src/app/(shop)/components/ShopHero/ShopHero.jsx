import React from "react";

import styles from "./ShopHero.module.scss";
import Image from "next/image";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";
import Link from "next/link";
import Skeleton from "@/components/Skeleton/Skeleton";
import { API_TOKEN, API_URL, CACHE_TAG_PRODUCTS } from "@/helpers/constants";
import fetchFromAPI from "@/helpers/fetchFromAPI";

async function fetchProductById(id) {
  const productsData = await fetchFromAPI(`/api/products/${id}`, {
    tag: CACHE_TAG_PRODUCTS,
  });

  return productsData;
}

const ShopHero = async ({
  categorySlugs,
  title,
  subtitle,
  image,
  imageMob,
  productId,
}) => {
  const heroProduct = await fetchProductById(productId);

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
