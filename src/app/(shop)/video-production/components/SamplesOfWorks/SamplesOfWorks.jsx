"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./SamplesOfWorks.module.scss";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const SamplesOfWorks = () => {
  const videos = [
    {
      title: "Dynamic Happy Birthday Greeting Video",
      text: "This lively, animated birthday greeting features colorful confetti, nostalgic photo transitions, and an interactive gift box. It also includes upbeat music, text animations, and a final cake surprise to celebrate the occasion with energy and fun. Perfect for a personalized birthday message.",
      cover: "/images/video-production/cover1.webp",
      video: "/videos/homeHero.webm",
    },
    {
      title: "Personal Coach Promotion Video",
      text: "This dynamic video promotes a personal coach’s services, showcasing expertise through engaging blog content, client testimonials, and motivational messages. Featuring energetic visuals of the coach in action, along with motivational text and seamless transitions, the video invites viewers to follow and engage for daily inspiration. It is perfect for promoting coaching services and building a personal brand.",
      cover: "/images/video-production/cover2.webp",
      video: "/videos/homeHero.webm",
    },
    {
      title: "Freelance Developer Portfolio Video",
      text: "An engaging video that highlights the skills, experience, and projects of a freelance developer. It showcases core competencies such as PHP, Java, Python, and JavaScript with interactive visuals, followed by real-world examples of projects like e-commerce solutions and app interfaces. The video concludes with a strong call to action, inviting potential clients to contact. Perfect for developers looking to showcase their portfolio and attract new business.",
      cover: "/images/video-production/cover3.webp",
      video: "/videos/homeHero.webm",
    },
    {
      title: "Motivational Video for Social Networks",
      text: "A calming and inspiring video designed to motivate and uplift audiences. It features serene visuals like sunrises, forest scenes, and peaceful imagery paired with reflective quotes. The video encourages self-care, action, and mindfulness, making it perfect for social media content that aims to inspire and engage viewers. The gentle call to action invites audiences to share positivity and follow for more daily inspiration.",
      cover: "/images/video-production/cover4.webp",
      video: "/videos/homeHero.webm",
    },
  ];

  return (
    <>
      <section className={styles.samplesWrap}>
        <div className="_container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Samples of Works
          </motion.h2>
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
                  light={video.cover}
                  playIcon={
                    <img
                      width={100}
                      height={100}
                      src="/images/playIconGreen.svg"
                    />
                  }
                  playing
                  controls
                  loop={true}
                  className={styles.video}
                  width={838}
                  height={455}
                  
                />
                <div className={styles.col}>
                  <h3 dangerouslySetInnerHTML={{ __html: video.title }} />
                  <p dangerouslySetInnerHTML={{ __html: video.text }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SamplesOfWorks;
