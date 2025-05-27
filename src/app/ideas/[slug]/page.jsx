import React from 'react';
import createMetadata from '@/helpers/metadata';
import fetchFromAPI from '@/helpers/fetchFromAPI';
import { API_URL, CACHE_TAG_IDEAS } from '@/helpers/constants';

import {
  ArticleBreadcrumbs,
  ArticleContent,
  ArticleLayout,
  ArticleTag,
  Heading,
  OtherArticles,
} from './components';
import { parseJSONToElements } from '@/helpers/payload';
import NeedAssistanceNew from '@/components/NeedAssistanceNew/NeedAssistanceNew';

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const idea = await getIdeaBySlug(slug);

  if (!idea) {
    return {
      title: 'Idea Not Found',
    };
  }

  return createMetadata({
    title: idea.seo_title,
    description: idea.seo_description,
    imageUrl: 'https://3dellora.com/images/meta.png',
  });
}

export async function getIdeaBySlug(slug) {
  const data = await fetchFromAPI('/api/ideas', {
    query: `where[slug][equals]=${slug}`,
    tag: CACHE_TAG_IDEAS,
    revalidate: 900,
  });
  return data?.docs?.length > 0 ? data.docs[0] : null;
}

async function getIdeas(slug) {
  const data = await fetchFromAPI('/api/ideas', {
    tag: CACHE_TAG_IDEAS,
    revalidate: 900,
  });
  const ideas = data.docs || [];

  return ideas.filter(idea => idea.slug !== slug);
}

export default async function ArticlePage({ params }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const idea = await getIdeaBySlug(slug);
  const ideas = await getIdeas(slug);

  if (!idea) {
    return <p>Idea not found.</p>;
  }

  const imageUrl = idea.image?.url
    ? `${API_URL}${idea.image.url}`
    : '/images/ideas/hero.png';

  const { elements } = parseJSONToElements(idea.content.root.children);

  const ideasPreview = ideas.map(idea => ({
    title: idea.title,
    slug: idea.slug,
    imageUrl: idea.image?.url
      ? `${API_URL}${idea.image.url}`
      : '/images/ideas/hero.png',
  }));

  return (
    <>
      <main className="_container">
        <ArticleBreadcrumbs currentPage={idea.title} />
        {idea.label && <ArticleTag>{idea.label}</ArticleTag>}
        <Heading imgUrl={imageUrl}>{idea.title}</Heading>
        <ArticleLayout>
          <OtherArticles articles={ideasPreview} />
          <ArticleContent>{elements}</ArticleContent>
        </ArticleLayout>
      </main>
      <NeedAssistanceNew
        type="default"
        background="/images/ideas/assist-bg.jpg"
        backgroundMob="/images/ideas/assist-bg.jpg"
        color="#fff"
      />
    </>
  );
}
