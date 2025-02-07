"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./NeedAssistance.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import AssistanceForm from "../AssistanceForm/AssistanceForm";

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
              Have questions or need a custom design?
              <b>We’re here to help!</b>
            </motion.p>
          </div>
          <div className={styles.col2}>
            <AssistanceForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedAssistance;
