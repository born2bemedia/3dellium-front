'use client';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import useAuthStore from '@/stores/authStore';
import Link from 'next/link';
import FacebookIcon from '@/icons/socials/FacebookIcon';
import InstagramIcon from '@/icons/socials/InstagramIcon';
import CartIcon from '@/icons/CartIcon';
import MenuIcon from '@/icons/MenuIcon';
import MenuIconOpened from '@/icons/MenuIconOpened';
import MenuPopup from '../MenuPopup/MenuPopup';
import { usePathname } from 'next/navigation';
import HeadAccount from '../HeadAccount/HeadAccount';
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '@/helpers/constants';
import LinkedinIcon from '@/icons/socials/LinkedinIcon';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Logo from '@/icons/Logo';

const headerDetails = {
  '/': { class: styles.home },
  '/animations': { class: styles.animations },
  '/video-production': { class: styles.home },
  '/ux-ui': { class: styles.uxUi },
  '/3d-modelling': { class: styles.threeD },
  '/product/': { class: styles.home },
  '/contact': { class: styles.home },
  '/factory-tour': { class: styles.home },
  '/ideas': { class: styles.home },
};

const resolveHeaderClass = pathname => {
  if (pathname.startsWith('/product/')) {
    return headerDetails['/product/'].class;
  }

  return headerDetails[pathname]?.class ?? '';
};

const Header = () => {
  const { user, logout } = useAuthStore();
  const [scrolling, setScrolling] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const pathname = usePathname();

  const headerClass = resolveHeaderClass(pathname);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    setIsMenuPopupOpen(false);
    //document.body.classList.remove("no-scroll");
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.headerTop + ' ' + headerClass}>
        <div className="_container">
          <div className={styles.row}>
            <div className={styles.col1}>
              <div className={styles.soc}>
                <Link href={FACEBOOK_URL} target="_blank">
                  <FacebookIcon />
                </Link>
                <Link href={LINKEDIN_URL} target="_blank">
                  <LinkedinIcon />
                </Link>
                <Link href={INSTAGRAM_URL} target="_blank">
                  <InstagramIcon />
                </Link>
              </div>
              <LangSwitcher />
            </div>
            <div className={styles.col2}>
              <div className={styles.mobileLang}>
                <LangSwitcher />
              </div>
              <div className={styles.col2Inner}>
                <Link className={styles.cart} href={'/checkout'}>
                  <CartIcon width={16} height={16} />
                </Link>
                <HeadAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`${headerClass} ${styles.header} ${
          scrolling ? styles.active : ''
        }`}
      >
        <div className="_container">
          <div className={styles.row}>
            <Link href="/">
              <Logo />
            </Link>
            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuPopupOpen(!isMenuPopupOpen)}
            >
              {isMenuPopupOpen ? <MenuIconOpened /> : <MenuIcon />}
            </button>
            <nav className={styles.nav}>
              <Link href="/3d-modelling">3D Modelling</Link>
              <Link href="/animations">Animations</Link>
              <Link href="/video-production">Video Production</Link>
              <Link href="/ux-ui">UX & UI</Link>
              <Link href="/ideas">Ideas</Link>
              <Link href="/factory-tour">Factory Tour</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>
        {isMenuPopupOpen && <MenuPopup isScrolling={scrolling} />}
      </header>
    </>
  );
};

export default Header;
