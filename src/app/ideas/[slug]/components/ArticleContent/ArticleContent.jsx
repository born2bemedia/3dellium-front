'use client';

import st from './Article.module.scss';
import Link from 'next/link';

export function ArticleContent({ children }) {
  return (
    <section className={st.layout}>
      <section className={st.container}>{children}</section>
      <Link href="/3d-modelling" className={st.btns}>
        <button className={st.navBtn}>Explore 3d models</button>
        <button className={st.arrowBtn}>
          <Arrow />
        </button>
      </Link>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_966_20884)">
        <path
          d="M17.5 10H2.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 5L17.5 10L12.5 15"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_966_20884">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
