'use client';
import React, { useEffect, useState } from 'react';
import { fadeInUp } from '@/helpers/animations';
import { motion } from 'framer-motion';
import styles from './NeedAssistanceNew.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import AssistanceForm from '../AssistanceForm/AssistanceForm';

const NeedAssistanceNew = ({
  type = 'default',
  background = '/images/home/assist.webp',
  backgroundMob = '/images/home/assistMob.webp',
  backgroundColor,
  color = '#fff',
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={styles.needAssistance}
      style={{
        backgroundImage: `url(${isMobile ? backgroundMob : background})`,
        backgroundColor: backgroundColor ?? '#1d4c29',
      }}
    >
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.col1}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
              style={{ color }}
            >
              Need Assistance?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.text}
              style={{ color }}
            >
              Have questions or need a custom design?
              <b>We’re here to help!</b>
            </motion.p>
          </div>
          <div className={styles.col2}>
            <AssistanceForm type={type} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedAssistanceNew;
