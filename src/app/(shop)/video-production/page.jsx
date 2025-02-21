import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import VideosWeCreate from "./components/VideosWeCreate/VideosWeCreate";
import HowWeCraftVideos from "./components/HowWeCraftVideos/HowWeCraftVideos";
import VideoHero from "./components/VideoHero/VideoHero";

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
      <VideoHero />
      <HowWeCraftVideos />
      <VideosWeCreate />
      <SamplesOfWorks />
      <ShopAssistance type={"video-production"} />
    </>
  );
};

export default page;
