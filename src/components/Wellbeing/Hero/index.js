import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Slider from "react-slick";
import { useRef, useState } from "react";

const WellbeingHero = ({
  heading,
  subHeading,
  tags,
  bg,
  sideImgSrc,
  knowList,
  bgColor,
}) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const setting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgGrad} style={{ background: bgColor }}></div>
      <Image
        src={sideImgSrc}
        alt={""}
        height={1080}
        width={1920}
        className={styles.sideRight}
      />
      <Container>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subHeading}>{subHeading}</p>

        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <div key={index}>
              <div className={styles.tag}>
                <Image src={tag.icon} alt="" width={40} height={40} />
               <div className={styles.title}> {tag.title}</div>
              </div>
              {/*<div className={styles.caption}>{tag.caption}</div>*/}
            </div>
          ))}
        </div>
        {knowList && knowList.length > 0 && (
          <div className={styles.know}>
            <div className={styles.title}>
              <Image
                src={"/images/info-square.svg"}
                alt={"info-square"}
                width={32}
                height={32}
              />
              Did you know?
            </div>
            <Slider {...setting} ref={sliderRef}>
              {knowList.map((item, index) => {
                return (
                  <div key={index}>
                    <div className={styles.subtitle}>{item}</div>
                  </div>
                );
              })}
            </Slider>
            <div className={styles.sliderIndicator}>
              {knowList.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => sliderRef?.current?.slickGoTo(index)}
                    className={`${styles.indicator} ${
                      currentSlide === index ? styles.activeIndicator : ""
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default WellbeingHero;
