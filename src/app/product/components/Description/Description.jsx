'use client';

import st from './Description.module.scss'
import {Important} from "@/icons/Important";

export default function Description({children}) {
  return (
    <section className={st.layout}>
      <p className={st.desc}>{children}</p>
      <div className={st.container}>
        <h5 className={st.heading}><Important /> Important Notice!</h5>
        <p className={st.notice}>We sell <strong>3D printing plans</strong> — not ready-made items. The final printed result may vary depending on your printer settings, materials, and techniques. Enjoy the flexibility of bringing these designs to life your way!</p>
      </div>
    </section>
  );
}