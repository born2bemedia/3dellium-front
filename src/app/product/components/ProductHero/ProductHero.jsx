'use client';
import React, { useState } from 'react';
import styles from './ProductHero.module.scss';
import { fadeInUp } from '@/helpers/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SingleAddToCartButton from '@/components/SingleAddToCartButton/SingleAddToCartButton';
import dynamic from 'next/dynamic';
import BreadArrow from '@/icons/BreadArrow';
import Link from 'next/link';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

const ProductHero = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const imageClick = index => {
    setCurrentImage(index);
  };

  return (
    <section className={styles.productHero}>
      <div className={'_container'}>
        <nav className={styles.breadcrumbs}>
          <Link
            href="/"
            className={styles.breadcrumbsText}
            style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            Home
          </Link>
          <BreadArrow />
          <Link
            href="/3d-modelling"
            className={styles.breadcrumbsText}
            style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            3D Modelling
          </Link>
          <BreadArrow />
          <p className={styles.breadcrumbsText}>{product.title}</p>
        </nav>
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
                        objectFit={'cover'}
                        className={`${currentImage == index && styles.active}`}
                        onClick={() => imageClick(index)}
                        alt={product.title}
                        quality={100}
                      />
                    ))}
                  </div>
                )}
                <div
                  className={styles.mainImage}
                  style={{
                    backgroundColor: product.color
                      ? product.color
                      : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {product.gallery.length > 0 ? (
                    <Image
                      alt={product.title}
                      src={`${API_URL}${product.gallery[currentImage].image.url}`}
                      fill
                      quality={100}
                    />
                  ) : (
                    <Image
                      alt={product.title}
                      src={`${API_URL}${product.image?.url}`}
                      fill
                      quality={100}
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
            </div>
            <div className={styles.productBottom}>
              <div className={styles.addToCart}>
                <div className={styles.price}>
                  <span>€</span>
                  {product.price}
                </div>
                <SingleAddToCartButton product={product} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
