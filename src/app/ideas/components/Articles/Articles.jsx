'use client';

import st from './Articles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBlock from '@/components/AnimatedBlock';

export function Articles({ data }) {
  return (
    <section className="_container">
      <section className={st.layout}>
        {data.map(item => (
          <ArticleCard key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
}

function ArticleCard({ imgUrl, title, desc, link }) {
  return (
    <AnimatedBlock>
      <article className={st.articleCard}>
        <div>
          <h2 className={st.articleTitle}>{title}</h2>
          <p className={st.articleDesc}>{desc}</p>
          <div className={st.articleBtnsLayout}>
            <Link className={st.articleBtn} href={link}>
              Read
            </Link>
            <button className={st.articleBtn}>
              <Arrow />
            </button>
          </div>
        </div>
        <Image
          className={st.articleImg}
          src={imgUrl}
          width={500}
          height={350}
          alt={imgUrl}
          unoptimized
        />
      </article>
    </AnimatedBlock>
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
      <g clipPath="url(#clip0_963_16058)">
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
        <clipPath id="clip0_963_16058">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
