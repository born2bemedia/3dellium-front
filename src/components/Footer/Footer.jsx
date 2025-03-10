import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import InstagramFooter from "@/icons/socials/InstagramFooter";
import FacebookFooter from "@/icons/socials/FacebookFooter";
import { LinkedinFooter } from "@/icons/socials/LinkedinFooter";
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/helpers/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="_container">
        <div className={styles.mainRow}>
          <div className={styles.compamy}>
            <Link href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
            <h2>
              <b>Wanwick SL</b> <span>Designs for life.</span>
            </h2>
            <div className={styles.soc}>
              <Link href={INSTAGRAM_URL} target="_blank">
                <InstagramFooter />
              </Link>
              <Link href={FACEBOOK_URL} target="_blank">
                <FacebookFooter />
              </Link>
              <Link href={LINKEDIN_URL} target="_blank">
                <LinkedinFooter />
              </Link>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/3d-modelling">3d Modelling</Link>
              </li>
              <li>
                <Link href="/animations">Animations</Link>
              </li>
              <li>
                <Link href="/video-production">Video Production</Link>
              </li>
              <li>
                <Link href="/ux-ui">UX & UI</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/factory-tour">Factory Tour</Link>
              </li>
              <li>
                <Link href="/ideas">Ideas</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
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
                Urb. Cancela De La Quinta, Edificio 1, <br />
                Street Agua Marina, Marbella 29000, <br />
                Málaga, Spain
              </p>
            </div>
            <div>
              <h3>Office Address:</h3>
              <p>
                Office 32, 3rd floor, Av. del <br />
                Litoral, 12, Ciutat Vella, <br />
                08005 Barcelona, Spain
              </p>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <h3>Phone:</h3>
              <Link href="tel:+34951748379">+34951748379</Link>
            </div>
            <div>
              <h3>Email:</h3>
              <Link href="mailto:info@3dellium.com">info@3dellium.com</Link>
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
