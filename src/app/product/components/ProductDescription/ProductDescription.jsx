'use client';

import Tabs from '@/app/product/components/Tabs/Tabs';
import Info from '@/app/product/components/Info/Info';

import st from './ProductDescription.module.scss';

export default function ProductDescription({
  description,
  files,
  isVideoCategory,
}) {
  return (
    <section className={st.layout}>
      <Tabs description={description} />
      <Info files={files} isVideoCategory={isVideoCategory} />
    </section>
  );
}
