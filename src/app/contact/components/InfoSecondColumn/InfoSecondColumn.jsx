'use client';

import st from './InfoSecondColumn.module.scss';
import React from 'react';

import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

export function InfoSecondColumn() {
  return (
    <section className={st.columnLayout}>
      <section>
        <div className={st.container}>
          <p className={st.label}>Registration address:</p>
          <p className={st.link}>
            2nd Floor College House, 17 King Edwards Road, Ruislip, London,
            United Kingdom, HA4 7AE
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.64287500734!2d-0.43168912383165453!3d51.57478010577936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766c5ef8135fab%3A0xe5b3326587a4c1a5!2sCollege%20House%2C%2017%20King%20Edwards%20Rd%2C%20Ruislip%20HA4%207AE!5e0!3m2!1sen!2suk!4v1747134864564!5m2!1sen!2suk"
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
