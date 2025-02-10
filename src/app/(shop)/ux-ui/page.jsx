import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import UxUiHero from "./components/UxUiHero/UxUiHero";
import HowWeCraftExperiences from "./components/HowWeCraftExperiences/HowWeCraftExperiences";
import WhenWrong from "./components/WhenWrong/WhenWrong";

export const metadata = {
  title: "UI/UX Design | 3Dellium",
  description: "",
  openGraph: {
    title: "UI/UX Design | 3Dellium",
    description: "",
    //images: "",
  },
};

const page = () => {
  return (
    <>
      <UxUiHero />
      <HowWeCraftExperiences />
      <WhenWrong />
      <SamplesOfWorks />
      <ShopAssistance />
    </>
  );
};

export default page;
