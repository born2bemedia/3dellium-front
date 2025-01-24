"use client";
import styles from "./AddToCartButtonLoop.module.scss";
import React, { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast, ToastContainer } from "react-toastify"; // Import Toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import CartIcon from "@/icons/CartIcon";

const AddToCartButtonLoop = ({ product }) => {
  const { cart, addToCart } = useCartStore();
  const inCart = cart.some((item) => item.id === product.id);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(inCart);
  }, [cart]);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({
        id: product.id,
        documentId: product.documentId,
        name: product.title,
        quantity: 1,
        attributes: { price: product.price },
      });
      toast.success(`${product.title} added to cart!`, {
        position: "bottom-right",
        autoClose: 3000, // Automatically close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      //console.log(`${product.title} added to cart`);
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
