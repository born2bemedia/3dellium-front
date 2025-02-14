import React from "react";
import Checkout from "./_components/Checkout/Checkout";
import ThanksPopup from "@/components/ThanksPopup/ThanksPopup";

export const metadata = {
  title: "Checkout | 3Dellium",
  description: "",
  openGraph: {
    title: "Checkout | 3Dellium",
    description: "",
    //images: "",
  },
};

const CheckoutPage = () => {
  return (
    <>
      <Checkout />
      <ThanksPopup
        type="order"
        title={"<span>Success!</span> Your order has been submitted."}
        subtitle={
          "You will receive an email with your order details and payment instructions shortly. If you have any questions, feel free to contact us."
        }
        link="/"
      />
    </>
  );
};

export default CheckoutPage;
