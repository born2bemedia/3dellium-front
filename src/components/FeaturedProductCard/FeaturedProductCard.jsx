'use client';
import React, { useEffect, useState } from 'react';
import { fadeInUp } from '@/helpers/animations';
import { motion } from 'framer-motion';
import styles from './FeaturedProductCard.module.scss';
import Link from 'next/link';
import AddToCartButton from '../AddToCartButton';
import Image from 'next/image';
import AddToCartButtonLoop from '../AddToCartButtonLoop/AddToCartButtonLoop';
import { API_URL } from '@/helpers/constants';
import dynamic from 'next/dynamic';
import { cn } from '@/styles/utils';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const FeaturedProductCard = ({
  product,
  classValue,
  playing = false,
  imgStyles,
  buyStyles,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(product);

  useEffect(() => {
    if (playing) {
      setIsPlaying(true);
    }
  }, [playing]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={`${styles.card} ${
        classValue.includes('wide') && styles.wide
      } ${classValue.includes('animation') && styles.full}`}
    >
      <Link href={`/product/${product.slug}`}>
        {!classValue.includes('wide') && <h3>{product.title}</h3>}

        <div
          className={cn(styles.cardImage, imgStyles)}
          style={{
            backgroundColor: product.color ? product.color : 'rgba(0, 0, 0, 0.05)',
          }}
        >
          {classValue.includes('wide') ? (
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
                        : '/placeholder.jpg'
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
                      : '/placeholder.jpg'
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
                        : '/placeholder.jpg'
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
                      : '/placeholder.jpg'
                  }
                  alt={product.title}
                />
              )}
            </>
          )}
        </div>
      </Link>
      <div className={cn(styles.cardBottom, buyStyles)}>
        {classValue.includes('wide') && <h3>{product.title}</h3>}
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
