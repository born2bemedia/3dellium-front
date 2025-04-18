'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';
import Image from 'next/image';

const slides = [
  {
    title: 'We Do Analytics',
    description:
      'We research trends and brainstorm innovative ideas—transforming everyday tools like desktop organizers and kitchen gadgets into life-enhancing designs.',
    image: '/images/factory/slide1.png',
    process: (
      <div className="process">
        <Process />
        <DefaultProcess />
        <DefaultProcess />
      </div>
    ),
  },
  {
    title: 'Precision Crafting',
    description:
      'Every plan, animation, video, and UX is meticulously developed, tested, and optimized to simplify your work and maximize impact.',
    image: '/images/factory/slide2.jpeg',
    process: (
      <div className="process">
        <DefaultProcess />
        <Process />
        <DefaultProcess />
      </div>
    ),
  },
  {
    title: 'Visual Mastery',
    description:
      'Our designers create stunning representations of each plan or design so you know exactly what to expect—simple, effective, and inspiring.',
    image: '/images/factory/slide3.jpeg',
    process: (
      <div className="process">
        <DefaultProcess />
        <DefaultProcess />
        <Process />
      </div>
    ),
  },
];

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button style={{ display: 'flex' }} onClick={() => swiper.slideNext()}>
      <span className="swiper-next-btn">Next</span>
      <span
        className="swiper-next-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_963_18008)">
            <path
              d="M17.5 10H2.5"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 5L17.5 10L12.5 15"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_963_18008">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </button>
  );
}

function Process() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="8"
      viewBox="0 0 80 8"
      fill="none"
    >
      <path
        d="M4 4H76"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DefaultProcess() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="8"
      viewBox="0 0 38 8"
      fill="none"
    >
      <path
        d="M4 4H34"
        stroke="#b9b8ba"
        strokeOpacity="0.5"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Slider() {
  return (
    <div className="_container">
      <Swiper loop className="custom-swiper">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <div className="slide-text">
                {slide.process}
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <SlideNextButton />
              </div>
              <div className="slide-image">
                <Image src={slide.image} alt={slide.title} unoptimized fill />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
