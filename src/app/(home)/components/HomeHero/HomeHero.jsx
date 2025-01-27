"use client";
import React from "react";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./HomeHero.module.scss";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className={styles.homeHero}>
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              Shape your <br />
              stories
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              custom={0.5}
            >
              Happiness lives in everyday moments—3Dellium brings your ideas to
              life with ready-to-use designs, animations, and more.
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col2}
          >
            <Image
              src={"/images/home/hero.png"}
              width={655}
              height={341}
              alt="hero"
            />
            <Image
              src={"/images/home/heroFloat1.png"}
              width={281}
              height={267}
              alt="hero"
            />
          </motion.div>
        </div>
        <div className={styles.bottom}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col1}
          >
            <Image
              src={"/images/home/heroFloat2.png"}
              width={132}
              height={126}
              alt="hero"
            />
          </motion.div>
          <motion.div className={styles.col2}>
            <h3>
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                custom={0.5}
              >
                ready-to-use
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                custom={0.8}
              >
                designs for life
              </motion.span>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
