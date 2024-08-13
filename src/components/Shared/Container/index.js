import React from "react";
import styles from "./styles.module.scss";
const Container = ({ children, addedClass }) => {
  return (
    <div className={`${styles.wrapper} ${addedClass ? addedClass : ""}`}>
      {children}
    </div>
  );
};

export default Container;
