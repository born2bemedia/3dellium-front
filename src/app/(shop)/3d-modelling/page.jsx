import React from "react";
import Shop from "../components/Shop/Shop";
import ShopHero from "../components/ShopHero/ShopHero";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";

export const metadata = {
  title: "3D Modelling | 3Dellium",
  description: "",
  openGraph: {
    title: "3D Modelling | 3Dellium",
    description: "",
    //images: "",
  },
};

const page = () => {
  const categories = [
    "games-and-collectibles",
    "interior-and-design",
    "fashion-and-wearables",
    "garden-and-open-air",
    "smart-devices",
  ];

  return (
    <>
      <ShopHero
        categorySlugs={categories}
        title={"3D Modelling"}
        subtitle={"Explore. Print. Simplify Life."}
        image={"/images/modelling/hero.png"}
        imageMob={"/images/modelling/heroMob.png"}
      />
      <Shop categorySlugs={categories} />
      <ShopAssistance />
    </>
  );
};

export default page;
