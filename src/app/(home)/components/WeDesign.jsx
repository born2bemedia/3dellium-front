import LearnMoreButton from "@/components/LearnMoreButton/LearnMoreButton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import DesignRow from "./DesignRow/DesignRow";

const WeDesign = () => {
  return (
    <section className="main-section">
      <div className="_container">
        <SectionTitle
          label={"We Design"}
          title={
            "Create your digital presence with <br/>user-friendly layouts for personal projects."
          }
          text={
            "Our ready-to-use UX/UI designs make building stunning blogs, social media pages, and portfolios easy. <br/>Elevate your online identity with intuitive, visually engaging templates tailored for individual creativity."
          }
        />
        <DesignRow />
        <LearnMoreButton text={"Learn More"} link={"#"} />
      </div>
    </section>
  );
};

export default WeDesign;
