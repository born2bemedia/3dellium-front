'use client';

import AssistanceForm from '@/components/AssistanceForm/AssistanceForm';

import st from './ContactForm.module.scss';

export function ContactForm() {
  return (
    <section className={st.layout}>
      <h2 className={st.heading}>
        Need 3D, animation, UX, or video? <br /> We're here.
      </h2>
      <AssistanceForm />
    </section>
  );
}
