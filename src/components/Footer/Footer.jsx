import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import FacebookIcon from "@/icons/socials/FacebookIcon";
import XIcon from "@/icons/socials/XIcon";
import InstagramIcon from "@/icons/socials/InstagramIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="_container">
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
