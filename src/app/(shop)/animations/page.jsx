import React from "react";
import Shop from "../components/Shop/Shop";
import ShopHero from "../components/ShopHero/ShopHero";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import AnimationProcess from "./components/AnimationProcess/AnimationProcess";
import AnimationWhy from "./components/AnimationWhy/AnimationWhy";
import AnimationHero from "./components/AnimationHero/AnimationHero";

export const metadata = {
  title: "Ready-to-Use Animations | 3Dellium",
  description:
    "Get professionally crafted animations for chats, greetings, personal websites, and social media. Make your content stand out!",
  openGraph: {
    title: "Ready-to-Use Animations | 3Dellium",
    description:
      "Get professionally crafted animations for chats, greetings, personal websites, and social media. Make your content stand out!",
    images: "https://3dellium.com/images/meta.png",
  },
};

const page = () => {
  const categories = ["animations"];

  return (
    <>
      <AnimationHero />
      <AnimationProcess />
      <AnimationWhy />
      <Shop categorySlugs={categories} />
      <ShopAssistance />
    </>
  );
};

export default page;
