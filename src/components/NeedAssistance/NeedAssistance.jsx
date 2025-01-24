"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./NeedAssistance.module.scss";
import ContactForm from "../ContactForm/ContactForm";

const NeedAssistance = () => {
  return (
    <section className={styles.needAssistance}>
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              Need Assistance?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.text}
            >
              Have questions or need a custom design? We’re here to help!{" "}
              <i>Let’s talk and bring your ideas to life.</i>
            </motion.p>
          </div>
          <div className={styles.col2}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedAssistance;
