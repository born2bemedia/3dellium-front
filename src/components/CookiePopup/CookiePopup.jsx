'use client';
import { useState, useEffect } from 'react';
import styles from './CookiePopup.module.scss';
import classNames from 'classnames';
import ArrowRight from '@/icons/Arrows/ArrowRight';

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={classNames(styles.cookiePopup, {
        [styles.visible]: isVisible,
      })}
    >
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.content}>
            <h2>Cookie settings</h2>
            <p>
              Cookies help us improve our website. By clicking 'Accept,' you
              agree to our use of cookies for functionality, analytics, and
              personalized content. Learn more in our{' '}
              <a href="/legal/cookie-policy">Cookie Policy</a>.
            </p>
          </div>
          <div className={styles.buttons}>
            <button
              onClick={handleDecline}
              className={classNames(styles.decline)}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className={classNames(styles.accept)}
            >
              <span>Accept</span>
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
