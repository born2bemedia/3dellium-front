'use client';
import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import InstagramFooter from '@/icons/socials/InstagramFooter';
import FacebookFooter from '@/icons/socials/FacebookFooter';
import { LinkedinFooter } from '@/icons/socials/LinkedinFooter';
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '@/helpers/constants';
import FacebookIcon from '@/icons/socials/FacebookIcon';
import LinkedinIcon from '@/icons/socials/LinkedinIcon';
import InstagramIcon from '@/icons/socials/InstagramIcon';
import { usePathname } from 'next/navigation';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className="_container">
        <div className={styles.mainRow}>
          <div className={styles.compamy}>
            <Link href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
            <h2>
              <b>3Dellium Ltd</b> <span>Designs for life.</span>
            </h2>
            <div className={styles.soc}>
              <Link href={FACEBOOK_URL} target="_blank">
                <FacebookIcon width={10} height={10} />
              </Link>
              <Link href={LINKEDIN_URL} target="_blank">
                <LinkedinIcon width={10} height={10} />
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank">
                <InstagramIcon width={10} height={10} />
              </Link>
            </div>
          </div>
          <nav>
            <ul>
              <li className={pathname === '/3d-modelling' ? styles.active : ''}>
                <Link href="/3d-modelling">3d Modelling</Link>
              </li>
              <li className={pathname === '/animations' ? styles.active : ''}>
                <Link href="/animations">Animations</Link>
              </li>
              <li
                className={
                  pathname === '/video-production' ? styles.active : ''
                }
              >
                <Link href="/video-production">Video Production</Link>
              </li>
              <li className={pathname === '/ux-ui' ? styles.active : ''}>
                <Link href="/ux-ui">UX & UI</Link>
              </li>
            </ul>
            <ul>
              <li className={pathname === '/factory-tour' ? styles.active : ''}>
                <Link href="/factory-tour">Factory Tour</Link>
              </li>
              <li className={pathname === '/ideas' ? styles.active : ''}>
                <Link href="/ideas">Ideas</Link>
              </li>
              <li className={pathname === '/contact' ? styles.active : ''}>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className={pathname === '/account' ? styles.active : ''}>
                <Link href="/account">Your Account</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.contactsRow}>
          <div className={styles.col1}>
            <div>
              <h3>Registration Address:</h3>
              <p>
                2nd Floor College House, <br />
                17 King Edwards Road, Ruislip, <br />
                London, United Kingdom, HA4 7AE
              </p>
            </div>
            {/*<div>
              <h3>Office Address:</h3>
              <p></p>
            </div>*/}
          </div>
          <div className={styles.col2}>
            <div>
              <h3>Phone:</h3>
              <Link href="tel:+447476957113">+447476957113</Link>
            </div>
            <div>
              <h3>Email:</h3>
              <Link href="mailto:info@3dellora.com">info@3dellora.com</Link>
            </div>
            <div>
              <h3>Registered number:</h3>
              <Link href="#">16445375</Link>
            </div>
          </div>
        </div>
        <div className={styles.legalRow}>
          <p className={styles.copy}>
            All Rights Reserved. © {currentYear} Ready-to-use designs for life.
          </p>
          <nav>
            <Link href="/legal/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
            <Link href="/legal/cookie-policy">Cookie Policy</Link>
            <Link href="/legal/refund-policy">Refund Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
