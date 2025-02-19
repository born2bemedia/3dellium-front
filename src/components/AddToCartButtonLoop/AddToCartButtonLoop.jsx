"use client";
import styles from "./AddToCartButtonLoop.module.scss";
import React, { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartIcon from "@/icons/CartIcon";
import Link from "next/link";

const AddToCartButtonLoop = ({ product }) => {
  const { cart, addToCart } = useCartStore();
  const inCart = cart.some((item) => item.id === product.id);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(inCart);
  }, [cart]);

  const handleAddToCart = () => {
    console.log(product);
    if (!isInCart) {
      addToCart({
        id: product.id,
        documentId: product.documentId,
        name: product.title,
        quantity: 1,
        attributes: { price: product.price },
        image: product.image.url,
      });

      toast.success(
        <div className={styles.toast}>
          <p>{product.title} added to cart!</p>
          <Link className={styles.button} href="/checkout">
            View Cart
          </Link>
        </div>,
        {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  return (
    <>
      <button
        className={`${styles.addToCart} ${isInCart && styles.inCart}`}
        onClick={handleAddToCart}
        //disabled={isInCart}
      >
        <CartIcon />
      </button>
    </>
  );
};

export default AddToCartButtonLoop;
