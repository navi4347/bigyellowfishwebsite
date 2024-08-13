import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
const DemoBanner = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
            <h5>Not finding what you want?</h5>
            <p>Software built to address your needs. book a demo with us and find out how we can help you.</p>
        </div>
          <Link href={'/contact/demo'}>
          <button className={styles.cta}>
              Book a Demo
              <Image src={'/images/chevron-right.svg'} alt={'arrow'} width={24} height={24} />
          </button>
          </Link>
      </div>
    </Container>
  );
};
export default DemoBanner;
