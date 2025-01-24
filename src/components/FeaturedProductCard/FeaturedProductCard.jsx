"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./FeaturedProductCard.module.scss";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";
import Image from "next/image";
import AddToCartButtonLoop from "../AddToCartButtonLoop/AddToCartButtonLoop";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

const FeaturedProductCard = ({ product }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.card}
    >
      <Link href={`/product/${product.slug}`}>
        <h3>{product.title}</h3>
        <div className={styles.cardImage}>
          <Image
            fill
            src={
              product.image?.url
                ? `${API_URL}${product.image.url}`
                : "/placeholder.jpg"
            }
            alt={product.title}
          />
        </div>
      </Link>
      <div className={styles.cardBottom}>
        <span className={styles.price}>
          {product.price}
          <span>€</span>
        </span>
        <AddToCartButtonLoop product={product} />
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;
