import React from "react";
import styles from "./GreyButton.module.scss";
import ArrowRight from "@/icons/Arrows/ArrowRight";
import Link from "next/link";

const GreyButton = ({ text, link }) => {
  return (
    <Link href={link} className={styles.greyButton}>
      <span>{text}</span>
      <span>
        <ArrowRight />
      </span>
    </Link>
  );
};

export default GreyButton;
