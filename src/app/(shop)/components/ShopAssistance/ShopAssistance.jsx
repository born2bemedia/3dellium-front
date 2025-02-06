"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./ShopAssistance.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

const ShopAssistance = () => {
  return (
    <section className={styles.assistance} id={"assistance"}>
      <div className={styles.container}>
        <div className={styles.body}>
          <motion.div className={styles.col1}>
            <h3>
              Let’s talk and bring <br />
              your ideas to life.
            </h3>
            <ContactForm />
          </motion.div>
          <motion.div className={styles.col2}>
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Need <br />
                Assistance?
              </motion.h2>
            </div>
            <div>
              <h3>Have questions or need a custom design?</h3>
              <h4>We’re here to help!</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShopAssistance;
