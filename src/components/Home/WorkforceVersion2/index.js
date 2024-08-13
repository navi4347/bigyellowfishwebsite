import styles from "./styles.module.scss";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const WorkforceVersion2 = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <Image
            src={"/images/workplace-mobile-1.png"}
            alt={"workforce"}
            width={350}
            height={350}
            className={styles.thumbnail}
          />
          <h2>Unlock well-being for your workforce</h2>
          <p>
            Invest in a holistic approach that is preventative, supportive &
            developmental. Build continuous resilience reserves.
          </p>
        </li>{" "}
        <li>
          <Image
            src={"/images/workplace-mobile-2.png"}
            alt={"workforce"}
            width={350}
            height={350}
            className={styles.thumbnail}
          />
          <h2>Monitor & manage the balance between job demands & resources
          </h2>
          <p>
            Be on top of the imbalances caused by job demands & resources on the go and take actions when they matter the most.

          </p>
        </li>{" "}
        <li>
          <Image
            src={"/images/workplace-mobile-3.png"}
            alt={"workforce"}
            width={350}
            height={350}
            className={styles.thumbnail}
          />
          <h2>Reinforcement learning into the flow of work</h2>
          <p>
            Empower your workforce at the point of context, just in time,to
            reduce errors & drive efficiencies.
          </p>
        </li>{" "}
        <li>
          <Image
            src={"/images/workplace-mobile-4.png"}
            alt={"workforce"}
            width={350}
            height={350}
            className={styles.thumbnail}
          />
          <h2>
            Drive organisational culture by making your frontline visible &
            audible
          </h2>
          <p>
            Build trust & transparency, the culture of 'Speak up' and a sense of
            belonging to establish a sustainable & homogenous culture.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WorkforceVersion2;
