import { Hero, Slider, Title } from './components';

import st from './page.module.scss';
import NeedAssistanceNew from '@/components/NeedAssistanceNew/NeedAssistanceNew';

export const metadata = {
  title: 'How We Create 3D Plans, Animations & Designs | 3Dellora',
  description:
    'Take a behind-the-scenes look at how we craft high-quality 3D models, animations, videos, and UI/UX designs—built for function, creativity, and impact.',
  openGraph: {
    title: 'How We Create 3D Plans, Animations & Designs | 3Dellora',
    description:
      'Take a behind-the-scenes look at how we craft high-quality 3D models, animations, videos, and UI/UX designs—built for function, creativity, and impact.',
    images: 'https://3dellora.com/images/meta.png',
  },
};

export default function FactoryTour() {
  return (
    <main className={st.layout}>
      <Title />
      <Hero />
      <Slider />
      <NeedAssistanceNew
        type={'default'}
        background="/images/factory/assist-bg.jpeg"
        backgroundMob="/images/factory/assist-bg.jpeg"
        color={'#fff'}
      />
    </main>
  );
}
