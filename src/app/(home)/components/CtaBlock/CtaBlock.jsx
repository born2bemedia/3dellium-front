'use client';
import React from 'react';
import { fadeInUp } from '@/helpers/animations';
import { motion } from 'framer-motion';
import styles from './CtaBlock.module.scss';
import Link from 'next/link';
import AddToCartArrow2 from '@/icons/AddToCart/AddToCartArrow2';
import AddToCartArrow1 from '@/icons/AddToCart/AddToCartArrow1';
import GreyButton from '@/components/GreyButton/GreyButton';

const CtaBlock = () => {
  return (
    <section className={`main-section ${styles.ctaBlock}`}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.top}
          >
            <h2>It's 3Dellora!</h2>
            <GreyButton link="/factory-tour" text="Explore Our World" />
          </motion.div>
          <div className={styles.bottom}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Ready-to-Use Solutions</h3>
                <p>Professional designs, instantly available.</p>
              </div>
              <img src="/images/home/cta1.svg" alt="icon1" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Everyday Convenience</h3>
                <p>Practical tools and content for real life.</p>
              </div>
              <img src="/images/home/cta2.svg" alt="icon1" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Expressive Designs</h3>
                <p>Tell your story with engaging visuals.</p>
              </div>
              <img src="/images/home/cta3.svg" alt="icon1" />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.top}
          >
            <h2 className={styles.right}>High-Quality Designs Every Time</h2>
          </motion.div>

          <div className={styles.bottom}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Expert Craftsmanship</h3>
                <p>
                  Every design is meticulously created by skilled professionals.
                </p>
              </div>
              <img src="/images/home/cta4.svg" alt="icon1" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Precision and Detail</h3>
                <p>Tested, refined, and optimized for flawless performance.</p>
              </div>
              <img src="/images/home/cta5.svg" alt="icon1" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>User-Centered Approach</h3>
                <p>Practical, intuitive, and tailored to real-life needs.</p>
              </div>
              <img src="/images/home/cta6.svg" alt="icon1" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
