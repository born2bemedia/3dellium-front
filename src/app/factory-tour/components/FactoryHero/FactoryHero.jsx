"use client";
import React from "react";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./FactoryHero.module.scss";
import Image from "next/image";

const FactoryHero = () => {
  return (
    <section className={styles.factoryHero}>
      <div className={styles.container}>
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className={styles.item}
            custom={1}
          >
            <h1>
              Factory <br />
              Tour
            </h1>
            <p>Research. Create. Inspire.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
            custom={1}
          >
            <Image src={"/images/factory/hero1.png"} alt="hero1" fill />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className={styles.item}
            custom={1}
          >
            <Image src={"/images/factory/hero2.png"} alt="hero2" fill />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className={styles.item}
            custom={1.2}
          >
            <Image src={"/images/factory/hero3.png"} alt="hero3" fill />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
            custom={1.2}
          >
            <Image src={"/images/factory/hero4.png"} alt="hero4" fill />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className={styles.item}
            custom={1.2}
          >
            <p>
              We research trends and brainstorm innovative ideas—transforming
              everyday tools like desktop organizers and kitchen gadgets into
              life-enhancing designs.
            </p>
            <h2>We Do Analytics</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FactoryHero;
