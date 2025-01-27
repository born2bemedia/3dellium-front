"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./SectionTitle.module.scss";
import MoreButton from "../MoreButton/MoreButton";
import LearnMoreButton from "../LearnMoreButton/LearnMoreButton";

const SectionTitle = ({
  label,
  title,
  text,
  classValue,
  buttonText,
  buttonType,
  buttonLink,
}) => {
  return (
    <div
      className={`${styles.sectionTitle} ${
        classValue == "left" && styles.left
      }`}
    >
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
      {buttonType == "learn" ? (
        <LearnMoreButton text={buttonText} link={buttonLink} />
      ) : (
        <MoreButton text={buttonText} link={buttonLink} />
      )}
    </div>
  );
};

export default SectionTitle;
