"use client";
import React, { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast, ToastContainer } from "react-toastify"; // Import Toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";

const AddToCartButton = ({ product }) => {
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
      toast.success(`${product.title} added to cart!`, {
        position: "bottom-right",
        autoClose: 3000, // Automatically close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <button
        className="add-to-cart"
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "In Cart" : "Add to cart"}
      </button>
    </>
  );
};

export default AddToCartButton;
