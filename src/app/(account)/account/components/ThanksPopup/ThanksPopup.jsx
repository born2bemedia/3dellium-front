import React from "react";
import styles from "./ThanksPopup.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";

const ThanksPopup = () => {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();

  const handleClose = () => {
    setThanksPopupDisplay(false);
  };

  return (
    <div
      className={`${styles.thanksPopup} ${
        thanksPopupDisplay && styles.popupOpened
      }`}
    >
      <div className="_container">
        <div className={styles.popupWrap}>
          <div className={styles.popupInner}>
            <div className={styles.col1}>
              <Image src={"/images/thanksPopup.png"} alt="thanks" fill />
            </div>
            <div className={styles.col2}>
              <h2>
                <span>Success! </span>
                Your data has been updated!
              </h2>
              <button onClick={() => handleClose()}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksPopup;
