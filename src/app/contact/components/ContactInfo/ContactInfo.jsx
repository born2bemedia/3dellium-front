'use client';

import { InfoFirstColumn } from '../InfoFirstColumn/InfoFirstColumn';
import { InfoSecondColumn } from '../InfoSecondColumn/InfoSecondColumn';

import st from './ContactInfo.module.scss';
import React from 'react';

export function ContactInfo() {
  return (
    <section className={st.layout}>
      <InfoFirstColumn />
      <InfoSecondColumn />
    </section>
  );
}
