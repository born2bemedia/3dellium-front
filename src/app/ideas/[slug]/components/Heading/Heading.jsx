'use client';

import st from './Heading.module.scss';
import Image from 'next/image';
import AnimatedBlock from '@/components/AnimatedBlock';

export function Heading({ children, imgUrl }) {
  return (
    <AnimatedBlock className={st.layout}>
      <h1 className={st.heading}>{children}</h1>
      <div className={st.imgLayout}>
        <Image src={imgUrl} alt={imgUrl} unoptimized fill />
      </div>
    </AnimatedBlock>
  );
}
