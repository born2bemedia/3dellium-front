'use client';

import st from './Hero.module.scss';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="_container">
      <section className={st.layout}>
        <Image
          src="/images/contact/hero-bg.png"
          alt="hero-img"
          fill
          unoptimized
        />
      </section>
    </section>
  );
}
