import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import PrimaryButton from "@/components/Shared/Button/Primary";
import Image from "next/image";
import Link from "next/link";
const FooterBanner = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <p>
          Ready to improve <br /> Performance & Sustainability?
        </p>
        <div className={styles.ctaContainer}>
          <Link href={"/contact/demo"}>
            <PrimaryButton>
              Book a Demo{" "}
              <Image
                src={"/images/chevron-right.svg"}
                alt={""}
                width={24}
                height={24}
              />
            </PrimaryButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default FooterBanner;
