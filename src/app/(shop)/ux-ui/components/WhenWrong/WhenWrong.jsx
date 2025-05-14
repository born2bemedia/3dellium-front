"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./WhenWrong.module.scss";
import Image from "next/image";
import Link from "next/link";
import GreyButton from "@/components/GreyButton/GreyButton";

const WhenWrong = () => {
  const advantages = [
    {
      title: "Users Can’t Find What They Need",
      text: "When UX is wrong and navigation is unclear, users get frustrated and leave your site without taking action.",
      icon: "/images/ux/adv1.svg",
    },
    {
      title: "Your Visitors Leave Too Quickly",
      text: "A poor design leads to high bounce rates, meaning missed opportunities to engage your audience and rank higher on Google.",
      icon: "/images/ux/adv2.svg",
    },
    {
      title: "Negative First Impressions",
      text: "A clunky or unattractive interface drives users away, harming your reputation from the start.",
      icon: "/images/ux/adv3.svg",
    },
    {
      title: "Users Get Frustrated and Don’t Return",
      text: "Confusing layouts or slow functionality create negative experiences that deter repeat visits.",
      icon: "/images/ux/adv4.svg",
    },
  ];

  return (
    <section className={styles.whenWrong}>
      <div className="_container">
        <div className={styles.sectionTitle}>
          <div className={styles.col}>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.label}
            >
              We are reliable
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              When UI/UX Goes Wrong
            </motion.h2>
          </div>
        </div>
        <div className={styles.body}>
          {advantages.map((adv, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
              key={index}
            >
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: adv.title }} />
                <p>{adv.text}</p>
              </div>
              <img src={adv.icon} />
            </motion.div>
          ))}
        </div>
        <div className={styles.buttonsMobile}>
          <Link href="/3Dellium_Price_List.pdf" target="_blank">
            Get Pricing
          </Link>
          <GreyButton text={"Order Custom Animation"} link={"#assistance"} />
        </div>
      </div>
    </section>
  );
};

export default WhenWrong;
