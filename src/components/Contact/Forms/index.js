import styles from "./styles.module.scss";
import ContactBasicDetail from "@/components/Contact/BasicDetail";
import { useState } from "react";
import CompanyDetails from "@/components/Contact/CompanyDetails";
const Forms = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default Forms;
