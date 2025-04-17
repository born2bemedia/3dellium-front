import React from "react";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactDetails from "./components/ContactDetails/ContactDetails";

export const metadata = {
  title: "Contact 3D Design Team | 3Dellium",
  description:
    "Have questions or need assistance? Contact us for expert help with 3D plans, animations, UI/UX design, and video production. We’re here to help!",
  openGraph: {
    title: "Contact 3D Design Team | 3Dellium",
    description:
      "Have questions or need assistance? Contact us for expert help with 3D plans, animations, UI/UX design, and video production. We’re here to help!",
    images: "https://3dellium.com/images/meta.png",
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
