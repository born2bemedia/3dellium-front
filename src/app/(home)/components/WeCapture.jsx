import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import VideoRow from "./VideoRow/VideoRow";
import LearnMoreButton from "@/components/LearnMoreButton/LearnMoreButton";

const WeCapture = () => {
  return (
    <section className="main-section">
      <div className="_container">
        <SectionTitle
          label={"We Capture"}
          title={
            "Tell your story—personalized videos <br/>for every moment that matters."
          }
          text={
            "Our ready-to-use video templates help you celebrate, motivate, and showcase your experiences. Whether it’s a <br/>heartfelt greeting, a standout portfolio, or a personal highlight reel, we make your vision come to life."
          }
        />
        <VideoRow />
        <LearnMoreButton text={"Learn More"} link={"#"} />
      </div>
    </section>
  );
};

export default WeCapture;
