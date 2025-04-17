'use client';

import Link from 'next/link';
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '@/helpers/constants';
import FacebookIcon from '@/icons/socials/FacebookIcon';
import LinkedinIcon from '@/icons/socials/LinkedinIcon';
import InstagramIcon from '@/icons/socials/InstagramIcon';

import st from './SocialNetworks.module.scss';

export function SocialNetworks() {
  return (
    <section className={st.container}>
      <p className={st.label}>Social Network:</p>
      <div className={st.soc}>
        <Link className={st.socialIcon} href={FACEBOOK_URL} target="_blank">
          <FacebookIcon width={10} height={14} />
        </Link>
        <Link className={st.socialIcon} href={LINKEDIN_URL} target="_blank">
          <LinkedinIcon width={14} height={14} />
        </Link>
        <Link className={st.socialIcon} href={INSTAGRAM_URL} target="_blank">
          <InstagramIcon width={14} height={14} />
        </Link>
      </div>
    </section>
  );
}
