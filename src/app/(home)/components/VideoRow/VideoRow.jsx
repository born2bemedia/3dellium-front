"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./VideoRow.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoRow = ({ animation = false }) => {
  const videoArray = [
    {
      cover: "/images/home/video1_preview.png",
      video: "/videos/homeHero.webm",
    },
    {
      cover: "/images/home/video2_preview.png",
      video: "/videos/homeHero.webm",
    },
    {
      cover: "/images/home/video3_preview.png",
      video: "/videos/homeHero.webm",
    },
    {
      cover: "/images/home/video4_preview.png",
      video: "/videos/homeHero.webm",
    },
  ];

  return (
    <div className={styles.videoRow}>
      {videoArray.map((video, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          key={index}
        >
          <ReactPlayer
            url={video.video}
            light={video.cover}
            playIcon={<img width={60} height={60} src="/images/playIcon.svg" />}
            playing
            controls={!animation}
            loop={true}
            className={styles.video}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default VideoRow;
