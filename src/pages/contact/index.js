import styles from "@/styles/contact.module.scss";
import ContactDetails from "@/components/Contact/Details";
import Forms from "@/components/Contact/Forms";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BasicDetail from "@/components/Contact/BasicDetail";
import AddressDetails from "@/components/Contact/AddressDetails";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className={styles.wrapper}>
      {formSubmitted ? (
        <div className={styles.thankyouContainer}>
          <Image
            src={"/images/thank-you-bg.svg"}
            alt={""}
            width={1000}
            height={1000}
            className={styles.bg}
          />
          <div className={styles.title}>Thank you for signing up</div>
          <p className={styles.subTitle}>
            You’re all set! we will reach out to your shortly.
          </p>

          <Link href={"/"}>
            <button className={styles.cta}>Go back home</button>
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.formContainer}>
            <AddressDetails />
          </div>
          <div className={styles.details}>
            <ContactDetails hide/>
          </div>
        </>
      )}
    </div>
  );
};
export default Contact;
