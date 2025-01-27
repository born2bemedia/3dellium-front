import React from "react";
import Checkout from "./_components/Checkout";

export const metadata = {
  title: "Checkout | Holax Group",
  description:
    "",
  openGraph: {
    title: "Checkout | Holax Group",
    description:
      "",
    //images: "https://holaxgroup.com/images/meta.png",
  },
};

const CheckoutPage = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
