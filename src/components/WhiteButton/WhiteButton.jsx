import React from "react";
import styles from "./WhiteButton.module.scss";
import ArrowRight from "@/icons/Arrows/ArrowRight";
import Link from "next/link";
import ArrowRightSmall from "@/icons/Arrows/ArrowRightSmall";

const WhiteButton = ({ text, link }) => {
  return (
    <Link href={link} className={styles.whiteButton}>
      <span>{text}</span>
      <span>
        <ArrowRightSmall />
      </span>
    </Link>
  );
};

export default WhiteButton;
