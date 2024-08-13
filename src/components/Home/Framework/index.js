import styles from "./styles.module.scss";
import Image from "next/image";
import Container from "@/components/Shared/Container";
const Framework = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBlock}>
        <div className={styles.bgContainer}>
          <Image
            src={"/images/framework-top-bg.svg"}
            alt={"Framework-top-bg"}
            width={1920}
            height={1000}
            className={styles.bg}
          />
        </div>
        <Container>
          <div className={styles.content}>
            <h2>
              Rooted in science, crafted for human experience & engineered with
              cutting edge technology.
            </h2>
            <div className={styles.list}>
              <div className={styles.item}>
                <Image
                  src={"/images/brain.svg"}
                  alt={"brain"}
                  width={40}
                  height={40}
                />
                Behavioral Science meets Technology
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/controller.svg"}
                  alt={"brain"}
                  width={40}
                  height={40}
                />
                Gamification: Engagement redefined
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/trend-up-square.svg"}
                  alt={"brain"}
                  width={40}
                  height={40}
                />
                Leveraging AI for  Data Analytics
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Framework;
