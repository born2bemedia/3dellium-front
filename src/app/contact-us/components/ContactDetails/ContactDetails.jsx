"use client";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./ContactDetails.module.scss";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <section className={styles.contactDetails}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Direct contacts:
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.details}
            >
              <p>Email</p>
              <Link href="#">Example@gmail.com</Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.details}
            >
              <p>Phone</p>
              <Link href="#">+### #### ## ##</Link>
            </motion.div>
          </div>
          <div className={styles.col2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              For correspondence:
            </motion.h2>
            <div className={styles.row}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.details}
              >
                <p>Office address:</p>
                <h5>
                  Office <br />
                  address:
                </h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19867.614117150777!2d-0.14160632015576208!3d51.504927366857764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sua!4v1739185871748!5m2!1sen!2sua"
                  width="403"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.details}
              >
                <p>Registration address:</p>
                <h5>
                  Registration <br />
                  address:
                </h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19867.614117150777!2d-0.14160632015576208!3d51.504927366857764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sua!4v1739185871748!5m2!1sen!2sua"
                  width="403"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
