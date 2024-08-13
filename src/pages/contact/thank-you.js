import styles from "@/styles/contact.module.scss";
import ContactDetails from "@/components/Contact/Details";
import Forms from "@/components/Contact/Forms";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BasicDetail from "@/components/Contact/BasicDetail";
import AddressDetails from "@/components/Contact/AddressDetails";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thankyouContainer}>
        <Image
          src={"/images/thank-you-bg.svg"}
          alt={""}
          width={1000}
          height={1000}
          className={styles.bg}
        />
        <div className={styles.title}>You’re all set!</div>
        <p className={styles.subTitle}>
          Thank you for booking a demo with us, we will reach out to you
          shortly.
        </p>

        <Link href={"/"} className={styles.cta}>
          <button>Go back home</button>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
