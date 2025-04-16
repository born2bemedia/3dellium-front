import React from "react";
import styles from "./GreenButton.module.scss";
import ArrowRight from "@/icons/Arrows/ArrowRight";
import Link from "next/link";

const GreenButton = ({ text, link }) => {
  return (
    <Link href={link} className={styles.greenButton}>
      <span>{text}</span>
      <span>
        <ArrowRight />
      </span>
    </Link>
  );
};

export default GreenButton;
