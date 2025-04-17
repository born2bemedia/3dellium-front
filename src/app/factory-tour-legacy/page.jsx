import NeedAssistance from "@/components/NeedAssistance/NeedAssistance";
import React from "react";
import FactoryHero from "./components/FactoryHero/FactoryHero";
import TourDetails from "./components/TourDetails/TourDetails";

export const metadata = {
  title: "How We Create 3D Plans, Animations & Designs | 3Dellium",
  description:
    "Take a behind-the-scenes look at how we craft high-quality 3D models, animations, videos, and UI/UX designs—built for function, creativity, and impact.",
  openGraph: {
    title: "How We Create 3D Plans, Animations & Designs | 3Dellium",
    description:
      "Take a behind-the-scenes look at how we craft high-quality 3D models, animations, videos, and UI/UX designs—built for function, creativity, and impact.",
    images: "https://3dellium.com/images/meta.png",
  },
};

const FactoryTourPage = () => {
  return (
    <>
      <FactoryHero />
      <TourDetails />
      <NeedAssistance />
    </>
  );
};

export default FactoryTourPage;
