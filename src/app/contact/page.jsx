import { ContactDetails, Hero, Title } from './components';

import st from './page.module.scss';

export const metadata = {
  title: 'Contact 3D Design Team | 3Dellium',
  description:
    'Have questions or need assistance? Contact us for expert help with 3D plans, animations, UI/UX design, and video production. We’re here to help!',
  openGraph: {
    title: 'Contact 3D Design Team | 3Dellium',
    description:
      'Have questions or need assistance? Contact us for expert help with 3D plans, animations, UI/UX design, and video production. We’re here to help!',
    images: 'https://3dellium.com/images/meta.png',
  },
};

export default function Contact() {
  return (
    <main className={st.layout}>
      <Title />
      <Hero />
      <ContactDetails />
    </main>
  );
}
