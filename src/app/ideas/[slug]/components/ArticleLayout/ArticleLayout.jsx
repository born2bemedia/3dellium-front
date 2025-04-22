'use client';

import st from './ArticleLayout.module.scss';
import AnimatedBlock from '@/components/AnimatedBlock';

export function ArticleLayout({ children }) {
  return <AnimatedBlock className={st.layout}>{children}</AnimatedBlock>;
}
