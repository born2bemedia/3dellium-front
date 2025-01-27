import LearnMoreButton from "@/components/LearnMoreButton/LearnMoreButton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import styles from "./WeDesign.module.scss";
import DesignRow from "../DesignRow/DesignRow";

const WeDesign = () => {
  return (
    <section className={styles.main}>
      <div className="_container">
        <div className={styles.body}>
          <SectionTitle
            label={"We Design"}
            title={
              "Create your digital presence with user-friendly layouts for personal projects."
            }
            text={
              "Our ready-to-use UX/UI designs make building stunning blogs, social media pages, and portfolios easy. Elevate your online identity with intuitive, visually engaging templates tailored for individual creativity."
            }
            buttonText="Learn More"
            buttonType="learn"
            buttonLink="#"
          />
        </div>
      </div>
      <DesignRow />
    </section>
  );
};

export default WeDesign;
