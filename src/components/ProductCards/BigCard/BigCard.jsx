"use client";
import React, { useEffect, useState } from "react";
import styles from "./BigCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { API_URL, CACHE_TAG_PRODUCTS } from "@/helpers/constants";
import Skeleton from "@/components/Skeleton/Skeleton";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";

const BigCard = ({ id }) => {
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
          <Link
            href={`/product/${product?.slug}`}
            className={styles.cardImage}
            style={{
              backgroundColor: product.color ? product.color : 'rgba(0, 0, 0, 0.05)',
            }}
          >
            <Image
              fill
              quality={100}
              src={
                product.image?.url
                  ? `${API_URL}${product.image.url}`
                  : "/placeholder.jpg"
              }
              alt={product.title}
            />
          </Link>
          <div className={styles.cardBottom}>
            <div>
              <h3>{product.title}</h3>
              <span className={styles.price}>
                {product.price}
                <span>£</span>
              </span>
            </div>
            <AddToCartButtonLoop product={product} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default BigCard;
