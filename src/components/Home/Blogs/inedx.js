import Container from "@/components/Shared/Container";

import styles from "./styles.module.scss";
import BlogSmallCard from "@/components/BlogLanding/SmallCard";
import axios from "axios";
import { useEffect, useState } from "react";
const HomeBlogs = () => {
  const [posts, setPosts] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://wordpress.bigyellowfish.io/wp-json/wp/v2/posts?per_page=3&page=1`,
      );
      if (response.data.length > 0) {
        console.log(response.data)
        setPosts(response.data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container>
      <div className={styles.wrapper}>
        <h5>Blogs
        </h5>
        <p>
          Read our resource library for knowledge, insights, and opinions.

        </p>
        <div className={styles.list}>
          {posts &&
            posts.length > 0 &&
            posts.map((post, index) => {
              return <BlogSmallCard {...post} key={index}/>;
            })}
        </div>
      </div>
    </Container>
  );
};
export default HomeBlogs;
