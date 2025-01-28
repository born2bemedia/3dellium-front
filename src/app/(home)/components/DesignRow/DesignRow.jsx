"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./DesignRow.module.scss";
import Image from "next/image";

const DesignRow = () => {
  const container = useRef(null);
  const imageArray = [
    "/images/home/design1.png",
    "/images/home/design2.png",
    "/images/home/design3.png",
    "/images/home/design4.png",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 30vh", "end end"],
  });

  const getWidthValues = (index) =>
    index === 0
      ? isMobile ? 250 : 838
      : useTransform(
          scrollYProgress,
          [(index - 0.99) / imageArray.length, (index + 1) / imageArray.length],
          isMobile ? [100, 250] : [200, 838]
        );

  const getHeightValues = (index) =>
    index === 0
      ? isMobile ? 500 : 455
      : useTransform(
          scrollYProgress,
          [(index - 0.99) / imageArray.length, (index + 1) / imageArray.length],
          isMobile ? [200, 500] : [250, 455]
        );

  const widthValues = imageArray.map((_, index) => getWidthValues(index));
  const heightValues = imageArray.map((_, index) => getHeightValues(index));

  const imageLeft = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -700] : [0, -2200]
  );

  return (
    <div className={styles.designRowWrap} ref={container}>
      <div>
        <div className={styles.designRow}>
          {imageArray.map((image, index) => (
            <motion.div
              style={{
                width: widthValues[index],
                height: heightValues[index],
                x: imageLeft,
                transformOrigin: "left top",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
              }}
              className={styles.imageWrap}
              key={index}
              data-attr={index}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignRow;
