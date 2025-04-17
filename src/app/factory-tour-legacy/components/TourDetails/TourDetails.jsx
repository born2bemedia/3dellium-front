"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./TourDetails.module.scss";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const TourDetails = () => {
  const videos = [
    {
      title: "Precision <br/>Crafting",
      text: "Every plan, animation, video, and UX is meticulously developed, tested, and optimized to simplify your work and maximize impact.",
      cover: "/images/factory/video1.webp",
      video: "/images/factory/video1.mp4",
    },
    {
      title: "Visual <br/>Mastery",
      text: "Our designers create stunning representations of each plan or design so you know exactly what to expect—simple, effective, and inspiring.",
      cover: "/images/factory/video2.webp",
      video: "/images/factory/video2.mp4",
    },
  ];

  return (
    <>
      <section className={styles.tourDetails}>
        <div className="_container">
          <div className={styles.body}>
            {videos.map((video, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.videoRow}
              >
                <ReactPlayer
                  url={video.video}
                  loop={true}
                  className={styles.video}
                  width={746}
                  height={455}
                  muted={true}
                  playing={true}
                  volume={0}
                />
                <div className={styles.col}>
                  <p dangerouslySetInnerHTML={{ __html: video.text }} />
                  <h3 dangerouslySetInnerHTML={{ __html: video.title }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourDetails;
