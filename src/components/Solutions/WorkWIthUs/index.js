import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import PrimaryButton from "@/components/Shared/Button/Primary";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const WorkWIthUs = ({ bg }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.card}>
          <Image
            src={bg}
            alt={""}
            height={600}
            width={600}
            className={styles.bg}
          />
          <div className={styles.left}>
            <div className={styles.title}>
              Why people work <br /> with us
            </div>
            <Link href={"/contact/demo"}>
              <PrimaryButton>
                Book a Demo{" "}
                <Image
                  src={"/images/chevron-right.svg"}
                  alt={""}
                  width={20}
                  height={20}
                />
              </PrimaryButton>
            </Link>
          </div>
          <div className={styles.values}>
            <div>
              80K+
              <div className={styles.caption}>Platform Users</div>
            </div>
            <div>
              80%
              <div className={styles.caption}>Active Users</div>
            </div>
            <div>
              1500+
              <div className={styles.caption}>Total Assets</div>
            </div>
            <div>
              $30M+
              <div className={styles.caption}>Total Value</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default WorkWIthUs;
