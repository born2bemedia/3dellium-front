"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./FeaturedProductCard.module.scss";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";
import Image from "next/image";
import AddToCartButtonLoop from "../AddToCartButtonLoop/AddToCartButtonLoop";
import ReactPlayer from "react-player";
import { API_URL } from "@/helpers/constants";

const FeaturedProductCard = ({ product, classValue }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={`${styles.card} ${
        classValue.includes("wide") && styles.wide
      } ${classValue.includes("animation") && styles.half}`}
    >
      <Link href={`/product/${product.slug}`}>
        {!classValue.includes("wide") && <h3>{product.title}</h3>}

        <div className={styles.cardImage}>
          {classValue.includes("wide") ? (
            <>
              {product.category?.id === 6 ? (
                <div
                  className={styles.animationWrap}
                  onMouseEnter={() => setIsPlaying(true)}
                  onMouseLeave={() => setIsPlaying(false)}
                >
                  <ReactPlayer
                    url={`${API_URL}${product.preview?.url}`}
                    playing={true}
                    controls={false}
                    loop={true}
                    className={styles.video}
                    height={300}
                  />
                  <Image
                    fill
                    src={
                      product.big_image?.url
                        ? `${API_URL}${product.big_image.url}`
                        : "/placeholder.jpg"
                    }
                    alt={product.title}
                    style={{
                      opacity: isPlaying ? 0 : 1,
                    }}
                  />
                </div>
              ) : (
                <Image
                  fill
                  src={
                    product.big_image?.url
                      ? `${API_URL}${product.big_image.url}`
                      : "/placeholder.jpg"
                  }
                  alt={product.title}
                />
              )}
            </>
          ) : (
            <>
              {product.category?.id === 6 ? (
                <div
                  className={styles.animationWrap}
                  onMouseEnter={() => setIsPlaying(true)}
                  onMouseLeave={() => setIsPlaying(false)}
                >
                  <ReactPlayer
                    url={`${API_URL}${product.preview?.url}`}
                    playing={true}
                    controls={false}
                    loop={true}
                    className={styles.video}
                    height={300}
                  />
                  <Image
                    fill
                    src={
                      product.image?.url
                        ? `${API_URL}${product.image.url}`
                        : "/placeholder.jpg"
                    }
                    alt={product.title}
                    style={{
                      opacity: isPlaying ? 0 : 1,
                    }}
                  />
                </div>
              ) : (
                <Image
                  fill
                  src={
                    product.image?.url
                      ? `${API_URL}${product.image.url}`
                      : "/placeholder.jpg"
                  }
                  alt={product.title}
                />
              )}
            </>
          )}
        </div>
      </Link>
      <div className={styles.cardBottom}>
        {classValue.includes("wide") && <h3>{product.title}</h3>}
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
