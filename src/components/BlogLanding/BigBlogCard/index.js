import styles from "./styles.module.scss";
import Image from "next/image";
import BigCardAuthor from "@/components/BlogLanding/BigCardAuthor";
import he from "he";
import Link from "next/link";
const BigBlogCard = ({
  x_author,
  x_date,
  x_featured_media_medium,
  slug,
  title,
  excerpt,
  x_gravatar,
}) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className={styles.bigCradwrapper}>
        <div className={styles.content}>
          <h2>{he.decode(title?.rendered ? title.rendered : " ")}</h2>
          <div
            className={styles.subTitleBig}
            dangerouslySetInnerHTML={{
              __html: excerpt?.rendered,
            }}
          ></div>
          <BigCardAuthor author={x_author} date={x_date} avatar={x_gravatar} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={x_featured_media_medium}
            alt={"blogs"}
            width={400}
            height={400}
          />
        </div>
      </div>
    </Link>
  );
};
export default BigBlogCard;
