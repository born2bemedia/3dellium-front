"use client";
import React, { useState } from "react";
import styles from "./ProductHero.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import SingleAddToCartButton from "@/components/SingleAddToCartButton/SingleAddToCartButton";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

const ProductHero = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  //console.log(product);

  const imageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className={styles.productHero}>
      <div className={"_container"}>
        <div
          className={`${styles.body} ${
            product.category?.id == 6 && styles.animation
          }`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col1}
          >
            {product.category?.id !== 6 ? (
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
            ) : (
              <div className={styles.animationWrap}>
                <ReactPlayer
                  url={`${API_URL}${product.preview?.url}`}
                  light={`${API_URL}${product.big_image.url}`}
                  playIcon={
                    <img
                      width={100}
                      height={100}
                      src="/images/playIconGreen.svg"
                    />
                  }
                  playing
                  controlsList="nodownload nofullscreen"
                  loop={true}
                  className={styles.video}
                  
                  height={543}
                />
              </div>
            )}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col2}
          >
            <div className={styles.productTop}>
              <h1>{product.title}</h1>
              {product.content?.root.children.length > 0 && (
                <p>{product.content?.root.children[0].children[0].text}</p>
              )}
              {product.category?.id !== 6 ? (
                <div className={styles.productDetails}>
                  <div>
                    <h3>Type of delivery:</h3>
                    <div>
                      <span>Digital Download</span>
                    </div>
                  </div>
                  {product.files.length > 0 && (
                    <div>
                      <h3>What is included:</h3>
                      <div>
                        {product.files?.map((file, index) => (
                          <span key={index}>{file.file.alt}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.filesurl.length > 0 && (
                    <div>
                      <h3>What is included:</h3>
                      <div>
                        {product.filesurl?.map((file, index) => (
                          <span key={index}>{file.filename}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className={styles.productBottom}>
              <div className={styles.addToCart}>
                <div className={styles.price}>
                  <span>€</span>
                  {product.price}
                </div>
                <SingleAddToCartButton product={product} />
              </div>
              {product.category?.id !== 6 ? (
                <div className={styles.notice}>
                  <h4>
                    <img src="/images/product/info.svg" />
                    Important Notice!
                  </h4>
                  <p>
                    We sell 3D printing plans—not ready-made items. The final
                    printed result may vary depending on your printer settings,
                    materials, and techniques. Enjoy the flexibility of bringing
                    these designs to life your way!
                  </p>
                </div>
              ) : (
                <div className={styles.notice}>
                  <h4>
                    <img src="/images/product/info.svg" />
                    Disclaimer of No Exclusivity
                  </h4>
                  <p>
                    This animation is sold as a non-exclusive product, meaning
                    other buyers may also purchase and use it.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
