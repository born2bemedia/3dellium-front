import React from "react";
import Shop from "./components/Shop/Shop";
import ShopHero from "./components/ShopHero/ShopHero";
import ShopAssistance from "./components/ShopAssistance/ShopAssistance";

const page = () => {
  const categories = [
    "renovation-tools",
    "pet-accessories",
    "board-games",
    "desktop-organization",
    "phone-accessories",
  ];

  return (
    <>
      <ShopHero categorySlugs={categories} />
      <Shop categorySlugs={categories} />
      <ShopAssistance />
    </>
  );
};

export default page;
