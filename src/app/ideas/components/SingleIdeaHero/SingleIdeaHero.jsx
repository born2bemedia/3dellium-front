"use client";
import React, { useEffect, useState } from "react";
import { fadeInUp, fadeInLeft } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./SingleIdeaHero.module.scss";
import Image from "next/image";

const SingleIdeaHero = ({ image }) => {
  const [heroImage, setHeroImage] = useState("/images/ideas/hero.png");

  useEffect(() => {
    setHeroImage(image);
  }, [image]);

  return (
    <section className={styles.ideaHero}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className={styles.imageWrap}
        >
          <Image src={heroImage} alt="hero" fill />
        </motion.div>
      </div>
    </section>
  );
};

export default SingleIdeaHero;
