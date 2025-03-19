import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import VideosWeCreate from "./components/VideosWeCreate/VideosWeCreate";
import HowWeCraftVideos from "./components/HowWeCraftVideos/HowWeCraftVideos";
import VideoHero from "./components/VideoHero/VideoHero";
import NeedAssistanceNew from "@/components/NeedAssistanceNew/NeedAssistanceNew";
import ShopHero from "../components/ShopHero/ShopHero";

export const metadata = {
  title: "Custom Video Production | 3Dellium",
  description:
    "Get professionally crafted videos for greetings, portfolios, marketing, and social media. Elevate your story with expert video editing.",
  openGraph: {
    title: "Custom Video Production | 3Dellium",
    description:
      "Get professionally crafted videos for greetings, portfolios, marketing, and social media. Elevate your story with expert video editing.",
    images: "https://3dellium.com/images/meta.png",
  },
};

const page = () => {
  return (
    <>
      <ShopHero
        title={"Video Production"}
        subtitle={"Craft. Engage. Inspire Moments."}
        image={"/images/video-production/hero.webp"}
        imageMob={"/images/video-production/heroMob.webp"}
        backgroundColor={"#181818"}
      />
      <HowWeCraftVideos />
      <VideosWeCreate />
      <SamplesOfWorks />
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
