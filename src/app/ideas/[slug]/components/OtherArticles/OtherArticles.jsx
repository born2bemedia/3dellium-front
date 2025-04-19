'use client';

import Image from 'next/image';
import Link from 'next/link';

import st from './OtherArticles.module.scss';

export function OtherArticles({ articles }) {
  return (
    <section className={st.layout}>
      {articles.map(article => (
        <ArticleCard key={article.title} {...article} />
      ))}
    </section>
  );
}

function ArticleCard({ imageUrl, title, slug }) {
  return (
    <article className={st.cardLayout}>
      <Link href={slug}>
        <Image
          className={st.cardImage}
          src={imageUrl}
          alt={imageUrl}
          width={235}
          height={156}
          unoptimized
        />
      </Link>
      <Link href={slug} className={st.readArrow}>
        <Arrow />
      </Link>
      <h3 className={st.cardTitle}>{title}</h3>
    </article>
  );
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M10.2286 17L18 9M18 9L10.2286 1M18 9L1 9"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
