"use client";
import React from "react";
import { fadeInUp, fadeInLeft } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./IdeasHero.module.scss";
import Image from "next/image";

const IdeasHero = () => {
  return (
    <section className={styles.ideasHero}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className={styles.title}
        >
          <h1>Ideas</h1>
          <p>Inspire. Create. Share Knowledge.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.body}
        >
          <div className={styles.imageWrap}>
            <Image src={"/images/ideas/hero.png"} alt="hero" fill />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IdeasHero;
