import React from "react";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.homeHero}>
      <video width="1440" height="680" autoPlay={true} muted loop preload="none">
        <source src="/videos/homeHero.webm" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className="_container">
        <div className={styles.body}>
          <h1>
            <span>Shape your stories—</span>
            ready-to-use designs for life
          </h1>
          <p>
            Happiness lives in everyday moments—3Dellium brings your ideas to
            life with ready-to-use designs, animations, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
