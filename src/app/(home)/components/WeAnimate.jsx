import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import MoreButton from "@/components/MoreButton/MoreButton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";

const WeAnimate = () => {
  const featuredCategories = ["animations"];
  return (
    <section className="main-section">
      <div className="_container">
        <SectionTitle
          label={"We Animate"}
          title={
            "Bring emotions to life—express, connect, and make moments memorable."
          }
          text={
            "Our ready-to-use animations are perfect for personal messages, greetings, and creative projects. Share joy, motivation, and personality with dynamic visuals that speak for you."
          }
          classValue="left"
          buttonText="See More"
          buttonLink="/animations"
        />
        <FeaturedProducts
          categorySlugs={featuredCategories}
          classValue="left"
        />
      </div>
    </section>
  );
};

export default WeAnimate;
