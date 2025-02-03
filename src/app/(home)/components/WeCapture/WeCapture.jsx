import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import VideoRow from "../VideoRow/VideoRow";
import LearnMoreButton from "@/components/LearnMoreButton/LearnMoreButton";
import styles from "./WeCapture.module.scss";

const WeCapture = () => {
  return (
    <section className={styles.main}>
      <div className="_container">
        <div className={styles.body}>
          <SectionTitle
            label={"We Capture"}
            title={
              "Tell your story—personalized videos for every moment that matters."
            }
            text={
              "Our ready-to-use video templates help you celebrate, motivate, and showcase your experiences. Whether it’s a heartfelt greeting, a standout portfolio, or a personal highlight reel, we make your vision come to life."
            }
            buttonText="Learn More"
            buttonType="learn"
            buttonLink="/video-production"
          />
          <VideoRow />
        </div>
      </div>
    </section>
  );
};

export default WeCapture;
