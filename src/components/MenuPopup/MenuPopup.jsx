import React from "react";
import styles from "./MenuPopup.module.scss";
import Link from "next/link";
import InstagramFooter from "@/icons/socials/InstagramFooter";
import FacebookFooter from "@/icons/socials/FacebookFooter";
import { XFooter } from "@/icons/socials/LinkedinFooter";

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
      </div>
    </div>
  );
};

export default MenuPopup;
