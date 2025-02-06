"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./CtaBlock.module.scss";
import Link from "next/link";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

const CtaBlock = () => {
  return (
    <section className={`main-section ${styles.ctaBlock}`}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col1}
          >
            <h2>
              It's <br />
              3Dellium!
            </h2>
            <Link href={"#"}>
              <div>
                <AddToCartArrow2 />
                <span>Explore Our World</span>
                <AddToCartArrow1 />
              </div>
            </Link>
          </motion.div>
          <div className={styles.col2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.text}
            >
              <span>Ready-to-Use Solutions</span>
              Professional designs, instantly available.
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.text}
            >
              <span>Everyday Convenience</span>
              Practical tools and content for real life.
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.text}
            >
              <span>Expressive Designs</span>
              Tell your story with engaging visuals.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
