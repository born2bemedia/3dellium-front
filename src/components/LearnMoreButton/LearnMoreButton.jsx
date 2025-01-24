"use client";
import Link from "next/link";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./LearnMoreButton.module.scss";

const LearnMoreButton = ({ text, link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.moreButton}
    >
      <Link href={link}>{text}</Link>
    </motion.div>
  );
};

export default LearnMoreButton;
