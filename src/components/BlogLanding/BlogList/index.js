import BlogSmallCard from "@/components/BlogLanding/SmallCard";

import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Link from "next/link";

const BlogList = ({ posts }) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        {posts.map((item, key) => {
          return <BlogSmallCard key={key} {...item} />;
        })}
      </div>
    </Container>
  );
};
export default BlogList;
