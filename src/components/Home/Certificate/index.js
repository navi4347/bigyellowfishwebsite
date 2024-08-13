import styles from "./styles.module.scss";
import React from "react";
import Image from "next/image";
const Certificate = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardCover}>
        <div className={styles.card}>
          <h5>Enterprise Grade Certified</h5>
          <ul className={styles.list}>
            <li>
              <Image
                src="/images/cert1.png"
                alt="certificate"
                width={100}
                height={100}
              />
              <p>SOC 2</p>
            </li>
            <li>
              <Image
                src="/images/cert2.png"
                alt="certificate"
                width={100}
                height={100}
              />
              <p>ISO 9001</p>
            </li>
            <li>
              <Image
                src="/images/cert3.png"
                alt="certificate"
                width={100}
                height={100}
              />
              <p>ISO 14001</p>
            </li>
            <li>
              <Image
                src="/images/cert4.png"
                alt="certificate"
                width={100}
                height={100}
              />
              <p>CLASS NK</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Certificate;
