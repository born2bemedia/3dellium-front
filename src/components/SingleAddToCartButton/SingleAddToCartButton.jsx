"use client";
import styles from "./SingleAddToCartButton.module.scss";
import React, { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast, ToastContainer } from "react-toastify"; // Import Toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import CartIcon from "@/icons/CartIcon";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";

const SingleAddToCartButton = ({ product }) => {
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
        image: product.image.url,
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
        <div>
          <AddToCartArrow2 />
          <span>
            <CartIcon /> {isInCart ? "in cart" : "add to cart"}
          </span>
          <AddToCartArrow1 />
        </div>
      </button>
    </>
  );
};

export default SingleAddToCartButton;
