"use client";
import React, { useState } from "react";
import styles from "./WeDesign.module.scss";

const DesignTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const data = [
    {
      title: "Expert Nutrition Blog",
      img: "/images/ux/project1.png",
    },
    {
      title: "project for online horoscopes",
      img: "/images/ux/project2.png",
    },
    {
      title: "store-like platform for ordering",
      img: "/images/ux/project3.png",
    },
    {
      title: "website for business orders",
      img: "/images/ux/project4.png",
    },
  ];
  return (
    <div className={styles.designTabs}>
      <div className={styles.tabs}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.tab}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.tabTitle}>{item.title}</div>
            <div
              className={styles.tabImg}
              style={{
                backgroundImage: `url(${item.img})`,
                height: activeIndex === index ? "700px" : "0",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignTabs;
