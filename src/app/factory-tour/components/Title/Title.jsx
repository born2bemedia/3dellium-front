'use client';

import st from './Title.module.scss';
import { cn } from '@/styles/utils';

export function Title() {
  return (
    <section className="_container">
      <section className={st.layout}>
        <h1 className={st.title}>Factory Tour</h1>
        <p className={st.desc}>Research. Create. Inspire.</p>
      </section>
    </section>
  );
}
