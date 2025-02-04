"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import useAuthStore from "@/stores/authStore";
import Link from "next/link";
import FacebookIcon from "@/icons/socials/FacebookIcon";
import XIcon from "@/icons/socials/XIcon";
import InstagramIcon from "@/icons/socials/InstagramIcon";
import CartIcon from "@/icons/CartIcon";
import MenuIcon from "@/icons/MenuIcon";

const Header = () => {
  const { user, logout } = useAuthStore();
  const [scrolling, setScrolling] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.headerTop}>
        <div className="_container">
          <div className={styles.row}>
            <div className={styles.col1}>
              <div className={styles.soc}>
                <Link href="#">
                  <FacebookIcon />
                </Link>
                <Link href="#">
                  <XIcon />
                </Link>
                <Link href="#">
                  <InstagramIcon />
                </Link>
              </div>
            </div>
            <div className={styles.col2}>
              <Link className={styles.cart} href={"/cart"}>
                <CartIcon />
              </Link>
              {user ? (
                <div className={styles.headAccount}>
                  <Link href="/dashboard">Account</Link>
                </div>
              ) : (
                <div className={styles.headAccount}>
                  <Link href="/sign-up">Sign up</Link>|
                  <Link href="/log-in">Log in</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <header className={`${styles.header} ${scrolling ? styles.active : ""}`}>
        <div className="_container">
          <div className={styles.row}>
            <Link href="/">
              <img src="/images/head_logo.svg" />
            </Link>
            <button className={styles.menuBtn}>
              <MenuIcon />
            </button>
            <nav className={styles.nav}>
              <Link href="/3d-modelling">3D Modelling</Link>
              <Link href="/animations">Animations</Link>
              <Link href="/video-production">Video Production</Link>
              <Link href="/ux-ui">UX & UI</Link>
              <Link href="/ideas">Ideas</Link>
              <Link href="#">Factory Tour</Link>
              <Link href="#">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
