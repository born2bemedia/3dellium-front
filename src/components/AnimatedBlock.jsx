'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/helpers/animations';

export default function AnimatedBlock({ children, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
