"use client";
import React from "react";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./AnimationProcess.module.scss";
import Image from "next/image";

const AnimationProcess = () => {
  return (
    <section className={styles.process}>
      <div className="_container">
        <div className={styles.processTitle}>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.label}
          >
            Process
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            How Animations Are Crafted
          </motion.h2>
        </div>
        <div className={styles.processrow}>
          <motion.div
            className={styles.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <Image
              src={"/images/animations/animation1.jpg"}
              width={1280}
              height={252}
              quality={100}
              alt="Creative Concept Development"
            />
            <h3>Creative Concept Development</h3>
            <p>
              We collaborate with you to define the purpose, style, and message,
              transforming ideas into a compelling story.
            </p>
          </motion.div>
          <motion.div
            className={styles.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <Image
              src={"/images/animations/animation2.jpg"}
              width={1280}
              height={252}
              quality={100}
              alt="Storyboarding"
            />
            <h3>Storyboarding</h3>
            <p>
              Each frame is sketched to visually map the animation’s sequence,
              ensuring smooth and logical flow.
            </p>
          </motion.div>
          <motion.div
            className={styles.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <Image
              src={"/images/animations/animation3.jpg"}
              width={1280}
              height={252}
              alt="Design & Asset Creation"
              quality={100}
            />
            <h3>Design & Asset Creation</h3>
            <p>
              Characters, icons, and backgrounds are built precisely to match
              the desired look and feel.
            </p>
          </motion.div>
          <motion.div
            className={styles.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <Image
              src={"/images/animations/animation4.jpg"}
              width={1280}
              height={252}
              alt="Animation & Special Effects"
              quality={100}
            />
            <h3>Animation & Special Effects</h3>
            <p>
              Fluid movement and captivating effects breathe life into static
              designs, creating engaging motion.
            </p>
          </motion.div>
          <motion.div
            className={styles.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src={"/images/animations/animation5.jpg"}
              width={1280}
              height={252}
              alt="Design & Asset Creation"
              quality={100}
            />
            <h3>Design & Asset Creation</h3>
            <p>
              Characters, icons, and backgrounds are built precisely to match
              the desired look and feel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimationProcess;
