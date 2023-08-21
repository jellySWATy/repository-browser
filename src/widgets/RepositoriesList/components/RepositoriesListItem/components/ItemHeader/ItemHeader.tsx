import React, { FC } from "react";
import Heading from "@shared/Heading";
import { Logo } from "@shared/Logo";
import styles from "./ItemHeader.module.css";
import { IItemHeaderProps } from "./types";

export const ItemHeader: FC<IItemHeaderProps> = ({ logo, title, url }) => {
  return (
    <header className={styles["item__header"]}>
      <Logo src={logo} alt="avatar" className={styles["header__logo"]} />
      <Heading.H3>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </Heading.H3>
    </header>
  );
};
