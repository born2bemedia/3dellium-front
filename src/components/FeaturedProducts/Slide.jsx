import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player";
import AddToCartButtonLoop from "../AddToCartButtonLoop/AddToCartButtonLoop";
import styles from "./FeaturedProducts.module.scss";
import { API_URL } from "@/helpers/constants";

const Slide = ({ product, index, activeIndex, isPlaying, setIsPlaying }) => {
  return (
    <div className={`${styles.card} ${index == activeIndex && styles.wide}`}>
      <Link href={`/product/${product.slug}`}>
        <div className={styles.cardImage}>
          {index == activeIndex ? (
            <>
              {product.category?.id === 6 ? (
                <div
                  className={styles.animationWrap}
                  onMouseEnter={() => setIsPlaying(true)}
                  onMouseLeave={() => setIsPlaying(false)}
                >
                  <ReactPlayer
                    url={`${API_URL}${product.preview?.url}`}
                    playing={isPlaying}
                    controls={false}
                    loop={true}
                    className={styles.video}
                    height={300}
                    muted={true}
                    volume={0}
                  />
                  <Image
                    fill
                    quality={100}
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
                  quality={100}
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
                    playing={isPlaying}
                    controls={false}
                    loop={true}
                    className={styles.video}
                    height={300}
                    muted={true}
                    volume={0}
                  />
                  <Image
                    fill
                    quality={100}
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
                  quality={100}
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
        {index == activeIndex && <h3>{product.title}</h3>}
        <span className={styles.price}>
          {product.price}
          <span>£</span>
        </span>
        <AddToCartButtonLoop product={product} />
      </div>
    </div>
  );
};

export default Slide;
