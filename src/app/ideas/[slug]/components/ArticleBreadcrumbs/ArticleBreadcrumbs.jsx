'use client';

import Link from 'next/link';

import st from './ArticleBreadcrumbs.module.scss';
import { cn } from '@/styles/utils';

export function ArticleBreadcrumbs({ currentPage }) {
  return (
    <nav className={st.layout}>
      <Link className={cn(st.path, st.underline)} href="/">
        Home
      </Link>
      <Arrow />
      <Link className={cn(st.path, st.underline)} href="/ideas">
        Ideas
      </Link>
      <Arrow />
      <p className={st.path}>{currentPage}</p>
    </nav>
  );
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.78047 7.99999L5.48047 4.69999L6.42314 3.75732L10.6658 7.99999L6.42314 12.2427L5.48047 11.3L8.78047 7.99999Z"
        fill="black"
        fillOpacity="0.5"
      />
    </svg>
  );
}
