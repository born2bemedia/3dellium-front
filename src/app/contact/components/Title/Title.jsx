'use client';

import st from './Title.module.scss';

export function Title() {
  return (
    <section className="_container">
      <section className={st.layout}>
        <h1 className={st.title}>Contact Us</h1>
        <p className={st.desc}>Connect. Collaborate. Create.</p>
      </section>
    </section>
  );
}
