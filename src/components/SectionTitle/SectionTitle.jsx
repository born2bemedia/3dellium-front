"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ label, title, text }) => {
  return (
    <div className={styles.sectionTitle}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.label}
      >
        {label}
      </motion.span>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default SectionTitle;
