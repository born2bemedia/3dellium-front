"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./SamplesOfWorks.module.scss";
import dynamic from "next/dynamic";
import CheckMark from "@/icons/CheckMark";
import Link from "next/link";
import LearnMoreButton from "@/components/LearnMoreButton/LearnMoreButton";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";
import GreyButton from "@/components/GreyButton/GreyButton";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const SamplesOfWorks = () => {
  const principles = [
    {
      title: "User-Centric Design",
      text: "Every decision we make starts with understanding the end user. We prioritize simplicity, usability, and intuitive navigation.",
      cover: "/images/ux/cover1.png",
    },
    {
      title: "Seamless Functionality",
      text: "A great design needs more than aesthetics—it must work flawlessly. We ensure every interaction feels smooth, and frustration-free.",
      cover: "/images/ux/cover2.png",
    },
    {
      title: "Visual Hierarchy",
      text: "We use layout, typography, and color to guide users naturally through your platform, highlighting the most important elements and driving action.",
      cover: "/images/ux/cover3.png",
    },
    {
      title: "Accessibility for All",
      text: "We craft inclusive designs with seamless experience for all, including those with visual, auditory, or physical challenges.",
      cover: "/images/ux/cover4.png",
    },
    {
      title: "Complete Consistency",
      text: "We maintain a unified design language from fonts to button styles to enhance usability and reinforce your brand identity.",
      cover: "/images/ux/cover5.png",
    },
  ];

  return (
    <>
      <section className={styles.samplesWrap}>
        <div className="_container">
          <div className={styles.sectionTitle}>
            <div className={styles.col}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                Our Principles
              </motion.h2>
            </div>
            <div className={styles.buttons}>
              <Link href="/3Dellium_Wanwick_SL_Price_List.pdf" target="_blank">
                Get Pricing
              </Link>
              <GreyButton text={"Order UI/UX Design"} link={"#assistance"} />
            </div>
          </div>
          <div className={styles.body}>
            {principles.map((principle, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.videoRow}
              >
                <div className={styles.col}>
                  <h3 dangerouslySetInnerHTML={{ __html: principle.title }} />
                  <p dangerouslySetInnerHTML={{ __html: principle.text }} />
                </div>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${principle.cover})`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SamplesOfWorks;
