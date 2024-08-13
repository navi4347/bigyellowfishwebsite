import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
const ContactDetails = ({ hide = false }) => {
    const copyToClipboard = () => {
        navigator.clipboard
            .writeText("contact@bigyellowfish.io")
            .then(() => {
                toast.success("Text copied to clipboard!")
            })
            .catch((err) => {
                toast.error("Failed to copy")
            });
    };
    return (
        <div className={styles.wrapper}>
            <Image
                src={"/images/contact-details-bg.svg"}
                alt={"bg"}
                width={1920}
                height={1920}
                className={styles.bg}
            />
            {!hide && (
                <div className={styles.content}>
                    {/*<div className={styles.heading}>What you’ll get from this demo</div>*/}
                    {/*<ul className={styles.list}>*/}
                    {/*  <li>*/}
                    {/*    <Image*/}
                    {/*      src={"/images/check.svg"}*/}
                    {/*      alt={"tick"}*/}
                    {/*      width={20}*/}
                    {/*      height={20}*/}
                    {/*    />*/}
                    {/*    A clear understanding of our process*/}
                    {/*  </li>{" "}*/}
                    {/*  <li>*/}
                    {/*    <Image*/}
                    {/*      src={"/images/check.svg"}*/}
                    {/*      alt={"tick"}*/}
                    {/*      width={20}*/}
                    {/*      height={20}*/}
                    {/*    />*/}
                    {/*    An insight of algorithms{" "}*/}
                    {/*  </li>*/}
                    {/*  <li>*/}
                    {/*    <Image*/}
                    {/*      src={"/images/check.svg"}*/}
                    {/*      alt={"tick"}*/}
                    {/*      width={20}*/}
                    {/*      height={20}*/}
                    {/*    />*/}
                    {/*    How we automate and improve the wellbeing of the company*/}
                    {/*  </li>*/}
                    {/*  <li>*/}
                    {/*    <Image*/}
                    {/*      src={"/images/check.svg"}*/}
                    {/*      alt={"tick"}*/}
                    {/*      width={20}*/}
                    {/*      height={20}*/}
                    {/*    />*/}
                    {/*    How we automate and improve the wellbeing of the company*/}
                    {/*  </li>*/}
                    {/*</ul>*/}
                    <div className={styles.card}>
                        You can also reach out to us directly
                        <div className={styles.bottom}>
                            <Link href={"mailto:contact@bigyellowfish.io"}>
                                contact@bigyellowfish.io
                            </Link>
                            <Image
                                src={"/images/copy.svg"}
                                alt={"email"}
                                width={20}
                                height={20}
                                style={{ cursor: "pointer" }}
                                onClick={copyToClipboard}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ContactDetails;
