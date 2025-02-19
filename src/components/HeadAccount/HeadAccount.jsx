"use client";
import useAuthStore from "@/stores/authStore";
import React from "react";
import styles from "./HeadAccount.module.scss";
import Link from "next/link";
import usePopupStore from "@/stores/popupStore";

const HeadAccount = () => {
  const { user, logout } = useAuthStore();
  const {
    signPopupDisplay,
    setSignPopupDisplay,
    signPopupType,
    setSignPopupType,
  } = usePopupStore();

  const handleSignPopup = (type) => {
    setSignPopupType(type);
    setSignPopupDisplay(true);
  };

  return (
    <>
      {user ? (
        <div className={styles.headAccount}>
          <Link href="/account">Account</Link>
        </div>
      ) : (
        <div className={styles.headAccount}>
          <button onClick={() => handleSignPopup("signup")}>Sign up</button>|
          <button onClick={() => handleSignPopup("login")}>Log in</button>
        </div>
      )}
    </>
  );
};

export default HeadAccount;
