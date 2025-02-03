"use client";
import React from "react";
import { fadeInUp, fadeInLeft } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./SingleIdeaHero.module.scss";
import Image from "next/image";

const SingleIdeaHero = ({ image }) => {
  return (
    <section className={styles.ideaHero}>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image src={image} alt="hero" fill />
        </div>
      </div>
    </section>
  );
};

export default SingleIdeaHero;
