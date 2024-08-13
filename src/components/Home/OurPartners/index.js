import Container from "@/components/Shared/Container";
import styles from "./styles.module.scss";
import Image from "next/image";
const OurPartners = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h3>Our Partners</h3>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <Image
              src={"/images/rightship.svg"}
              alt={"rightship"}
              width={200}
              height={200}
            />
            <p>Zero Harm Innovation Partner</p>
          </div>
          <div className={styles.listItem}>
            <Image
              src={"/images/ssa-logo.png"}
              alt={"rightship"}
              width={200}
              height={200}
            />
            <p>Digitalisation Committee</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default OurPartners;
