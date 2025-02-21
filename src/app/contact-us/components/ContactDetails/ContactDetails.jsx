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
              <Link href="mailto:info@3dellium.com">info@3dellium.com</Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.details}
            >
              <p>Phone</p>
              <Link href="#"></Link>
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
                  Office 32, 3rd floor, Av. del <br />
                  Litoral, 12, Ciutat Vella, <br />
                  08005 Barcelona, Spain
                </h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4241238120803!2d2.1924520910634286!3d41.38659483958839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a30f4155565d%3A0xd1c797320ffdb3ec!2sAv.%20del%20Litoral%2C%2012%2C%20Ciutat%20Vella%2C%2008005%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sua!4v1739890071256!5m2!1sen!2sua"
                  width="600"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
                  Calle Aguamarina, S/N - <br />
                  Local 1-2, Marbella, 29670, <br />
                  Malaga
                </h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.2629692290716!2d-4.999814124326759!3d36.49951377233444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732a73361a3bef%3A0x6f92d55b69bb5b52!2sC.%20Agua%20Marina%2C%2029670%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sua!4v1739890039641!5m2!1sen!2sua"
                  width="600"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
