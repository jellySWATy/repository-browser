import React, { FC } from "react";
import { IItemMetricsProps } from "./types";
import { Logo, SIZES } from "@shared/Logo";
import starIcon from "@static/icons/star.svg";
import forkIcon from "@static/icons/fork.svg";
import styles from "./ItemMetrics.module.css";

export const ItemMetrics: FC<IItemMetricsProps> = ({ stars, forks }) => {
  return (
    <div className={styles["item__metrics"]}>
      <div className={styles["metrics__item"]}>
        <Logo src={starIcon} alt="star" size={SIZES.SMALL} />
        <span>{stars}</span>
      </div>
      <div className={styles["metrics__item"]}>
        <Logo src={forkIcon} alt="fork" size={SIZES.SMALL} />
        <span>{forks}</span>
      </div>
    </div>
  );
};
