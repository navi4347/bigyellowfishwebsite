import styles from "./styles.module.scss";
import Image from "next/image";
import Container from "@/components/Shared/Container";
const AboutUsHero = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.main}>
          <h1>Our Mission</h1>
          <p>
            To make the frontline workforces of the future more sustainable and
            resilient. By bringing together people, processes & technology, we
            aim to improve Individual performance and organisational resilience.
          </p>
        </div>
      </Container>
    </div>
  );
};
export default AboutUsHero;
