import React from "react";
import Cart from "../checkout/_components/Cart/Cart";

export const metadata = {
  title: "Cart | 3Dellora",
  description:
    "",
  openGraph: {
    title: "Cart | 3Dellora",
    description:
      "",
    images: "https://3dellium.com/images/meta.png",
  },
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
