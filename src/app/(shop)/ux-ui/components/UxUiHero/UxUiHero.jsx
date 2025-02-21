"use client";
import React from "react";
import { fadeInUp, fadeInLeft } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./UxUiHero.module.scss";
import Image from "next/image";

const UxUiHero = () => {
  return (
    <section className={styles.shopHero}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className={styles.title}
        >
          <h1>UI/UX Design</h1>
          <p>Design. Optimize. Engage Users.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.body}
        >
          <div className={styles.videoWrap}>
            <Image
              src={"/images/ux/hero.jpg"}
              width={1447}
              height={545}
              alt="hero"
              quality={100}
            />
            <Image
              src={"/images/ux/heroMob.jpg"}
              width={1447}
              height={545}
              alt="hero"
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UxUiHero;
