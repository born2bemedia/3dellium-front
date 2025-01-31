import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import VideosWeCreate from "./components/VideosWeCreate/VideosWeCreate";
import HowWeCraftVideos from "./components/HowWeCraftVideos/HowWeCraftVideos";

const page = () => {
  return (
    <>
      <HowWeCraftVideos />
      <VideosWeCreate />
      <SamplesOfWorks />
      <ShopAssistance />
    </>
  );
};

export default page;
