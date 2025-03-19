"use client";
import React from "react";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./AnimationHero.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AnimationHero = ({
  title,
  subtitle,
  image,
  imageMob,
  backgroundColor,
}) => {
  return (
    <section className={styles.homeHero} style={{ backgroundColor }}>
      <div className={"_container"}>
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              {title}
            </motion.h1>
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
              {subtitle}
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
        <div className={styles.videos}>
          <ReactPlayer
            url={"/images/animations/video1.mp4"}
            playing={true}
            controls={false}
            loop={true}
            className={styles.video}
            height={300}
            muted={true}
            volume={0}
            cover={"/images/animations/video1.png"}
          />
          <ReactPlayer
            url={"/images/animations/video2.mp4"}
            playing={true}
            controls={false}
            loop={true}
            className={styles.video}
            height={300}
            muted={true}
            volume={0}
            cover={"/images/animations/video2.png"}
          />
          <ReactPlayer
            url={"/images/animations/video3.mp4"}
            playing={true}
            controls={false}
            loop={true}
            className={styles.video}
            height={300}
            muted={true}
            volume={0}
            cover={"/images/animations/video3.png"}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AnimationHero;
