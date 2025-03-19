"use client";
import React from "react";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./ShopHero.module.scss";
import Image from "next/image";

const ShopHero = ({ title, subtitle, image, imageMob, backgroundColor }) => {
  return (
    <section className={styles.homeHero} style={{ backgroundColor }}>
      <div className={"_container"}>
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              {title}
            </motion.h1>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col2}
          >
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              custom={0.5}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.bottom}
      >
        <img className={styles.heroNew} src={image} alt="hero" />
        <img className={styles.heroNewMob} src={imageMob} alt="hero" />
      </motion.div>
    </section>
  );
};

export default ShopHero;
