import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import MoreButton from "@/components/MoreButton/MoreButton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import styles from "./WeSimplify.module.scss";
import BigCard from "@/components/ProductCards/BigCard/BigCard";
import SmallCard from "@/components/ProductCards/SmallCard/SmallCard";

const WeSimplify = () => {
  const featuredCategories = [
    "games-and-collectibles",
    "interior-and-design",
    "fashion-and-wearables",
    "garden-and-open-air",
    "smart-devices",
  ];

  const productIds = [25, 33, 24, 22];

  return (
    <section className="main-section">
      <div className="_container">
        <SectionTitle
          label={"We Simplify"}
          title={
            "Smart tools, simple solutions—designed for <br/>your everyday life."
          }
          text={
            "Our ready-to-print 3D plans are crafted to bring small conveniences and big smiles to your daily routines. Elevate your home, workspace, and personal projects with practical designs for real-life needs."
          }
          buttonText="Discover More"
          buttonLink="/3d-modelling"
        />
        <div className={styles.body}>
          <div className={styles.col1}>
            <BigCard id={17} />
          </div>
          <div className={styles.col2}>
            {productIds.map((id) => (
              <SmallCard key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeSimplify;
