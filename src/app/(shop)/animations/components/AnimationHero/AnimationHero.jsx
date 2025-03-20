"use client";
import React, { useEffect, useState } from "react";
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
          <div className={styles.videoWrapper}>
            <Image
              fill
              quality={100}
              src={"/images/animations/video1.png"}
              alt={"video1"}
              style={{
                opacity: isVideoPlaying ? 0 : 1,
              }}
            />
            <ReactPlayer
              url={"/images/animations/video1.mp4"}
              playing={isVideoPlaying}
              controls={false}
              loop={true}
              className={styles.video}
              height={300}
              muted={true}
              volume={0}
              //light={"/images/animations/video1.png"}
              onReady={() => setIsVideoPlaying(true)}
            />
          </div>
          <div className={styles.videoWrapper}>
            <Image
              fill
              quality={100}
              src={"/images/animations/video2.png"}
              alt={"video1"}
              style={{
                opacity: isVideoPlaying ? 0 : 1,
              }}
            />
            <ReactPlayer
              url={"/images/animations/video2.mp4"}
              playing={isVideoPlaying}
              controls={false}
              loop={true}
              className={styles.video}
              height={300}
              muted={true}
              volume={0}
              //light={"/images/animations/video2.png"}
              onReady={() => setIsVideoPlaying(true)}
            />
          </div>
          <div className={styles.videoWrapper}>
            <Image
              fill
              quality={100}
              src={"/images/animations/video3.png"}
              alt={"video1"}
              style={{
                opacity: isVideoPlaying ? 0 : 1,
              }}
            />
            <ReactPlayer
              url={"/images/animations/video3.mp4"}
              playing={isVideoPlaying}
              controls={false}
              loop={true}
              className={styles.video}
              height={300}
              muted={true}
              volume={0}
              //light={"/images/animations/video3.png"}
              onReady={() => setIsVideoPlaying(true)}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimationHero;
