"use client";
import Link from "next/link";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./LearnMoreButton.module.scss";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

const LearnMoreButton = ({ text, link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.moreButton}
    >
      <Link href={link}>
        <div>
          <AddToCartArrow2 />
          <span>{text}</span>
          <AddToCartArrow1 />
        </div>
      </Link>
    </motion.div>
  );
};

export default LearnMoreButton;
