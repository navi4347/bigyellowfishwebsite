import styles from "@/styles/contact.module.scss";
import ContactDetails from "@/components/Contact/Details";
import Forms from "@/components/Contact/Forms";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BasicDetail from "@/components/Contact/BasicDetail";

const ContactDemo = () => {
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

          <Link href={"/"} className={styles.cta}>
            <button >Go back home</button>
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.formContainer}>
            <Forms>
              <BasicDetail title={"Schedule a free demo"} submitted={setFormSubmitted} extrafields />
            </Forms>
          </div>
          <div className={styles.details}>
            <ContactDetails />
          </div>
        </>
      )}
    </div>
  );
};
export default ContactDemo;
