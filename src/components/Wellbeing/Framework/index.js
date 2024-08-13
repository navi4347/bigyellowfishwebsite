import styles from "./styles.module.scss";
import Image from "next/image";
import PrimaryButton from "@/components/Shared/Button/Primary";
import Container from "@/components/Shared/Container";
import Link from "next/link";
const Framework = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={"/images/framework-bg.svg"}
        alt={""}
        width={1920}
        height={1080}
        className={styles.bg}
      />
      <Container>
        <h2>
          A framework built to achieve workforce satisfaction, sustainability,
          and organisational resilience.
        </h2>
        <p>
          Designed to emphasise and prioritise mental and behavioural health
          care, the framework incorporates Occupational Health & Safety and the
          Job Demands & Resources model, lending itself to a holistic well-being
          strategy with measurable outcomes and tangible results.
        </p>

        <ul>
          <li>
            <Image
              src={"/images/heart-pulse.svg"}
              alt={""}
              width={40}
              height={40}
            />
            <h3>Worker Health Safety</h3>
          </li>
          <li>
            <Image
              src={"/images/shield-check.svg"}
              alt={""}
              width={40}
              height={40}
            />
            <h3>Psychosocial Security</h3>
          </li>
          <li>
            <Image
              src={"/images/buildings.svg"}
              alt={""}
              width={40}
              height={40}
            />
            <h3>Organisation Culture</h3>
          </li>
        </ul>

        <div className={styles.ctaHeading}>Curious to know more?</div>
        <div className={styles.ctaContainer}>
          <Link href={"/contact"}>
            <PrimaryButton>Contact Us</PrimaryButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default Framework;
