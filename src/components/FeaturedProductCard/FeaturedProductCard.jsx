"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./FeaturedProductCard.module.scss";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";
import Image from "next/image";

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
      <Link href="#">
        <div className={styles.cardTop}>
          <div className={styles.cardImage}>
            <Image
              width={264}
              height={197}
              src={
                product.image?.url
                  ? `${API_URL}${product.image.url}`
                  : "/placeholder.jpg"
              }
              alt={product.title}
            />
          </div>
          <h3>{product.title}</h3>
        </div>
        <div className={styles.cardBottom}>
          <span className={styles.price}>€{product.price}</span>
          <AddToCartButton product={product} />
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedProductCard;
