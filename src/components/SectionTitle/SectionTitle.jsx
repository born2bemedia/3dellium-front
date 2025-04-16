"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./SectionTitle.module.scss";
import GreyButton from "../GreyButton/GreyButton";
import GreenButton from "@/components/GreenButton/GreenButton";

const SectionTitle = ({
  label,
  labelVariant,
  title,
  titleStyles,
  text,
  textStyles,
  classValue,
  buttonText,
  buttonType,
  buttonLink,
  buttonVariant,
}) => {
  return (
    <div
      className={`${styles.sectionTitle} ${classValue === "white" && styles.white}`}
    >
      <div className={styles.col}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={labelVariant === 'green'? styles.labelGreen : styles.label}
        >
          {label}
        </motion.span>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.title}
          style={titleStyles}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.text}
          style={textStyles}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      {buttonText && (buttonVariant === 'green' ? <GreenButton text={buttonText} link={buttonLink} /> : <GreyButton text={buttonText} link={buttonLink} />)}
    </div>
  );
};

export default SectionTitle;
