import Container from "@/components/Shared/Container";
import styles from "./styles.module.scss";
import BlogSmallCard from "@/components/BlogLanding/SmallCard";
import Image from "next/image";
import he from "he";
import { useRouter } from "next/router";
import Link from "next/link";

const BlogContent = ({ content, title, categories, relatedPosts }) => {
  const router = useRouter();

  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    } else {
      return `https://www.yourdomain.com${router.asPath}`;
    }
  };

  const currentUrl = getCurrentUrl();
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title?.rendered)}&summary=${encodeURIComponent(title)}&source=LinkedIn`;
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div
            className={styles.parsed}
            dangerouslySetInnerHTML={{ __html: he.decode(content?.rendered) }}
          ></div>
          <div className={styles.socialShare}>
            Share the Blog on:
            <div className={styles.list}>
              <Link
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/images/facebook_fill.svg"}
                  alt={"facebook"}
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/images/linkedin_fill.svg"}
                  alt={"linkedin"}
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/images/ins_fill.svg"}
                  alt={"instagram"}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sideView}>
          <div className={styles.tagArea}>
            <div className={styles.heading}>Related Categories</div>
            <ul className={styles.tagList}>
              {categories?.map((category) => (
                <li key={category.id} className={styles.tagItem}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.blogArea}>
            <div className={styles.heading}>Other popular Blogs</div>
            {relatedPosts?.map((post) => (
              <BlogSmallCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogContent;
