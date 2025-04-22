'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player').then(m => m.default), {
  ssr: false,
});

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';

import st from './VideoSamples.module.scss';

import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const videos = [
  {
    title: 'Dynamic Happy Birthday Greeting Video',
    text: 'This lively, animated birthday greeting features colorful confetti, nostalgic photo transitions, and an interactive gift box. It also includes upbeat music, text animations, and a final cake surprise to celebrate the occasion with energy and fun. Perfect for a personalized birthday message.',
    cover: '/images/video-production/cover1_home.webp',
    video: '/videos/3Dellium_Vid_1.mp4',
  },
  {
    title: 'Personal Coach Promotion Video',
    text: 'This dynamic video promotes a personal coach’s services, showcasing expertise through engaging blog content, client testimonials, and motivational messages. Featuring energetic visuals of the coach in action, along with motivational text and seamless transitions, the video invites viewers to follow and engage for daily inspiration. It is perfect for promoting coaching services and building a personal brand.',
    cover: '/images/video-production/cover2_home.webp',
    video: '/videos/3Dellium_Vid_2.mp4',
  },
  {
    title: 'Freelance Developer Portfolio Video',
    text: 'An engaging video that highlights the skills, experience, and projects of a freelance developer. It showcases core competencies such as PHP, Java, Python, and JavaScript with interactive visuals, followed by real-world examples of projects like e-commerce solutions and app interfaces. The video concludes with a strong call to action, inviting potential clients to contact. Perfect for developers looking to showcase their portfolio and attract new business.',
    cover: '/images/video-production/cover3_home.webp',
    video: '/videos/3Dellium_Vid_3.mp4',
  },
  {
    title: 'Motivational Video for Social Networks',
    text: 'A calming and inspiring video designed to motivate and uplift audiences. It features serene visuals like sunrises, forest scenes, and peaceful imagery paired with reflective quotes. The video encourages self-care, action, and mindfulness, making it perfect for social media content that aims to inspire and engage viewers. The gentle call to action invites audiences to share positivity and follow for more daily inspiration.',
    cover: '/images/video-production/cover4_home.webp',
    video: '/videos/3Dellium_Vid_4.mp4',
  },
];

function NextBtn() {
  const swiper = useSwiper();

  return (
    <button
      className={st.nextBtn}
      onClick={() =>
        swiper.activeIndex !== 3 ? swiper.slideNext() : swiper.slideTo(0)
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
      >
        <path
          d="M0 51C0 22.8335 22.8335 0 51 0C79.1665 0 102 22.8335 102 51C102 79.1665 79.1665 102 51 102C22.8335 102 0 79.1665 0 51Z"
          fill="white"
        />
        <path
          d="M43.6641 57H41.8401L36.3521 48.696V57H34.5281V45.864H36.3521L41.8401 54.152V45.864H43.6641V57ZM54.1394 52.376C54.1394 52.7067 54.118 53.0053 54.0754 53.272H47.3394C47.3927 53.976 47.654 54.5413 48.1234 54.968C48.5927 55.3947 49.1687 55.608 49.8514 55.608C50.8327 55.608 51.526 55.1973 51.9314 54.376H53.8994C53.6327 55.1867 53.1474 55.8533 52.4434 56.376C51.75 56.888 50.886 57.144 49.8514 57.144C49.0087 57.144 48.2514 56.9573 47.5794 56.584C46.918 56.2 46.3954 55.6667 46.0114 54.984C45.638 54.2907 45.4514 53.4907 45.4514 52.584C45.4514 51.6773 45.6327 50.8827 45.9954 50.2C46.3687 49.5067 46.886 48.9733 47.5474 48.6C48.2194 48.2267 48.9874 48.04 49.8514 48.04C50.6834 48.04 51.4247 48.2213 52.0754 48.584C52.726 48.9467 53.2327 49.4587 53.5954 50.12C53.958 50.7707 54.1394 51.5227 54.1394 52.376ZM52.2354 51.8C52.2247 51.128 51.9847 50.5893 51.5154 50.184C51.046 49.7787 50.4647 49.576 49.7714 49.576C49.142 49.576 48.6034 49.7787 48.1554 50.184C47.7074 50.5787 47.4407 51.1173 47.3554 51.8H52.2354ZM59.7104 52.536L62.5584 57H60.4944L58.5904 54.008L56.7984 57H54.8944L57.7424 52.664L54.8944 48.184H56.9584L58.8624 51.176L60.6544 48.184H62.5584L59.7104 52.536ZM66.0468 49.672V54.552C66.0468 54.8827 66.1214 55.1227 66.2708 55.272C66.4308 55.4107 66.6974 55.48 67.0708 55.48H68.1908V57H66.7508C65.9294 57 65.3001 56.808 64.8628 56.424C64.4254 56.04 64.2068 55.416 64.2068 54.552V49.672H63.1668V48.184H64.2068V45.992H66.0468V48.184H68.1908V49.672H66.0468Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export function VideoSamples() {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 5000,
      }}
      effect="cards"
      className={st.slider}
      modules={[EffectCards, Autoplay]}
      cardsEffect={{
        perSlideOffset: 8,
        slideShadows: false,
        rotate: false,
        perSlideRotate: 5,
      }}
    >
      {videos.map(video => (
        <SwiperSlide className={st.swipeCard} key={video.title}>
          <ReactPlayer
            url={video.video}
            light={video.cover}
            controls
            playIcon={
              <Image
                width={100}
                height={100}
                src="/images/play-btn.svg"
                alt="play-btn"
              />
            }
            playing
            loop={true}
            width={838}
            height={650}
            controlsList="nodownload nofullscreen"
            style={{ width: '100%' }}
          />
          <NextBtn />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
