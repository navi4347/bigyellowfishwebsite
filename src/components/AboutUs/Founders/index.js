import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
const AboutUsFounders = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h3>Our Founders</h3>
        <ul className={styles.list}>
          <li className={styles.card}>
            <Image
              src={"/images/soma.png"}
              alt={"soma golakota"}
              width={340}
              height={270}
              className={styles.image}
            />
            <h4>Soma Sundar Gollakota</h4>
            <p>
              With over 20 years of experience as a frontline maritime worker,
              Soma understands human behavioral patterns at first hand.
            </p>
            <div className={styles.iconContainer}>
              <Link
                href={
                  "https://www.linkedin.com/in/soma-sundar-gollakota-b3b182215?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADZO998BJSQBmcKr09b3hoSqyBYDGpMHw2Q&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3B%2Bv4K%2B6TTRh2JaYfq1yLYGw%3D%3D"
                }
                target={"_blank"}
              >
                <Image
                  src={"/images/linkedin.svg"}
                  alt={""}
                  width={40}
                  height={40}
                  className={styles.linkedin}
                />
              </Link>
            </div>
          </li>{" "}
          <li className={styles.card}>
            <Image
              src={"/images/kunal.png"}
              alt={"soma golakota"}
              width={340}
              height={270}
              className={styles.image}
            />
            <h4>Kunal Pancholi</h4>
            <p>
              With over 18 years of experience, Kunal has expertise in the
              mental and behavioural healthcare domains.
            </p>
            <div className={styles.iconContainer}>
              <Link
                href={
                  "https://www.linkedin.com/in/kunalpancholi?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAEg4BABrFRAMu3XvLt3YjoxjpKPkbUGRmA&lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3B3ab15bb6-863a-49f9-a309-dbe3ee295384"
                }
                target={"_blank"}
              >
                <Image
                  src={"/images/linkedin.svg"}
                  alt={""}
                  width={40}
                  height={40}
                  className={styles.linkedin}
                />
              </Link>
            </div>
          </li>{" "}
          <li className={styles.card}>
            <Image
              src={"/images/linda.png"}
              alt={"soma golakota"}
              width={340}
              height={270}
              className={styles.image}
            />
            <h4>Linda Sorensen</h4>
            <p>
              With over 17 years of experience as an executive in operational
              safety across the oil, gas, maritime, and transport sectors.
            </p>
            <div className={styles.iconContainer}>
              <Link
                href={
                  "https://www.linkedin.com/in/linda-johnstone-sorensen?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAChH1gB18HGHMxi2QY0Pvch0YgOIVNSIK4&lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3B3ab15bb6-863a-49f9-a309-dbe3ee295384"
                }
                target={"_blank"}
              >
                <Image
                  src={"/images/linkedin.svg"}
                  alt={""}
                  width={40}
                  height={40}
                  className={styles.linkedin}
                />
              </Link>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};
export default AboutUsFounders;
