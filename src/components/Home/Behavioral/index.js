import Container from "@/components/Shared/Container";
import Image from "next/image";
import styles from "./styles.module.scss";
import PrimaryButton from "@/components/Shared/Button/Primary";
import Link from "next/link";
const Behavioral = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={"/images/quantify-bg.svg"}
        alt={"bg"}
        layout={"fill"}
        objectFit={"cover"}
      />
      <Container>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <h2>Quantify Behavioral risks into a Performance Index Score</h2>
            <p>
              Impacting Safety, Productivity and Well-being - We help you achieve your sustainability goals.
            </p>
            <div className={styles.ctaContainer}>
              <PrimaryButton>
                <Link href={'/contact/demo'}>
                <div className={styles.cta}>
                  Book a Demo
                  <Image
                    src={"/images/chevron-right.svg"}
                    alt={"arrow"}
                    width={24}
                    height={24}
                  />
                </div>
                </Link>
              </PrimaryButton>
            </div>
          </div>
          <Image
            src={"/images/quantify-side-main.png"}
            alt={"mobile"}
            className={styles.mainImage}
            width={2080}
            height={1080}
          />
        </div>
      </Container>
    </div>
  );
};
export default Behavioral;
