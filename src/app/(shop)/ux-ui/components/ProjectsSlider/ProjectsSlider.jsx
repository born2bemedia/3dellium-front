"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import styles from "./ProjectsSlider.module.scss";
import ArrowRight from "@/icons/Arrows/ArrowRight";
import ArrowLeft from "@/icons/Arrows/ArrowLeft";
import SliderPrev from "@/icons/Arrows/SliderPrev";
import SliderNext from "@/icons/Arrows/SliderNext";

const ProjectsSlider = () => {
  const slides = [
    {
      image: "/images/ux/Project1.png",
      text: "We built an expert nutrition blog offering valuable insights and personalized programs for weight loss, weight gain, muscle gain, and overall health. A streamlined order form for personalized nutrition plans boosts SEO and turns visitors into leads.",
    },
    {
      image: "/images/ux/Project2.png",
      text: "A project for online horoscopes required a minimal, intuitive ordering form. We organized extensive, category-specific data into a visually clear and logically structured interface, enabling users to find and order the exact horoscope they need easily.",
    },
    {
      image: "/images/ux/Project3.png",
      text: "A consulting firm needed a simple, store-like platform for ordering services. We built an interface where users select services, add them to their cart, and complete a checkout. The firm then receives the order, issues an invoice, and contacts the client.",
    },
    {
      image: "/images/ux/Project4.png",
      text: "A project on apparel customization needed a straightforward website for business orders. We built a single page with all the key options and a concise form, making the ordering process smooth and intuitive.",
    },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${styles.slide} slide-${index}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={styles.image}
                  quality={100}
                />
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.text}>{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {activeIndex > 0 && (
        <button className={styles.prevArrow} onClick={handlePrev}>
          <SliderPrev />
        </button>
      )}
      {activeIndex < slides.length - 1 && (
        <button className={styles.nextArrow} onClick={handleNext}>
          <SliderNext />
        </button>
      )}
    </div>
  );
};

export default ProjectsSlider;
