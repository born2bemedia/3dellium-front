'use client';
import LearnMoreButton from '@/components/LearnMoreButton/LearnMoreButton';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React, { useEffect, useRef, useState } from 'react';
import styles from './WeDesign.module.scss';

const WeDesign = () => {
  const [activeIndex, setActiveIndex] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const [height, setHeight] = useState('700px');
  const imgRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const divRefs = useRef([]);

  const handleTabClick = index => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const updateHeight = () => {
      const newHeight = img.clientHeight;
      if (newHeight > 0) {
        setHeight(`${newHeight}px`);
      }
    };

    img.addEventListener('load', updateHeight);

    updateHeight();

    return () => {
      if (img) {
        img.removeEventListener('load', updateHeight);
      }
    };
  }, [activeIndex]);

  const handleMouseMove = (e, index) => {
    if (!isMobile) {
      const rect = divRefs.current[index].getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseEnter = index => {
    if (!isMobile) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
    }
  };

  const data = [
    {
      title: 'Expert Nutrition Blog',
      img: '/images/ux/Project1.png',
    },
    {
      title: 'store-like platform for ordering',
      img: '/images/ux/Project3.png',
    },
    {
      title: 'website for business orders',
      img: '/images/ux/Project4.png',
    },
  ];

  const classNames = index => {
    switch (index) {
      case 0:
        return styles.first;
      case 1:
        return styles.second;
      case 2:
        return styles.third;
      case 3:
        return styles.fourth;
      default:
        return '';
    }
  };

  return (
    <section className={`${styles.main} ${classNames(activeIndex)}`}>
      <div className="_container">
        <div className={styles.body}>
          <SectionTitle
            label={'We Design'}
            title={
              'Create your digital presence with user-friendly layouts for personal projects.'
            }
            text={
              'Our ready-to-use UX/UI designs make building stunning blogs, social media pages, and portfolios easy. Elevate your online identity with intuitive, visually engaging templates tailored for individual creativity.'
            }
            classValue="white"
          />
          <div className={styles.designTabs}>
            <div className={styles.tabs}>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.tab} ${
                    activeIndex === index && styles.active
                  }`}
                  onClick={() =>
                    handleTabClick(activeIndex === index ? null : index)
                  }
                  ref={el => (divRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={e => handleMouseMove(e, index)}
                >
                  <span
                    className={styles.button}
                    style={{
                      position: 'absolute',
                      left:
                        hoveredIndex === index && !isMobile
                          ? `${mousePos.x - 50}px`
                          : '-80px',
                      top:
                        hoveredIndex === index && !isMobile
                          ? `${mousePos.y - 20}px`
                          : '-80px',
                    }}
                  >
                    {activeIndex === index ? 'Close' : 'Open'}
                  </span>
                  <h3 className={styles.tabTitle}>{item.title}</h3>
                  <div
                    className={styles.tabImg}
                    style={{
                      height: activeIndex === index ? height : '0',
                      transition: 'height 0.3s ease',
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      ref={imgRef}
                      style={{ maxWidth: '100%', display: 'block' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeDesign;
