import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import PrimaryButton from "@/components/Shared/Button/Primary";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.top}>
        <Container>
          <div className={styles.titleSection}>
            <div className={styles.title}>
              Ready to improve Performance & Sustainability?
            </div>
            <Link href={"/contact/demo"}>
              <PrimaryButton>
                Talk to us!
                <Image
                  src={"/images/chevron-right.svg"}
                  alt={"arrow"}
                  width={24}
                  height={24}
                />
              </PrimaryButton>
            </Link>
          </div>
        </Container>
      </div>
      <div className={styles.bottomContainer}>
        <Container>
          <div className={styles.navSection}>
            <div className={styles.logoContainer}>
              <Link href={"/"}>
                <Image
                  src={"/images/Logo.svg"}
                  alt={"logo"}
                  width={230}
                  height={230}
                  className={styles.logo}
                />
              </Link>
              <div className={styles.caption}>Amplify Human Performance</div>
            </div>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/#solutions"}>Solutions</Link>
              </li>
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>{" "}
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </Container>

        <div className={styles.divider}></div>
        <div className={styles.copySectioon}>
          <Container>
            <div className={styles.row}>
              <div className={styles.copy}>BIGYELLOW PVT. LTD.</div>
              <div className={styles.social}>
                <Link href={"mailto:contact@bigyellowfish.io"}>
                  <Image
                    src={"/images/envelope-notification.svg"}
                    alt={"mail"}
                    width={24}
                    height={24}
                  />
                  contact@bigyellowfish.io
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/bigyellowfish/"}
                  target={"_blank"}
                >
                  <Image
                    src={"/images/linkedin_blue.svg"}
                    alt={"linkedin"}
                    width={24}
                    height={24}
                    className={styles.linkedin}
                  />
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.mobiledivider}></div>
        <div className={styles.mobileCopy}>
          Bigyellowfish Technologies Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
