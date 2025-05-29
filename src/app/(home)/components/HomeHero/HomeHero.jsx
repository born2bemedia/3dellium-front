'use client';
import React from 'react';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/helpers/animations';
import { motion } from 'framer-motion';
import styles from './HomeHero.module.scss';
import Image from 'next/image';

const HomeHero = () => {
  return (
    <section className={styles.homeHero}>
      <div className={'_container'}>
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              Shape your <br />
              stories—
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              ready-to-use designs for life.
            </motion.h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col2}
          >
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              custom={0.5}
            >
              Happiness lives in everyday moments—3Dellora brings your ideas to
              life with ready-to-use designs, animations, and more.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.bottom}
      >
        <img
          className={styles.heroNew}
          src={'/images/home/heroNew.webp'}
          alt="hero"
        />
        <img
          className={styles.heroNewMob}
          src={'/images/home/heroNewMob.webp'}
          alt="hero"
        />
      </motion.div>
    </section>
  );
};

export default HomeHero;
