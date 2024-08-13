import BlogLandingHero from "@/components/BlogLanding/Hero";
import FeaturedBlogs from "@/components/BlogLanding/FeaturedBlogs";
import BlogList from "@/components/BlogLanding/BlogList";
import Newsletter from "@/components/Newsletter";
import DemoBanner from "@/components/DemoBanner";
import axios from "axios";
import { useState } from "react";

const BlogLandingPage = ({ allPosts, featuredPosts, categories }) => {
  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  const handleCategorySelect = async (categoryId) => {
    if (categoryId === "all") {
      setFilteredPosts(allPosts);
    } else {
      try {
        const response = await axios.get(
            `https://wordpress.bigyellowfish.io/wp-json/wp/v2/posts?categories=${categoryId}`,
        );
        setFilteredPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts for category:", error);
      }
    }
  };

  return (
      <>
        <BlogLandingHero
            post={
              featuredPosts && featuredPosts.length > 0 ? featuredPosts[0] : null
            }
            categories={categories}
            onCategorySelect={handleCategorySelect}
        />
        {featuredPosts && featuredPosts.length > 1 && (
            <FeaturedBlogs posts={featuredPosts} />
        )}
        {/*<Newsletter />*/}
        {filteredPosts && <BlogList posts={filteredPosts} />}
        <DemoBanner />
      </>
  );
};

export async function getStaticProps() {
  let allPosts = [];
  let featuredPosts = [];
  let page = 1;
  let hasMore = true;
  const featuredTagId = "3"; // Replace with your actual featured tag ID

  // Fetch all posts
  while (hasMore) {
    try {
      const response = await axios.get(
          `https://wordpress.bigyellowfish.io/wp-json/wp/v2/posts?per_page=100&page=${page}`,
      );
      if (response.data.length > 0) {
        allPosts = [...allPosts, ...response.data];
        page += 1;
      } else {
        hasMore = false;
      }
    } catch (error) {
      if (error.response?.data?.code === "rest_post_invalid_page_number") {
        hasMore = false;
      } else {
        throw error;
      }
    }
  }

  // Fetch the featured posts
  try {
    const response = await axios.get(
        `https://wordpress.bigyellowfish.io/wp-json/wp/v2/posts?tags=${featuredTagId}`,
    );
    featuredPosts = response.data;
  } catch (error) {
    console.error("Failed to fetch featured posts:", error);
  }

  // Fetch all categories
  let categories = [];
  try {
    const response = await axios.get(
        `https://wordpress.bigyellowfish.io/wp-json/wp/v2/categories`,
    );
    categories = response.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  // Return the posts and categories as props
  return {
    props: {
      allPosts: allPosts,
      featuredPosts: featuredPosts,
      categories: categories,
    },
    revalidate: 60,
  };
}

export default BlogLandingPage;
