import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import VideosWeCreate from "./components/VideosWeCreate/VideosWeCreate";
import HowWeCraftVideos from "./components/HowWeCraftVideos/HowWeCraftVideos";
import VideoHero from "./components/VideoHero/VideoHero";

export const metadata = {
  title: "Video Production | 3Dellium",
  description: "",
  openGraph: {
    title: "Video Production | 3Dellium",
    description: "",
    //images: "",
  },
};

const page = () => {
  return (
    <>
      <VideoHero />
      <HowWeCraftVideos />
      <VideosWeCreate />
      <SamplesOfWorks />
      <ShopAssistance />
    </>
  );
};

export default page;
