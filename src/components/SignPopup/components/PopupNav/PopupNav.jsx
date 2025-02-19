import React from "react";
import styles from "./PopupNav.module.scss";
import Link from "next/link";
import usePopupStore from "@/stores/popupStore";

const PopupNav = () => {
  const { signPopupType, setSignPopupType } = usePopupStore();
  return (
    <nav className={styles.nav}>
      <button
        className={signPopupType == "login" ? styles.current : ""}
        onClick={() => setSignPopupType("login")}
      >
        Log In
      </button>
      <button
        className={signPopupType == "signup" ? styles.current : ""}
        onClick={() => setSignPopupType("signup")}
      >
        Registration
      </button>
    </nav>
  );
};

export default PopupNav;
