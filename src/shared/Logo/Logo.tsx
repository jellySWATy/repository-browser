import React, { FC } from "react";
import { ILogoProps } from "./types";
import { SIZES } from "./constants";
import { getSizeStyles } from "./helpers";

export const Logo: FC<ILogoProps> = ({
  className,
  src,
  alt,
  size = SIZES.MEDIUM,
}) => {
  const classes = `${getSizeStyles(size)} ${className ?? ""}`;
  return <img className={classes} src={src} alt={alt} />;
};
