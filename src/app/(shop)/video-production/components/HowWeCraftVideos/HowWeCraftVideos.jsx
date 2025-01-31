"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./HowWeCraftVideos.module.scss";

const HowWeCraftVideos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const details = [
    {
      id: 1,
      title: "Idea Gathering",
      text: "You share your story, materials, and vision—photos, text, or video snippets.",
      image: "/images/video-production/back1.png",
    },
    {
      id: 2,
      title: "Concept Development",
      text: "We design a tailored storyboard and plan that brings your story to life.",
      image: "/images/video-production/back1.png",
    },
    {
      id: 3,
      title: "Video Editing & Assembly",
      text: "Our team expertly combines your materials, adding transitions, effects, and music to create a seamless video.",
      image: "/images/video-production/back1.png",
    },
    {
      id: 4,
      title: "Final Touches & Delivery",
      text: "After reviewing and refining the video, we will deliver the final version, which is ready to share with the world. ",
      image: "/images/video-production/back1.png",
    },
  ];

  return (
    <section className={styles.howWeCraftVideos}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          How We Craft Videos
        </motion.h2>
        <div className={styles.body}>
          {details.map((detail, index) => (
            <div
              key={index}
              onMouseOver={() => setActiveIndex(index)}
              className={`${styles.col} ${
                activeIndex == index ? styles.active : ""
              }`}
            >
              <div
                className={styles.overlay}
                style={{ backgroundImage: `url(${detail.image})` }}
              />
              <div className={styles.inner}>
                <h3>{detail.id}</h3>
                <div className={styles.info}>
                  <div>
                    <h4>{detail.title}</h4>
                    <p>{detail.text}</p>
                  </div>
                </div>

                <img src="/images/video-production/plus.svg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeCraftVideos;
