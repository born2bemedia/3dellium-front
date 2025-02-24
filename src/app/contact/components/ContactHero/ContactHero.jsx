"use client";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./ContactHero.module.scss";
import Image from "next/image";
import AssistanceForm from "@/components/AssistanceForm/AssistanceForm";

const ContactHero = () => {
  return (
    <section className={styles.contactHero}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Image src={"/images/contact/hero1.png"} alt="hero1" fill />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Image src={"/images/contact/hero2.png"} alt="hero2" fill />
            </motion.div>
          </div>
          <div className={styles.col2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1>Contact Us</h1>
              <p>Connect. Collaborate. Create.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>Need 3D, animation, UX, or video? We're here.</h2>
              <AssistanceForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
