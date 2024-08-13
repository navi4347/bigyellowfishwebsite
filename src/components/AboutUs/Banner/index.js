import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import PrimaryButton from "@/components/Shared/Button/Primary";
import Link from "next/link";
const AboutUsBanner = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.row}>
          <h5>
            Don't see a role that's right for you?
            <br />
            Apply anyway!
          </h5>
          <Link href={'/contact'}><PrimaryButton size={'ml'}>Contact Us</PrimaryButton></Link>
        </div>
      </Container>
    </div>
  );
};
export default AboutUsBanner;
