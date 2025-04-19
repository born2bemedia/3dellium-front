'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.scss';
import Link from 'next/link';

function SlideNextButton({ link }) {
  const swiper = useSwiper();
  return (
    <Link
      href={link}
      className="ideas-read"
      style={{ display: 'flex', zIndex: '1' }}
      onClick={() => swiper.slideNext()}
    >
      Read
    </Link>
  );
}

export function HeroSlider({ slides }) {
  return (
    <Swiper
      loop
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      className="hero-ideas-swiper"
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="slide-ideas-container ">
              <div className="slide-ideas-text">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </div>
              <SlideNextButton link={slide.link} />
              <div className="slide-img">
                <Image
                  style={{ objectFit: 'cover' }}
                  src={slide.imgUrl}
                  alt={slide.imgUrl}
                  unoptimized
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
