"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./HowWeCraftExperiences.module.scss";

const HowWeCraftExperiences = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const details = [
    {
      id: 1,
      title: "Understand Your Vision",
      text: "We analyze your goals, target audience, and competitors to create a tailored strategy.",
      image: "/images/ux/back1.png",
    },
    {
      id: 2,
      title: "Build the Structure",
      text: "We develop wireframes and prototypes to map user journeys and test functionality early.",
      image: "/images/ux/back2.png",
    },
    {
      id: 3,
      title: "Design for Impact",
      text: "Our team creates visually appealing, intuitive designs that reflect your brand and engage users.",
      image: "/images/ux/back3.png",
    },
    {
      id: 4,
      title: "Test and Optimize",
      text: "We test with real users and refine the design to ensure seamless functionality and maximum impact.",
      image: "/images/ux/back4.png",
    },
  ];

  return (
    <section className={styles.howWeCraftExperiences}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          How We Craft Experiences
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

export default HowWeCraftExperiences;
