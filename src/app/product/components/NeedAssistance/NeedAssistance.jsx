import React from "react";
import styles from "./NeedAssistance.module.scss";
import MoreButton from "@/components/MoreButton/MoreButton";

const NeedAssistance = () => {
  return (
    <section className={styles.assistance}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h2>Need Assistance?</h2>
          <MoreButton link={"#"} text={"Contact Us"} />
        </div>
        <div
          className={styles.col2}
          style={{ backgroundImage: "url(/images/product/assistance.png)" }}
        ></div>
      </div>
    </section>
  );
};

export default NeedAssistance;
