"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.homeHero}>
      <video
        width="1440"
        height="680"
        autoPlay={true}
        muted
        loop
        preload="none"
      >
        <source src="/videos/homeHero.webm" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className="_container">
        <div className={styles.body}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span>Shape your stories—</span>
            ready-to-use designs for life
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Happiness lives in everyday moments—3Dellium brings your ideas to
            life with ready-to-use designs, animations, and more.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
