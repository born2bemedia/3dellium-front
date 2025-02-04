import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import InstagramFooter from "@/icons/socials/InstagramFooter";
import FacebookFooter from "@/icons/socials/FacebookFooter";
import { XFooter } from "@/icons/socials/XFooter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="_container">
        <div className={styles.mainRow}>
          <div className={styles.soc}>
            <Link href="#" target="_blank">
              <InstagramFooter />
            </Link>
            <Link href="#" target="_blank">
              <FacebookFooter />
            </Link>
            <Link href="#" target="_blank">
              <XFooter />
            </Link>
          </div>
          <div className={styles.compamy}>
            <Link href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
            <h2>Company Name</h2>
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
                <Link href="#">Factory Tour</Link>
              </li>
              <li>
                <Link href="/ideas">Ideas</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Your Account</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.contactsRow}>
          <div className={styles.col1}>
            <div>
              <h3>Registration Address:</h3>
              <p>text</p>
            </div>
            <div>
              <h3>Office Address:</h3>
              <p>text</p>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <h3>Phone:</h3>
              <Link href="#">text</Link>
            </div>
            <div>
              <h3>Email:</h3>
              <Link href="#">text</Link>
            </div>
            <div>
              <h3>Connect:</h3>
              <Link href="#">text</Link>
            </div>
          </div>
        </div>
        <div className={styles.legalRow}>
          <p className={styles.copy}>
            All Rights Reserved. © {currentYear} Company Name
          </p>
          <nav>
            <Link href="/legal/terms-of-use">Terms of Use</Link>
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
