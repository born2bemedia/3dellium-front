import Script from "next/script";
import { useState } from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language, languageCode) => {
    const retryDispatchEvent = (attempts = 10) => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = language;
        const changeEvent = new Event("change", {
          bubbles: true,
          cancelable: true,
        });
        select.dispatchEvent(changeEvent);

        if (document.documentElement.lang === language || attempts <= 1) {
          setCurrentLang(languageCode);
          setIsDropdownOpen(false);
          return;
        }
      }

      if (attempts > 1) {
        setTimeout(() => retryDispatchEvent(attempts - 1), 100);
      }
    };

    retryDispatchEvent();
  };

  return (
    <div translate="no" className={styles.langSwitcher}>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentLang}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
        >
          <path
            d="M1.96 12.0012C1.64587 12.0002 1.33558 11.932 1.05 11.8012C0.740826 11.6649 0.477413 11.4425 0.291223 11.1606C0.105032 10.8786 0.00393305 10.549 0 10.2112V1.79117C0.00393305 1.45331 0.105032 1.12373 0.291223 0.841787C0.477413 0.559841 0.740826 0.337447 1.05 0.201168C1.40574 0.0331352 1.80153 -0.031584 2.19227 0.0143849C2.583 0.0603538 2.95297 0.215162 3.26 0.461168L8.36 4.67117C8.55999 4.83038 8.72151 5.03265 8.83252 5.26292C8.94353 5.49319 9.00118 5.74554 9.00118 6.00117C9.00118 6.2568 8.94353 6.50914 8.83252 6.73941C8.72151 6.96968 8.55999 7.17195 8.36 7.33117L3.26 11.5412C2.89238 11.8393 2.43331 12.0017 1.96 12.0012Z"
            fill="white"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <ul translate="no" className={styles.langList}>
          <li onClick={() => handleLanguageChange("en", "English")}>English</li>
          <li onClick={() => handleLanguageChange("de", "German")}>German</li>
          <li onClick={() => handleLanguageChange("it", "Italian")}>Italian</li>
          <li onClick={() => handleLanguageChange("es", "Spanish")}>Spanish</li>
        </ul>
      )}

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={() => {
          const googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            );
          };
          window.googleTranslateElementInit = googleTranslateElementInit;
        }}
      />
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default LangSwitcher;
