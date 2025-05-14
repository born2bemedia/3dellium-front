'use client';

import Link from 'next/link';
import { InfoFirstColumn } from '../InfoFirstColumn/InfoFirstColumn';
import { InfoSecondColumn } from '../InfoSecondColumn/InfoSecondColumn';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

import st from './ContactInfo.module.scss';
import React from 'react';

export function ContactInfo() {
  return (
    <>
      <section className={st.layout}>
        <div className={st.row}>
          <div>
            <h3>Email:</h3>
            <Link href="mailto:info@3dellium.com">info@3dellium.com</Link>
          </div>
          <div>
            <h3>Phone:</h3>
            <Link href="tel:+447401478457">+447401478457</Link>
          </div>
          <span className={st.soc}>
            <SocialNetworks />
          </span>
        </div>
        <InfoFirstColumn />
        <InfoSecondColumn />
      </section>
    </>
  );
}
