"use client";
import React from "react";
import styles from "./ThanksPopup.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { API_URL } from "@/helpers/constants";

const ThanksPopup = ({ images, type = "default", title, subtitle, link }) => {
  const { cart, clearCart } = useCartStore();
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();
  const router = useRouter();

  const handleClose = () => {
    setThanksPopupDisplay(false);
    if (type === "order") {
      router.push(link);
      setTimeout(() => {
        clearCart();
      }, 1000);
    }
  };
  if (type === "default") {
    return (
      <div
        className={`${styles.thanksPopup} ${
          thanksPopupDisplay && styles.popupOpened
        }`}
      >
        <div className="_container">
          <div className={styles.popupWrap}>
            <div className={styles.popupInner}>
              <div className={styles.col1}>
                <Image src={"/images/thanksPopup.png"} alt="thanks" fill />
              </div>
              <div className={styles.col2}>
                <h2>
                  <span>Success! </span>
                  Your data has been updated!
                </h2>
                <button onClick={() => handleClose()}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "order") {
    return (
      <div
        className={`${styles.thanksPopup} ${
          thanksPopupDisplay && styles.popupOpened
        }`}
      >
        <div className="_container">
          <div className={styles.popupWrap}>
            <div className={styles.popupInner}>
              <div className={styles.col1}>
                {cart.length > 0 &&
                  (() => {
                    if (cart.length > 3) {
                      return (
                        <div className={styles.cartItemsFour}>
                          {cart.slice(0, 4).map((item, index) => (
                            <div key={index}>
                              <Image
                                src={`${API_URL}${item.image}`}
                                alt="thanks"
                                fill
                              />
                            </div>
                          ))}
                        </div>
                      );
                    } else if (cart.length > 1) {
                      return (
                        <div className={styles.cartItems}>
                          {cart.map((item, index) => (
                            <div key={index}>
                              <Image
                                src={`${API_URL}${item.image}`}
                                alt="thanks"
                                fill
                              />
                            </div>
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <Image
                          src={`${API_URL}${cart[0].image}`}
                          alt="thanks"
                          fill
                        />
                      );
                    }
                  })()}
              </div>
              <div className={styles.col2}>
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: subtitle }} />
                <button onClick={() => handleClose()}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ThanksPopup;
