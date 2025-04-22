import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import VideoRow from '../VideoRow/VideoRow';
import LearnMoreButton from '@/components/LearnMoreButton/LearnMoreButton';
import styles from './WeCapture.module.scss';
import { VideoSamples } from '@/components/VideoSamples';

const WeCapture = () => {
  return (
    <section className={styles.main}>
      <div className="_container">
        <SectionTitle
          label={'We Capture'}
          labelVariant="green"
          title={
            'Tell your story—personalized videos for every moment that matters.'
          }
          titleStyles={{ color: '#7BB589' }}
          text={
            'Our ready-to-use video templates help you celebrate, motivate, and showcase your experiences. Whether it’s a heartfelt greeting, a standout portfolio, or a personal highlight reel, we make your vision come to life.'
          }
          textStyles={{ color: '#7BB589' }}
          buttonText="Learn More"
          buttonType="learn"
          buttonLink="/video-production"
          buttonVariant="green"
        />
        <VideoSamples />
      </div>
    </section>
  );
};

export default WeCapture;
