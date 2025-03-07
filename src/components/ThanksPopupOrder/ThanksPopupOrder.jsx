"use client";
import React from "react";
import styles from "./ThanksPopupOrder.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { API_URL } from "@/helpers/constants";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

const ThanksPopupOrder = ({
  images,
  type = "default",
  title,
  subtitle,
  link,
}) => {
  const { cart, clearCart } = useCartStore();
  const { thanksPopupOrderDisplay, setThanksPopupOrderDisplay } =
    usePopupStore();
  const router = useRouter();

  const handleClose = () => {
    setThanksPopupOrderDisplay(false);
    router.push(link);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };
  return (
    <div
      className={`${styles.thanksPopup} ${
        thanksPopupOrderDisplay && styles.popupOpened
      }`}
    >
      <div className="_container">
        <div className={styles.popupWrap}>
          <div className={styles.popupInner}>
            <div className={styles.col1}>
              <Image
                src={"/images/cart/thanks.png"}
                alt="thanks"
                fill
                quality={100}
              />
            </div>
            <div className={styles.col2}>
              <h2>Thank You for Your Order</h2>
              <p>
                <b>
                  Your order is confirmed, and we’re already preparing
                  everything for you!
                </b>
                <br />
                <br />
                Check your email for all the details and your invoice—everything
                you need has been sent to the address you provided.
                <br />
                <br />
                <b>Need assistance?</b>
                <br />
                Visit our{" "}
                <Link href="/contact">
                  <b>Contact page</b>
                </Link>{" "}
                and we’ll be happy to help! assistance?
              </p>
              <button onClick={() => handleClose()}>
                <div>
                  <AddToCartArrow2 />
                  <span>Got It!</span>
                  <AddToCartArrow1 />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksPopupOrder;
