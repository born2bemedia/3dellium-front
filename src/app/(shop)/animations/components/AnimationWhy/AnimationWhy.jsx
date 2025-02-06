"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./AnimationWhy.module.scss";
import Image from "next/image";
import Link from "next/link";

const AnimationWhy = () => {
  const advantages = [
    {
      title: "Ready-to-Use & <br/>Custom Options",
      text: "Choose pre-made animations or order a custom creation.",
      icon: "/images/animations/adv1.svg",
    },
    {
      title: "Personalized <br/>Storytelling",
      text: "Designed to match your unique style and message.",
      icon: "/images/animations/adv2.svg",
    },
    {
      title: "High-Quality <br/>Graphics",
      text: "Smooth motion, sharp visuals, and all-screen optimized.",
      icon: "/images/animations/adv3.svg",
    },
    {
      title: "Affordable <br/>Pricing",
      text: "Flexible packages that fit your needs and budget.",
      icon: "/images/animations/adv4.svg",
    },
  ];

  return (
    <section className={styles.why}>
      <div className="_container">
        <div className={styles.whyTitle}>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.label}
          >
            We are reliable
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            Why Order Animations from 3Dellium?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.text}
          >
            Crafted by experts, designed for impact—our animations are built{" "}
            <br />
            to inspire.
          </motion.p>
        </div>
        <div className={styles.body}>
          {advantages.map((adv, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
              key={index}
            >
              <p>{adv.text}</p>
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: adv.title }} />
                <img src={adv.icon} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className={styles.buttons}>
          <Link href="#">Get Pricing</Link>
          <Link href="#assistance">Order Custom Animation</Link>
        </div>
        <div className={styles.ctaTitle}>
          Instant Solutions for Personal Expression
        </div>
      </div>
    </section>
  );
};

export default AnimationWhy;
