import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import UxUiHero from "./components/UxUiHero/UxUiHero";
import HowWeCraftExperiences from "./components/HowWeCraftExperiences/HowWeCraftExperiences";
import WhenWrong from "./components/WhenWrong/WhenWrong";
import ExperiencesWeCrafted from "./components/ExperiencesWeCrafted/ExperiencesWeCrafted";

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
      <UxUiHero />
      <HowWeCraftExperiences />
      <WhenWrong />
      <SamplesOfWorks />
      <ExperiencesWeCrafted />
      <ShopAssistance type={"ui-ux-design"} />
    </>
  );
};

export default page;
