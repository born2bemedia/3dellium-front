import React from "react";
import Link from "next/link";

const Thankyou = () => {
  return (
    <section className="thankyou">
      <div className="_container">
        <div className="thankyou__body">
          <h1>Thank you for your order!</h1>
          <p>
            We appreciate your decision to choose Holax Group.
            <br />
            One of our representatives will contact you soon to confirm the
            details of your order.
          </p>
          <Link href="/">Go home</Link>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
