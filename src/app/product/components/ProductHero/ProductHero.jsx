"use client";
import React, { useState } from "react";
import styles from "./ProductHero.module.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

const ProductHero = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(product);

  const imageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className={styles.productHero}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col1}
          >
            <div className={styles.productGallery}>
              {product.gallery.length > 0 && (
                <div className={styles.gallery}>
                  {product.gallery.map((image, index) => (
                    <Image
                      key={index}
                      src={`${API_URL}${image.image?.url}`}
                      width={160}
                      height={165}
                      objectFit={"cover"}
                      className={`${currentImage == index && styles.active}`}
                      onClick={() => imageClick(index)}
                      alt={product.title}
                    />
                  ))}
                </div>
              )}

              <div className={styles.mainImage}>
                {product.gallery.length > 0 ? (
                  <Image
                    alt={product.title}
                    src={`${API_URL}${product.gallery[currentImage].image.url}`}
                    fill
                  />
                ) : (
                  <Image
                    alt={product.title}
                    src={`${API_URL}${product.image?.url}`}
                    fill
                  />
                )}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col2}
          >
            <h1>{product.title}</h1>
            <div className={styles.notice}>
              <h4>Important Notice!</h4>
              <p>
                We sell 3D printing plans—not ready-made items. The final
                printed result may vary depending on your printer settings,
                materials, and techniques. Enjoy the flexibility of bringing
                these designs to life your way!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
