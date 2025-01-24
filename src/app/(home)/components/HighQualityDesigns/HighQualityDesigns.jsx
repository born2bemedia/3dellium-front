"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./HighQualityDesigns.module.scss";

const HighQualityDesigns = () => {
  return (
    <section className={`main-section ${styles.highQuality}`}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.title}
        >
          High-Quality Designs Every Time
        </motion.h2>
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col}
          >
            <img src="/images/home/feature1.svg" />
            <h3>Expert Craftsmanship</h3>
            <p>
              Every design is meticulously created <br />
              by skilled professionals.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col}
          >
            <img src="/images/home/feature2.svg" />
            <h3>Precision and Detail</h3>
            <p>
              Tested, refined, and optimized for <br />
              flawless performance.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col}
          >
            <img src="/images/home/feature3.svg" />
            <h3>User-Centered Approach</h3>
            <p>
              Practical, intuitive, and tailored to <br />
              real-life needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HighQualityDesigns;
