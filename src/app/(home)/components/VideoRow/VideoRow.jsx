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
      cover: "/images/video-production/cover1_1.webp",
      video: "/videos/3Dellium_Vid_1.mp4",
    },
    {
      cover: "/images/video-production/cover2.webp",
      video: "/videos/3Dellium_Vid_2.mp4",
    },
    {
      cover: "/images/video-production/cover3.webp",
      video: "/videos/3Dellium_Vid_3.mp4",
    },
    {
      cover: "/images/video-production/cover4.webp",
      video: "/videos/3Dellium_Vid_4.mp4",
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
