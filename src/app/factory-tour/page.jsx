import NeedAssistance from "@/components/NeedAssistance/NeedAssistance";
import React from "react";
import FactoryHero from "./components/FactoryHero/FactoryHero";
import TourDetails from "./components/TourDetails/TourDetails";

export const metadata = {
  title: "Factory Tour | 3Dellium",
  description: "",
  openGraph: {
    title: "Factory Tour | 3Dellium",
    description: "",
    //images: "",
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
