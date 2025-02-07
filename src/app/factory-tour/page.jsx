import NeedAssistance from "@/components/NeedAssistance/NeedAssistance";
import React from "react";
import FactoryHero from "./components/FactoryHero/FactoryHero";
import TourDetails from "./components/TourDetails/TourDetails";

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
