import styles from "./styles.module.scss";
import React from "react";
import Image from "next/image";
import he from "he";
import Link from "next/link";

const BlogSmallCard = ({
  x_author,
  x_date,
  x_featured_media_medium,
  slug,
  title,
  excerpt,
}) => {
  const gradientList = [
    "linear-gradient(90deg, #3EBFFF 0%, #FF711E 100%)",
    "linear-gradient(90deg, #4FAEFF 0%, #FFE38F 100%)",
    "linear-gradient(90deg, #F2C801 0%, #5CC9FF 100%)",
    "linear-gradient(90deg, #8A97EC 0%, #F1BBFF 100%);",
  ];
  return (
    <Link href={`/blogs/${slug}`} className={styles.wrapper}>
      {x_featured_media_medium && (
        <Image
          src={x_featured_media_medium}
          alt={"blogs"}
          className={styles.thumbnail}
          width={300}
          height={200}
        />
      )}
      <div
        className={styles.gradient}
        style={{
          background:
            gradientList[Math.floor(Math.random() * gradientList.length)],
        }}
      ></div>
      <div className={styles.content}>
        <h3 className={styles.heading}>
          {he.decode(title?.rendered ? title.rendered : " ")}
        </h3>
        <p
          className={styles.subHeading}
          dangerouslySetInnerHTML={{
            __html: excerpt?.rendered,
          }}
        ></p>
        <div className={styles.desc}>
          <div className={styles.author}>
            <Image
              src={"https://picsum.photos/50"}
              alt={"author"}
              width={50}
              height={50}
            />
            {x_author}
          </div>
          {x_date}
        </div>
      </div>
    </Link>
  );
};
export default BlogSmallCard;
