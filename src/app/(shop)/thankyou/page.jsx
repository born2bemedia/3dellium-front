import React from "react";
import Link from "next/link";

const Thankyou = () => {
  return (
    <section className="thankyou">
      <div className="_container">
        <div className="thankyou__body">
          <h1>Thank you for your order!</h1>
          
          <Link href="/">Go home</Link>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
