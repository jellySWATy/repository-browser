import { createHeading } from "./Heading";
import styles from "./Heading.module.css";

const Component = {
  H1: createHeading({ tag: "h1", className: styles["heading--h1"] }),
  H2: createHeading({ tag: "h2", className: styles["heading--h2"] }),
  H3: createHeading({ tag: "h3", className: styles["heading--h3"] }),
  H4: createHeading({ tag: "h4", className: styles["heading--h4"] }),
  H5: createHeading({ tag: "h5", className: styles["heading--h5"] }),
};

export default Component;
