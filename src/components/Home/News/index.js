import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

// Fetch news data from the API

const News = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsData, setNewsData] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(
      "https://wordpress.bigyellowfish.io/wp-json/wp/v2/news?_embed",
    );

    const updatedData=  response.data.map((news) => ({
      title: news.title.rendered,
      link: news.x_metadata?.news_file ? news.x_metadata?.news_file : news.x_metadata.news_link,
      date: new Date(news.date).toLocaleDateString(),
      author: news.x_metadata.publisher_name,
    }));
    setNewsData(updatedData)
  };
  useEffect(() => {
    fetchList();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <h5 className={styles.title}>Making headlines
        </h5>
        <p className={styles.subTitle}>
          Stay updated and informed every time we make the news.

        </p>
      </Container>
      <Slider {...settings} ref={sliderRef} className={styles.slider}>
        {newsData.map((post) => (
          <Link href={post?.link?post.link:"#"} key={post.title} target="_blank">
            <div className={styles.card}>
              <div className={styles.date}>{post.date}</div>
              <h6>{post.title}</h6>
              <div className={styles.author}>
                {/*<Image*/}
                {/*  src={post.authorAvatar || "/images/default-avatar.png"}*/}
                {/*  alt={post.author}*/}
                {/*  width={40}*/}
                {/*  height={40}*/}
                {/*/>*/}
                <div>
                  {/*<div className={styles.text}>{post.author}</div>*/}
                  <div className={styles.subtext}>By {post.author}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default News;
