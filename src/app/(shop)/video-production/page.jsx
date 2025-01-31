import React from "react";
import ShopAssistance from "../components/ShopAssistance/ShopAssistance";
import SamplesOfWorks from "./components/SamplesOfWorks/SamplesOfWorks";
import VideosWeCreate from "./components/VideosWeCreate/VideosWeCreate";

const page = () => {
  return (
    <>
      <VideosWeCreate />
      <SamplesOfWorks />
      <ShopAssistance />
    </>
  );
};

export default page;
