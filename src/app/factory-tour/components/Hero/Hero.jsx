'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/helpers/animations';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import st from './Hero.module.scss';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export function Hero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={st.layout}
    >
      <Image
        src="/images/factory/hero-img1.jpeg"
        alt="hero-img"
        width={500}
        height={600}
        unoptimized
      />
      <ReactPlayer
        url="/videos/factory-tour.mp4"
        loop={true}
        muted={true}
        playing={true}
        volume={0}
        className={st.player}
      />
      <Image
        src="/images/factory/hero-img2.jpeg"
        alt="hero-img"
        width={500}
        height={600}
        unoptimized
      />
    </motion.div>
  );
}
