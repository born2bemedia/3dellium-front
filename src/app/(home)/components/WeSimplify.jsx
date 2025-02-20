import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import MoreButton from "@/components/MoreButton/MoreButton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";

const WeSimplify = () => {
  const featuredCategories = [
    "games-and-collectibles",
    "interior-and-design",
    "fashion-and-wearables",
    "garden-and-open-air",
    "smart-devices",
  ];

  const productIds = [25, 40, 21];

  return (
    <section className="main-section">
      <div className="_container">
        <SectionTitle
          label={"We Simplify"}
          title={
            "Smart tools, simple solutions—designed for your everyday life."
          }
          text={
            "Our ready-to-print 3D plans are crafted to bring small conveniences and big smiles to your daily routines. Elevate your home, workspace, and personal projects with practical designs for real-life needs."
          }
          buttonText="Discover More"
          buttonLink="/3d-modelling"
        />
        <FeaturedProducts
          categorySlugs={featuredCategories}
          productIds={productIds}
        />
      </div>
    </section>
  );
};

export default WeSimplify;
