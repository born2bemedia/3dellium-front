'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Description from '@/app/product/components/Description/Description';
import PrintingRecommendations from '@/app/product/components/PrintingRecommendations/PrintingRecommendations';
import { fadeInUp } from '@/helpers/animations';

import st from './Tabs.module.scss';
import { cn } from '@/styles/utils';

export default function Tabs({ description }) {
  const [tab, setTab] = useState('description');

  return (
    <section className={st.layout}>
      <div className={st.tabsLayout}>
        <button
          className={cn({
            [st.activeTab]: tab === 'description',
            [st.defaultTab]: tab !== 'description',
          })}
          onClick={() => setTab('description')}
        >
          Description
        </button>
        <button
          className={cn({
            [st.activeTab]: tab === 'pricing',
            [st.defaultTab]: tab !== 'pricing',
          })}
          onClick={() => setTab('pricing')}
        >
          Printing Recommendations
        </button>
      </div>
      <div className={st.divider} />
      <section className={st.container}>
        {tab === 'description' ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Description>{description}</Description>
          </motion.div>
        ) : (
          <PrintingRecommendations />
        )}
      </section>
    </section>
  );
}
