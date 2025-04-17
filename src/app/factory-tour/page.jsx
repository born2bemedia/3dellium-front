import { Hero, Slider, Title } from './components';

import st from './page.module.scss';
import NeedAssistanceNew from '@/components/NeedAssistanceNew/NeedAssistanceNew';

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
