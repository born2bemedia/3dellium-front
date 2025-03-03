import React from "react";
import styles from "./MenuPopup.module.scss";
import Link from "next/link";
import InstagramFooter from "@/icons/socials/InstagramFooter";
import FacebookFooter from "@/icons/socials/FacebookFooter";
import { LinkedinFooter } from "@/icons/socials/LinkedinFooter";
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/helpers/constants";

const MenuPopup = ({ isScrolling }) => {
  return (
    <div
      className={`${styles.menuPopup} ${isScrolling ? styles.scrolling : ""}`}
    >
      <nav className={styles.nav}>
        <Link href="/3d-modelling">3D Modelling</Link>
        <Link href="/animations">Animations</Link>
        <Link href="/video-production">Video Production</Link>
        <Link href="/ux-ui">UX & UI</Link>
        <Link href="/ideas">Ideas</Link>
        <Link href="/factory-tour">Factory Tour</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <div className={styles.bottom}>
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
    </div>
  );
};

export default MenuPopup;
