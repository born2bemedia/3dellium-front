'use client';

import st from './ArticleTag.module.scss';

export function ArticleTag({ children }) {
  return <span className={st.tag}>{children}</span>;
}
