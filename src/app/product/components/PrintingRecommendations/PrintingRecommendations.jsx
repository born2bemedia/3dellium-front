'use client';

import React, { useState } from 'react';
import styles from './PrintingRecommendations.module.scss';
import { fadeInUp } from '@/helpers/animations';
import { motion } from 'framer-motion';

const recommendations = [
  {
    title: 'Use the Right Material',
    text: 'PLA is great for general-purpose items, while PETG or ABS offers more durability.',
    icon: '/images/product/rec1.svg',
  },
  {
    title: 'Adjust Infill Percentage',
    text: 'Use higher infill for strength (20%+) or lower for faster prints and lighter objects.',
    icon: '/images/product/rec2.svg',
  },
  {
    title: 'Calibrate Your Printer',
    text: 'Regularly check your bed leveling and nozzle settings for consistent results.',
    icon: '/images/product/rec3.svg',
  },
  {
    title: 'Check Print Orientation',
    text: 'Ensure proper orientation reduces support usage and improves strength.',
    icon: '/images/product/rec4.svg',
  },
  {
    title: 'Optimize Layer <br/>Height',
    text: 'Use a lower layer height (e.g., 0.1mm) for finer details. For quicker prints, 0.2mm works <br/>well.',
    icon: '/images/product/rec5.svg',
  },
  {
    title: 'Optimize Print <br/>Speed',
    text: 'Adjust speed to balance quality and efficiency—use slower speeds for intricate details and faster speeds for larger prints.',
    icon: '/images/product/rec6.svg',
  },
];

const PrintingRecommendations = () => {
  return (
    <section className={styles.printing}>
      <div className="_container">
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
              <div>
                <h3>{rec.title}</h3>
              </div>
              <p>{rec.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingRecommendations;
