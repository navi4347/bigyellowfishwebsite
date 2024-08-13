import Container from "@/components/Shared/Container";
import styles from "./styles.module.scss";
import Image from "next/image";
const HomeValues = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h4>
          Invest in an experience built by the frontline for the frontline
        </h4>
        <p>
          80% of our users find consistent benefits from the platform & have
          felt more confident & accomplished at their workplace.
        </p>

        <div className={styles.bento}>
          <div className={styles.row}>
            <div className={styles.one}>
              <div className={styles.text}>
                Potential savings on Insurance Liabilities
              </div>
              <p className={styles.value}>$30M+</p>
            </div>
            <div className={styles.two}>
              <div className={styles.text}>
                Potential reduction in operational costs
              </div>
              <p className={styles.value}>21%</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.three}>
              <div className={styles.text}>
                Potential improvement in safety metrics
              </div>
              <p className={styles.value}>15%</p>
            </div>
            <div className={styles.four}>
              <div className={styles.text}>
                Enhancing resilience & workplace safety
              </div>
              <p className={styles.value}>80,000+</p>
            </div>
          </div>
        </div>
      </Container>
      <Image
        src={"/images/values-bottom.svg"}
        alt={"bg"}
        width={1920}
        height={1080}
        className={styles.underlay}
      />
    </div>
  );
};
export default HomeValues;
