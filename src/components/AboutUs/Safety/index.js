import styles from "@/components/AboutUs/Hero/styles.module.scss";
import Image from "next/image";

const Safety = () => {
  return (
    <div className={styles.details}>
      <Image
        src={"/images/abou-artboard.svg"}
        alt={""}
        width={250}
        height={50}
      />
      <h2>
        With over 100 years of experience in safety-critical industries around
        the globe, we are a group of product builders, domain experts, and
        business developers who spend their time thinking of ways to create a
        more sustainable future for the frontline industry.
      </h2>
    </div>
  );
};
export default Safety;
