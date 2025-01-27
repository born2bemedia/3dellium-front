import React from "react";
import Shop from "../components/Shop/Shop";
import ShopHero from "../components/ShopHero/ShopHero";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import AnimationProcess from "../components/AnimationProcess/AnimationProcess";
import AnimationWhy from "../components/AnimationWhy/AnimationWhy";

const page = () => {
  const categories = ["animations"];

  return (
    <>
      <ShopHero
        categorySlugs={categories}
        title={"Animations"}
        subtitle={"Move. Express. Enrich Life."}
        image={"/images/animations/hero.png"}
        imageMob={"/images/animations/heroMob.png"}
      />
      <AnimationProcess />
      <AnimationWhy />
      <Shop categorySlugs={categories} />
      <ShopAssistance />
    </>
  );
};

export default page;
