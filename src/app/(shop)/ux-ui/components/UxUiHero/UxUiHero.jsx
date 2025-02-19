"use client";
import React from "react";
import { fadeInUp, fadeInLeft } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./UxUiHero.module.scss";

const UxUiHero = () => {
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
          <h1>UI/UX Design</h1>
          <p>Design. Optimize. Engage Users.</p>
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
              <source src="/images/ux/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UxUiHero;
