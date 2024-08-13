import styles from "./styles.module.scss";
import Image from "next/image";
import Container from "@/components/Shared/Container";
const SolutionsTextImage = ({ text, imgSrc ,mobileImgSrc}) => {
  return (
    <div className={styles.wrapper}>
      <Container addedClass={styles.conatiner}>
        <h4 className={styles.title}>{text}</h4>
        <Image
          src={imgSrc}
          alt={""}
          width={1920}
          height={1080}
          className={styles.thumb}
        />
          <Image
          src={mobileImgSrc}
          alt={""}
          width={500}
          height={700}
          className={styles.mobileThumb}
        />
      </Container>
    </div>
  );
};
export default SolutionsTextImage;
