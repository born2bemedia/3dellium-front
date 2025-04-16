import React from "react";
import Shop from "../components/Shop/Shop";
import ShopHero from "../components/ShopHero/ShopHero";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import AnimationProcess from "./components/AnimationProcess/AnimationProcess";
import AnimationWhy from "./components/AnimationWhy/AnimationWhy";
import AnimationHero from "./components/AnimationHero/AnimationHero";
import NeedAssistanceNew from "@/components/NeedAssistanceNew/NeedAssistanceNew";
import ShopAnimation from "../components/ShopAnimation/ShopAnimation";

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
      <AnimationHero
        title={"Animations"}
        subtitle={"Move. Express. Enrich Life."}
        image={"/images/animations/hero.webp"}
        imageMob={"/images/animations/heroMob.webp"}
        backgroundColor={"#211C32"}
      />
      <AnimationProcess />
      
      <ShopAnimation categorySlugs={categories} />
      <AnimationWhy />
      <NeedAssistanceNew
        type={"default"}
        background="/images/animations/assist-bg.jpeg"
        backgroundMob="/images/animations/assist-bg-mob.jpeg"
        color={"#fff"}
      />
    </>
  );
};

export default page;
