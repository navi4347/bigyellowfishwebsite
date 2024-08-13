import BlogDetailHero from "@/components/BlogDetail/Hero";
import Newsletter from "@/components/Newsletter";
import BlogContent from "@/components/BlogDetail/BlogContent";
import axios from "axios";
import Head from "next/head";
import parse from "html-react-parser";

const BlogDetail = ({ post, categories, relatedPosts }) => {
  if (!post) return null;
  return (
      <>
        <Head>{post.yoast_head && parse(post.yoast_head)}</Head>
        <BlogDetailHero {...post} />
        <BlogContent
            {...post}
            categories={categories}
            relatedPosts={relatedPosts}
        />
        {/*<Newsletter />*/}
      </>
  );
};

export async function getStaticPaths() {
  let allPosts = [];
  let hasMore = true;
  let page = 1;

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

  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  console.log(paths)

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const response = await axios.get(
      `https://wordpress.bigyellowfish.io/wp-json/wp/v2/posts?slug=${slug}`,
  );
  const post = response.data[0];

  const categoriesResponse = await axios.get(
      `https://wordpress.bigyellowfish.io/wp-json/wp/v2/categories?post=${post.id}`,
  );
  const categories = categoriesResponse.data;

  const relatedPostsResponse = await axios.get(
      `https://wordpress.bigyellowfish.io/wp-json/wp/v2/posts?categories=${categories.map((category) => category.id).join(",")}&exclude=${post.id}&per_page=2`,
  );
  const relatedPosts = relatedPostsResponse.data;

  return {
    props: { post, categories, relatedPosts },
    revalidate: 60
  };
}

export default BlogDetail;
