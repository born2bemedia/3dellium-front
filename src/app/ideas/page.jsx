import { Articles, HeroSlider } from './components';
import fetchFromAPI from '@/helpers/fetchFromAPI';
import { CACHE_TAG_IDEAS } from '@/helpers/constants';

export const metadata = {
  title: 'Guides & Insights on 3D, Animation, UI/UX & Video | 3Dellium',
  description:
    'Explore expert insights, tutorials, and guides on 3D modeling, animation, video production, and UI/UX design. Learn, create, and innovate.',
  openGraph: {
    title: 'Guides & Insights on 3D, Animation, UI/UX & Video | 3Dellium',
    description:
      'Explore expert insights, tutorials, and guides on 3D modeling, animation, video production, and UI/UX design. Learn, create, and innovate.',
    images: 'https://3dellium.com/images/meta.png',
  },
};

async function getIdeas() {
  const data = await fetchFromAPI('/api/ideas', {
    tag: CACHE_TAG_IDEAS,
    revalidate: 900,
  });
  return (data.docs || []).reverse();
}

export default async function Ideas() {
  const ideas = await getIdeas();

  const previewData = ideas.map(idea => ({
    imgUrl: `${process.env.NEXT_PUBLIC_CMS_URL}${idea.image.url}`,
    title: idea.title,
    desc: idea.excerpt,
    link: `/ideas/${idea.slug}`,
    label: idea.label,
  }));

  return (
    <main>
      <HeroSlider slides={previewData} />
      <Articles data={previewData} />
    </main>
  );
}
