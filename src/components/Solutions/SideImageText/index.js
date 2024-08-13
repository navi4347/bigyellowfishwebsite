import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Image from "next/image";
const SideImageText = ({ leftImage, title, subtitle, imgSrc, bgColor }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: bgColor ? bgColor : "#fff" }}
    >
      <Container>
        <div className={styles.row}>
          <div
            className={styles.content}
            style={{
              order: leftImage ? 2 : 1,
            }}
          >
            <h5>{title}</h5>
            <p>{subtitle}</p>
          </div>
          <div
            className={styles.imgContainer}
            style={{ order: leftImage ? 1 : 2 }}
          >
            <Image src={imgSrc} alt={""} width={600} height={600} />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SideImageText;
