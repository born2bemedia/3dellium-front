import React from "react";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactDetails from "./components/ContactDetails/ContactDetails";

export const metadata = {
  title: "Contact Us | 3Dellium",
  description: "",
  openGraph: {
    title: "Contact Us | 3Dellium",
    description: "",
    //images: "",
  },
};

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactDetails />
    </>
  );
};

export default ContactPage;
