import React from "react";
import Shop from "../components/Shop/Shop";
import ShopHero from "../components/ShopHero/ShopHero";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";

export const metadata = {
  title: "Ready-to-Print 3D Plans | 3Dellium",
  description:
    "Get high-quality 3D printing plans for useful everyday items for easy printing and practical use.",
  openGraph: {
    title: "Ready-to-Print 3D Plans | 3Dellium",
    description:
      "Get high-quality 3D printing plans for useful everyday items for easy printing and practical use.",
    images: "https://3dellium.com/images/meta.png",
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
        productId={37}
      />
      <Shop categorySlugs={categories} />
      <ShopAssistance />
    </>
  );
};

export default page;
