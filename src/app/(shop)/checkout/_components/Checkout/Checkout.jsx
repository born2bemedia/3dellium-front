"use client";
import styles from "./Checkout.module.scss";
import React, { useState, useEffect } from "react";
import useCartStore from "@/stores/cartStore";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { cart } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.checkout}>
      <div className="_container">
        <div className={styles.checkoutForm}>
          {cart.length > 0 ? (
            <div className={styles.checkoutWrapper}>
              <h1>Your Cart, Ready to Go</h1>
              <CheckoutForm />
            </div>
          ) : (
            <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
