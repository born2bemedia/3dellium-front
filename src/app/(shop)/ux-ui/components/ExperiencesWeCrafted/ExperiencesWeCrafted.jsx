"use client";
import React from "react";
import styles from "./ExperiencesWeCrafted.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import DesignRow from "@/app/(home)/components/DesignRow/DesignRow";
import ProjectsSlider from "../ProjectsSlider/ProjectsSlider";

const ExperiencesWeCrafted = () => {
  return (
    <section className={styles.main}>
      <div className="_container">
        <div className={styles.body}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Experiences We Crafted
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We built an expert nutrition blog offering valuable insights and
            personalized programs for weight loss, weight gain, muscle gain, and
            overall health. A streamlined order form for personalized nutrition
            plans boosts SEO and turns visitors into leads.
          </motion.p>
        </div>
        <ProjectsSlider />
      </div>
    </section>
  );
};

export default ExperiencesWeCrafted;
