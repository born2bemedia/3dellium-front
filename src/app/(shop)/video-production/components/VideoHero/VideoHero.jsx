"use client";
import React, { use, useEffect, useState } from "react";
import { fadeInUp, fadeInLeft } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./VideoHero.module.scss";
import Image from "next/image";
import AddToCartButtonLoop from "@/components/AddToCartButtonLoop/AddToCartButtonLoop";
import Link from "next/link";
import Skeleton from "@/components/Skeleton/Skeleton";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN;

const CACHE_TAG_PRODUCTS = "products";

const VideoHero = () => {
  return (
    <section className={styles.shopHero}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className={styles.title}
        >
          <h1>Video Production</h1>
          <p>Craft. Engage. Inspire Moments.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.body}
        >
          <div className={styles.videoWrap}>
            <video
              width="1360"
              height="545"
              autoPlay={true}
              muted
              loop
              preload="none"
            >
              <source src="/videos/videoHero.mov" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero;
