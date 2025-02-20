"use client";
import React from "react";
import { fadeInUp, fadeInLeft } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./AnimationHero.module.scss";

const AnimationHero = () => {
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
          <h1>Animations</h1>
          <p>Move. Express. Enrich Life.</p>
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
              <source src="/images/animations/heroAnim.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimationHero;
