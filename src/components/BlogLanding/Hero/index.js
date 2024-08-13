import styles from "./styles.module.scss";
import PrimaryButton from "@/components/Shared/Button/Primary";
import Container from "@/components/Shared/Container";
import BigBlogCard from "@/components/BlogLanding/BigBlogCard";
import Image from "next/image";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import { useState } from "react";

const BlogLandingHero = ({ post, categories, onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    onCategorySelect(categoryId);
  };
  const filteredCategories = categories.filter((category) => category.name !== 'Uncategorized');
  return (
      <div className={styles.wrapper}>
        <Image
            src={"/images/hero-bg.svg"}
            alt={"bg"}
            className={styles.bgImage}
            width={2800}
            height={20000}
        />
        <div className={styles.bottomBarUnderlay}></div>
        <Container>
          <h1>Bigyellow Blogs</h1>
          <p>
            Stay Informed on Industry Trends, Thought Leadership, Insights,
            Well-Being, and More.
          </p>
          {/*<div className={styles.formContainer}>*/}
          {/*  <SubscribeForm />*/}
          {/*</div>*/}

          <div className={styles.tagContainer}>
            <div className={styles.heading}>Filters based on tags</div>

            <ul className={styles.tagList}>
              <li
                  className={`${styles.tagItem} ${activeCategory === "all" ? styles.active : ""}`}
                  onClick={() => handleCategoryClick("all")}
              >
                All
              </li>
              <li className={styles.divider}></li>
              {filteredCategories.map((category) => (
                  <li
                      key={category.id}
                      className={`${styles.tagItem} ${activeCategory === category.id ? styles.active : ""}`}
                      onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.name}
                  </li>
              ))}
            </ul>
          </div>
          {post && <BigBlogCard {...post} />}
        </Container>
      </div>
  );
};

export default BlogLandingHero;
