"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./WhenWrong.module.scss";
import Link from "next/link";

const WhenWrong = () => {
  const details = [
    {
      title: "Users Can’t Find What They Need",
      text: "When UX is wrong and navigation is unclear, users get frustrated and leave your site without taking action.",
    },
    {
      title: "Your Visitors Leave Too Quickly",
      text: "A poor design leads to high bounce rates, meaning missed opportunities to engage your audience and rank higher on Google.",
    },
    {
      title: "Negative First Impressions",
      text: "A clunky or unattractive interface drives users away, harming your reputation from the start.",
    },
    {
      title: "Users Get Frustrated and Don’t Return",
      text: "Confusing layouts or slow functionality create negative experiences that deter repeat visits.",
    },
  ];

  return (
    <section className={styles.whenWrong}>
      <div className="_container">
        <div className={styles.body}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            When UI/UX Goes Wrong
            <img src="/images/ux/WarningCircle.svg" />
          </motion.h2>
          <div className={styles.row}>
            {details.map((detail, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.item}
                key={index}
              >
                <p>{detail.text}</p>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: detail.title }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenWrong;
