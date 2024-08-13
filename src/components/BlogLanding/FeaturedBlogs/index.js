import Container from "@/components/Shared/Container";
import styles from "./styles.module.scss";
import BlogSmallCard from "@/components/BlogLanding/SmallCard";
const FeaturedBlogs = ({ posts }) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        {posts &&
          posts.map((item, key) => {
            return key > 0 ? <BlogSmallCard key={key} {...item} /> : null;
          })}
      </div>
    </Container>
  );
};
export default FeaturedBlogs;
