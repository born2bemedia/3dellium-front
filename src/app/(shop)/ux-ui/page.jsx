import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import UxUiHero from "./components/UxUiHero/UxUiHero";
import HowWeCraftExperiences from "./components/HowWeCraftExperiences/HowWeCraftExperiences";
import WhenWrong from "./components/WhenWrong/WhenWrong";
import ExperiencesWeCrafted from "./components/ExperiencesWeCrafted/ExperiencesWeCrafted";
import NeedAssistanceNew from "@/components/NeedAssistanceNew/NeedAssistanceNew";
import ShopHero from "../components/ShopHero/ShopHero";
import WeDesign from "./components/WeDesign/WeDesign";

export const metadata = {
  title: "Professional UI/UX Design | 3Dellium",
  description:
    "Get expert-crafted UI/UX design for personal websites, portfolios, blogs, and apps. Make your digital presence seamless and engaging.",
  openGraph: {
    title: "Professional UI/UX Design | 3Dellium",
    description:
      "Get expert-crafted UI/UX design for personal websites, portfolios, blogs, and apps. Make your digital presence seamless and engaging.",
    images: "https://3dellium.com/images/meta.png",
  },
};

const page = () => {
  return (
    <>
      <ShopHero
        title={"UI/UX Design"}
        subtitle={"Design. Optimize. Engage Users."}
        image={"/images/ux/hero.webp"}
        imageMob={"/images/ux/heroMob.webp"}
        backgroundColor={"#1D4C29"}
      />
      <HowWeCraftExperiences />
      <WhenWrong />
      <SamplesOfWorks />
      <WeDesign />
      <NeedAssistanceNew
        type={"default"}
        background={"/images/home/assist.webp"}
        backgroundMob={"/images/home/assistMob.webp"}
        color={"#fff"}
      />
    </>
  );
};

export default page;
