"use client";

import { useState, useEffect } from "react";
import styles from "./FeaturedProducts.module.scss";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function FeaturedProductsClient({ products, classValue }) {
  // Local state to hold the current ordering of products.
  const [orderedProducts, setOrderedProducts] = useState(products);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 992px.
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Every 3 seconds, rotate the array.
    const intervalId = setInterval(() => {
      setOrderedProducts((prev) => {
        if (prev.length === 0) return prev;
        // Rotate: remove the first element and append it at the end.
        return [...prev.slice(1), prev[0]];
      });
    }, 10000);

    // Clean up the interval on unmount.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className={styles.mobile}>
          <Swiper
            modules={[Autoplay]}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className={`${styles.productRow} ${
              classValue === "left" ? styles.left : ""
            }`}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <FeaturedProductCard product={product} classValue={"wide"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div
          className={`${styles.productRow} ${
            classValue === "left" ? styles.left : ""
          }`}
        >
          {orderedProducts.length > 0 ? (
            orderedProducts.map((product, index) => (
              <FeaturedProductCard
                product={product}
                key={index}
                classValue={index === 0 ? "wide" : ""}
                playing={index === 0 ? true : false}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}
