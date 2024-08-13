import styles from "./styles.module.scss";
import OurPartners from "@/components/Home/OurPartners";
import Marquee, { Motion } from "react-marquee-slider";
import Image from "next/image";
import Container from "@/components/Shared/Container";
const HomeClients = ({ grid = false }) => {
  const images = [
    "/images/clients/client1.png",
    "/images/clients/client2.png",
    "/images/clients/client3.png",
    "/images/clients/client4.png",
    "/images/clients/client5.png",
    "/images/clients/client6.png",
    "/images/clients/client7.png",
    "/images/clients/client8.png",
    "/images/clients/client9.png",
    "/images/clients/client10.png",
    "/images/clients/client11.png",
    "/images/clients/client12.png",
    "/images/clients/client13.png",
    "/images/clients/client14.png",
  ];
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  return (
    <div className={styles.wrapper}>
      <h5>Trusted by Clients Globally</h5>
      {grid ? (
        <Container>
          <div className={styles.gridAra}>
            {images.map((image, index) => {
              return (
                <Image
                  src={image}
                  alt="baner"
                  width={320}
                  height={120}
                  className={styles.bgImage}
                />
              );
            })}
          </div>
        </Container>
      ) : (
        <div className={styles.markArea}>
          <Marquee velocity={windowWidth < 500 ? 10 : 20} direction={"rtl"}>
            {images.map((image, index) => {
              return (
                <Image
                  src={image}
                  alt="baner"
                  width={320}
                  height={120}
                  className={styles.bgImage}
                />
              );
            })}
          </Marquee>
        </div>
      )}
      <OurPartners />
    </div>
  );
};
export default HomeClients;
