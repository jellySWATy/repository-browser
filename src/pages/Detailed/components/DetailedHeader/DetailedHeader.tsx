import React, { FC } from "react";
import Heading from "@shared/Heading";
import { Logo, SIZES } from "@shared/Logo";
import styles from "./DetailedHeader.module.css";
import { IDetailedHeaderProps } from "./types";

export const DetailedHeader: FC<IDetailedHeaderProps> = ({
  logo,
  title,
  url,
}) => {
  return (
    <header className={styles["header"]}>
      <Logo
        src={logo}
        alt="avatar"
        size={SIZES.LARGE}
        className={styles["header__logo"]}
      />
      <Heading.H1>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </Heading.H1>
    </header>
  );
};
