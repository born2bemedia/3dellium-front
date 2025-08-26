'use client';
import React from 'react';
import { fadeInUp } from '@/helpers/animations';
import { motion } from 'framer-motion';
import styles from './VideosWeCreate.module.scss';
import Link from 'next/link';
import GreyButton from '@/components/GreyButton/GreyButton';

const VideosWeCreate = () => {
  const details = [
    {
      title: 'Personal Greetings',
      text: 'From heartfelt birthday wishes to special milestone celebrations, these videos let you connect with loved ones uniquely and memorably.',
    },
    {
      title: 'Portfolio & Skill Showcases',
      text: 'Perfect for job applications or freelance work, these videos highlight your talents, skills, and projects in a polished format.',
    },
    {
      title: 'Social Media Engagement',
      text: 'Designed to grab attention, these videos are optimized for platforms like Instagram, TikTok, and Facebook to inspire shares, likes, and comments.',
    },
    {
      title: 'Product or Service Marketing',
      text: 'Promote your brand with videos that showcase your offerings, explain their benefits, and drive conversions.',
    },
    {
      title: 'Event Highlights',
      text: 'In a beautifully edited recap video, capture the magic of weddings, parties, or conferences.',
    },
    {
      title: 'Educational & How-To Videos',
      text: 'Simplify complex concepts or share step-by-step instructions with clear, engaging visuals.',
    },
    {
      title: 'Corporate Presentations',
      text: 'Elevate your business pitches or internal communications with professional videos that deliver your message effectively.',
    },
    {
      title: 'Animation-Infused Stories',
      text: 'Add animated elements to explain ideas or enhance your story with playful or professional graphics.',
    },
    {
      title: 'Inspirational or Motivational Clips',
      text: 'Encourage your audience with uplifting quotes, messages, or creative visuals that energize and inspire.',
    },
    {
      title: 'Custom Videos for Any Purpose',
      text: 'Got a unique idea? We’ll bring it to life with a completely tailored solution.',
    },
  ];

  return (
    <section className={styles.videosWeCreate}>
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.sectionTitle}>
            <div className={styles.col}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                Videos We Create
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.text}
              >
                Crafted by experts, designed for impact—our animations are built
                to inspire.
              </motion.p>
            </div>
            <div className={styles.buttons}>
              <Link href="/3Dellium_Ltd_Price_List.pdf" target="_blank">
                Get Pricing
              </Link>
              <GreyButton text={'Order Video'} link={'#assistance'} />
            </div>
          </div>

          <div className={styles.row}>
            {details.map((detail, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.item}
                key={index}
              >
                <h3 dangerouslySetInnerHTML={{ __html: detail.title }} />
                <p>{detail.text}</p>
              </motion.div>
            ))}
          </div>
          <div className={styles.buttonsMobile}>
            <Link href="/3Dellium_Ltd_Price_List.pdf" target="_blank">
              Get Pricing
            </Link>
            <GreyButton text={'Order Video'} link={'#assistance'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosWeCreate;
