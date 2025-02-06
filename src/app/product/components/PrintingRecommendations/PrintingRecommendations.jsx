"use client";
import React, { useState } from "react";
import styles from "./PrintingRecommendations.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";

const PrintingRecommendations = () => {
  const recommendations = [
    {
      title: "Use the Right Material",
      text: "PLA is great for general-purpose items, while PETG or ABS offers more durability.",
      icon: "/images/product/rec1.svg",
    },
    {
      title: "Adjust Infill Percentage",
      text: "Use higher infill for strength (20%+) or lower for faster prints and lighter objects.",
      icon: "/images/product/rec2.svg",
    },
    {
      title: "Calibrate Your Printer",
      text: "Regularly check your bed leveling and nozzle settings for consistent results.",
      icon: "/images/product/rec3.svg",
    },
    {
      title: "Check Print Orientation",
      text: "Ensure proper orientation reduces support usage and improves strength.",
      icon: "/images/product/rec4.svg",
    },
    {
      title: "Optimize Layer Height",
      text: "Use a lower layer height (e.g., 0.1mm) for finer details. For quicker prints, 0.2mm works well.",
      icon: "/images/product/rec5.svg",
    },
  ];

  return (
    <section className={styles.printing}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Printing Recommendations
        </motion.h2>
        <div className={styles.body}>
          {recommendations.map((rec, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
              key={index}
            >
              <p>{rec.text}</p>
              <div>
                <h3>{rec.title}</h3>
                <img src={rec.icon} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingRecommendations;
