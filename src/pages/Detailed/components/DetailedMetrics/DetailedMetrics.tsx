import React, { FC } from "react";
import { IDetailedMetricsProps } from "./types";
import { Logo, SIZES } from "@shared/Logo";
import starIcon from "@static/icons/star.svg";
import forkIcon from "@static/icons/fork.svg";
import styles from "./DetailedMetrics.module.css";

export const DetailedMetrics: FC<IDetailedMetricsProps> = ({
  stars,
  forks,
}) => {
  return (
    <div className={styles["metrics"]}>
      <div className={styles["metrics__item"]}>
        <Logo src={starIcon} size={SIZES.SMALL} alt="star" />
        <span>{stars}</span>
      </div>
      <div className={styles["metrics__item"]}>
        <Logo src={forkIcon} size={SIZES.SMALL} alt="fork" />
        <span>{forks}</span>
      </div>
    </div>
  );
};
