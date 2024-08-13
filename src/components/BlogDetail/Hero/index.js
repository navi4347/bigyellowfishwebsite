import Container from "@/components/Shared/Container";

import styles from "./styles.module.scss";
import Image from "next/image";
import BigCardAuthor from "@/components/BlogLanding/BigCardAuthor";
import he from "he";
const BlogDetailHero = ({
  x_featured_media_original,
  title,
  x_author,
  x_date,
}) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.content}>
            {/*<div className={styles.read}>*/}
            {/*  <Image*/}
            {/*    src={"/images/clock.svg"}*/}
            {/*    alt={"clock"}*/}
            {/*    height={24}*/}
            {/*    width={24}*/}
            {/*  />{" "}*/}
            {/*  5 min read*/}
            {/*</div>*/}
            <h1> {he.decode(title?.rendered ? title.rendered : " ")}</h1>
            <div className={styles.authorContainer}>
              <BigCardAuthor author={x_author} date={x_date} />
            </div>
          </div>
          {x_featured_media_original && (
            <div className={styles.imgContainer}>
              <Image
                src={x_featured_media_original}
                alt={"blogs"}
                width={600}
                height={600}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
export default BlogDetailHero;
