'use client';

import st from './InfoSecondColumn.module.scss';
import React from 'react';

import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

export function InfoSecondColumn() {
  return (
    <section className={st.columnLayout}>
      <span className={st.soc}>
        <SocialNetworks />
      </span>
      <section>
        <div className={st.container}>
          <p className={st.label}>Registration address:</p>
          <p className={st.link}>
            Urb. Cancela De La Quinta, Edificio 1, <br />
            Street Agua Marina, Marbella 29000, <br />
            Málaga, Spain
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.2629692290716!2d-4.999814124326759!3d36.49951377233444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732a73361a3bef%3A0x6f92d55b69bb5b52!2sC.%20Agua%20Marina%2C%2029670%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sua!4v1739890039641!5m2!1sen!2sua"
            width="336"
            height="420"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}
