import Script from "next/script";
import { useEffect, useState } from "react";
import styles from "./LangSwitcher.module.scss";
import Lang from "@/icons/Lang";

const LangSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("ES");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const lang = document.documentElement.lang;
      console.log("lang", lang);
      const langName =
        lang === "en"
          ? "English"
          : lang === "de"
          ? "German"
          : lang === "it"
          ? "Italian"
          : "Spanish";
      setCurrentLang(langName);
    }, 1000);
  }, []);

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

  useEffect(() => {
    document.cookie = `googtrans=/es/es;path=/;domain=${window.location.hostname}`;
  }, []);

  return (
    <div translate="no" className={styles.langSwitcher}>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Lang />
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
