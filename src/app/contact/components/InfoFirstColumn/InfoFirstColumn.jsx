'use client';

import st from './InfoFirstColumn.module.scss';
import Link from 'next/link';
import React from 'react';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

export function InfoFirstColumn() {
  return (
    <section className={st.columnLayout}>
      <section className={st.container}>
        <p className={st.label}>Email:</p>
        <Link className={st.link} href="mailto:info@3dellora.com">
          info@3dellora.com
        </Link>
      </section>
      <span className={st.soc}>
        <SocialNetworks />
      </span>
      <section style={{ height: '100%' }}>
        <div className={st.container} style={{ height: '100%' }}>
          <p className={st.label}>Office address:</p>
          <p className={st.link}></p>
          <iframe
            style={{ marginTop: 'auto' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4241238120803!2d2.1924520910634286!3d41.38659483958839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a30f4155565d%3A0xd1c797320ffdb3ec!2sAv.%20del%20Litoral%2C%2012%2C%20Ciutat%20Vella%2C%2008005%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sua!4v1739890071256!5m2!1sen!2sua"
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
