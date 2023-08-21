import React, { FC, PropsWithChildren } from "react";
import { IHeadingProps } from "./types";
import styles from "./Heading.module.css";

export const Heading: FC<PropsWithChildren<IHeadingProps>> = ({
  tag: Tag,
  className,
  children,
}) => {
  return <Tag className={className}>{children}</Tag>;
};

export const createHeading = ({
  tag: Tag,
  className: defaultStyles,
}: Omit<IHeadingProps, "title">) => {
  return ({
    className: newStyles,
    children,
  }: PropsWithChildren<Omit<IHeadingProps, "tag">>) => {
    const classes = `${defaultStyles} ${newStyles ?? ""} ${styles["heading"]}`;
    return (
      <Heading tag={Tag} className={classes}>
        {children}
      </Heading>
    );
  };
};
