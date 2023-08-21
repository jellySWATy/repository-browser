import { SIZES } from "./constants";
import styles from "./Logo.module.css";

export const getSizeStyles = (size: SIZES) => {
  switch (size) {
    case SIZES.SMALL:
      return styles["logo--small"];
    case SIZES.MEDIUM:
      return styles["logo--medium"];
    case SIZES.LARGE:
      return styles["logo--large"];
    default:
      return styles["logo--medium"];
  }
};
