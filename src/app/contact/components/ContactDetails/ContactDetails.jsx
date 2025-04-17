'use client';

import st from './ContactDetails.module.scss';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactInfo } from '../ContactInfo/ContactInfo';

export function ContactDetails() {
  return (
    <div className="_container">
      <section className={st.layout}>
        <ContactForm />
        <ContactInfo />
      </section>
    </div>
  );
}
