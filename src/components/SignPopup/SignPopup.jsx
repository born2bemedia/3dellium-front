"use client";
import React, { useState } from "react";
import styles from "./SignPopup.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { API_URL } from "@/helpers/constants";
import PopupNav from "./components/PopupNav/PopupNav";
import Login from "./components/Login/Login";
import PassReset from "./components/PassReset/PassReset";
import Register from "./components/Register/Register";
import ThanksPopup from "../ThanksPopup/ThanksPopup";

const SignPopup = ({ images, type = "default", title, subtitle, link }) => {
  const { cart, clearCart } = useCartStore();
  const [passReset, setPassReset] = useState(false);
  const {
    signPopupDisplay,
    setSignPopupDisplay,
    signPopupType,
    setSignPopupType,
  } = usePopupStore();
  const router = useRouter();

  const handleClose = () => {
    setSignPopupDisplay(false);
    if (type === "order") {
      router.push(link);
      setTimeout(() => {
        clearCart();
      }, 1000);
    }
  };
  return (
    <>
      <div
        className={`${styles.signPopup} ${
          signPopupDisplay && styles.popupOpened
        }`}
      >
        <div className="_container">
          <div className={styles.popupWrap}>
            <div className={styles.popupInner}>
              <button className={styles.close} onClick={() => handleClose()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.30806 3.30806C3.55214 3.06398 3.94786 3.06398 4.19194 3.30806L10 9.11612L15.8081 3.30806C16.0521 3.06398 16.4479 3.06398 16.6919 3.30806C16.936 3.55214 16.936 3.94786 16.6919 4.19194L10.8839 10L16.6919 15.8081C16.936 16.0521 16.936 16.4479 16.6919 16.6919C16.4479 16.936 16.0521 16.936 15.8081 16.6919L10 10.8839L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L9.11612 10L3.30806 4.19194C3.06398 3.94786 3.06398 3.55214 3.30806 3.30806Z"
                    fill="#E5E5E5"
                  />
                </svg>
              </button>
              <div className={styles.col1}>
                <PopupNav />
                <div
                  className={`${styles.forms} ${
                    signPopupType === "signup" ? styles.signup : ""
                  } ${signPopupType === "reset" ? styles.reset : ""}`}
                >
                  {signPopupType === "login" && <Login />}
                  {signPopupType === "reset" && <PassReset />}
                  {signPopupType === "signup" && <Register />}
                </div>
              </div>
              {signPopupType !== "signup" && (
                <div className={styles.col2}>
                  <Image src={"/images/signPopup.png"} alt="thanks" fill />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ThanksPopup
        type="register"
        title={"Registration Successful!"}
        subtitle={
          "Your account has been created. If you have any questions, feel free to contact us."
        }
        link="/account"
      />
    </>
  );
};

export default SignPopup;
