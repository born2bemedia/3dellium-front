"use client";
import React, { useEffect, useState } from "react";
import styles from "./SmallCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { API_URL, CACHE_TAG_PRODUCTS } from "@/helpers/constants";
import Skeleton from "@/components/Skeleton/Skeleton";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";

const SmallCard = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productsData = await fetchFromAPI(`/api/products/${id}`, {
        tag: CACHE_TAG_PRODUCTS,
      });
      setProduct(productsData);
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Skeleton className={styles.card} />
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={`${styles.card}`}
        >
          <div className={styles.cardTop}>
            <Link
              href={`/product/${product.slug}`}
              className={styles.cardImage}
              style={{
                backgroundColor: product.color
                  ? product.color
                  : 'rgba(0, 0, 0, 0.05)',
              }}
            >
              <img src={`${API_URL}${product.image.url}`} alt={product.title} />
            </Link>
            <h3>{product.title}</h3>
          </div>
          <div className={styles.cardBottom}>
            <span className={styles.price}>
              {product.price}
              <span>£</span>
            </span>
            <AddToCartButtonLoop product={product} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SmallCard;
