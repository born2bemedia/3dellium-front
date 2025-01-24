"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./DesignRow.module.scss";
import Image from "next/image";

const DesignRow = () => {
  const imageArray = [
    "/images/home/design1.png",
    "/images/home/design2.png",
    "/images/home/design3.png",
    "/images/home/design4.png",
  ];
  return (
    <div className={styles.designRow}>
      {imageArray.map((image, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.imageWrap}
          key={index}
        >
          <Image src={image} fill alt={`image-${index}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default DesignRow;
