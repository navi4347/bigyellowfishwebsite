import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
const AddressDetails = () => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("contact@bigyellowfish.io")
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy");
      });
  };
  const copyToClipboard1 = () => {
    navigator.clipboard
      .writeText("hr@bigyellowfish.io")
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy");
      });
  };
  return (
    <div className={styles.wrapper}>
      <h1>Contact Us</h1>
      <div className={styles.email}>
        <Image
          src={"/images/email-dark.svg"}
          alt={"email"}
          width={32}
          height={32}
          className={styles.icon}
        />
        <h3>Business enquiries:</h3>
        contact@bigyellowfish.io
        <Image
          src={"/images/copy.svg"}
          alt={"email"}
          width={20}
          height={20}
          className={styles.copyIcon}
          onClick={copyToClipboard}
        />
      </div>
      <div className={styles.email}>
        <Image
          src={"/images/email-dark.svg"}
          alt={"email"}
          width={32}
          height={32}
          className={styles.icon}
        />
        <h3>Careers:</h3>
        hr@bigyellowfish.io
        <Image
          src={"/images/copy.svg"}
          alt={"email"}
          width={20}
          height={20}
          className={styles.copyIcon}
          onClick={copyToClipboard1}
        />
      </div>
      <div className={styles.addressSection}>
        <div className={styles.addressBlock}>
          <div className={styles.name}>Bengaluru</div>
          <div className={styles.address}>
            Corporate office <br />
            13, Commissariat Rd, Ashok Nagar, Bengaluru, Karnataka 560025
          </div>
          {/* <border-bottom: 2px solid rgba(32, 25, 21, 0.12);div className={styles.number}>+91 9880362739</border-bottom:> */}
        </div>{" "}
        <div className={styles.addressBlock}>
          <div className={styles.name}>Singapore</div>
          <div className={styles.address}>
            Head office <br />
            21B Bukit Pasoh Road,
            <br />
            Singapore -089835
          </div>
          {/* <div className={styles.number}>+44 984531435</div> */}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <Image
            src={"/images/Logo.svg"}
            alt={"logo"}
            width={230}
            height={230}
            className={styles.logo}
          />
          <div className={styles.caption}>Amplify Human Performance</div>
        </div>
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
  );
};
export default AddressDetails;
