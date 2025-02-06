"use client";
import Link from "next/link";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./MoreButton.module.scss";
import ButtonArrow from "@/icons/ButtonArrow";

const MoreButton = ({ text, link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.moreButton}
    >
      <Link href={link}>
        <span className={styles.circle}></span>
        <span className={styles.text}>
          {text}
          <ButtonArrow />
        </span>
      </Link>
    </motion.div>
  );
};

export default MoreButton;
