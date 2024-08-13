import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";

const OurSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 1500,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };
  const items = Array.from({ length: 3 }, (value, index) => index);

  return (
    <section className={styles.wrapper} id={"solutions"}>
      <div className={styles.bgContainer}>
        <Image
          src={"/images/solution-bg.svg"}
          alt={"bg"}
          className={styles.bgImage}
          width={2754}
          height={1582}
        />
      </div>
      <Container addedClass={styles.container}>
        <h4>Our Solutions</h4>
        <p> Achieve wins for your employees & business</p>
        <ul className={styles.list}>
          <li className={styles.card}>
            <div className={styles.bg}></div>
            <Link href={"/solutions/workplace-wellbeing"}>
              <div>
                <div className={styles.imgContainer}>
                  <Image
                    src={"/images/solution2.svg"}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.thumbnail}
                  />
                  <Image
                    src={"/images/arrow-up-right-circle.svg"}
                    alt={"arrow"}
                    width={56}
                    height={56}
                    className={styles.arrow}
                  />
                </div>
                <div className={styles.caption}>Workplace Well-being</div>
              </div>
            </Link>
          </li>
          <li className={styles.card}>
            <div className={styles.bg}></div>
            <Link href={"/solutions/reinforced-learning"}>
              <div>
                <div className={styles.imgContainer}>
                  <Image
                    src={"/images/solution1.svg"}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.thumbnail}
                  />
                  <Image
                    src={"/images/arrow-up-right-circle.svg"}
                    alt={"arrow"}
                    width={56}
                    height={56}
                    className={styles.arrow}
                  />
                </div>
                <div className={styles.caption}>Reinforced Learning</div>
              </div>
            </Link>
          </li>

          <li className={styles.card}>
            <div className={styles.bg}></div>
            <Link href={"/solutions/collaboration-for-teams"}>
              <div>
                <div className={styles.imgContainer}>
                  <Image
                    src={"/images/solution3.svg"}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.thumbnail}
                  />
                  <Image
                    src={"/images/arrow-up-right-circle.svg"}
                    alt={"arrow"}
                    width={56}
                    height={56}
                    className={styles.arrow}
                  />
                </div>
                <div className={styles.caption}>Collaboration for Teams</div>
              </div>
            </Link>
          </li>
        </ul>

        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            <div className={styles.outer}>
              <div className={styles.card}>
                <div className={styles.bg}></div>
                <Link href={"/solutions/workplace-wellbeing"}>
                  <div>
                    <div className={styles.imgContainer}>
                      <Image
                        src={"/images/solution2.svg"}
                        alt=""
                        width={200}
                        height={200}
                        className={styles.thumbnail}
                      />
                      <Image
                        src={"/images/arrow-up-right-circle.svg"}
                        alt={"arrow"}
                        width={56}
                        height={56}
                        className={styles.arrow}
                      />
                    </div>
                    <div className={styles.caption}>Workplace Well-being</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.outer}>
              <div className={styles.card}>
                <div className={styles.bg}></div>
                <Link href={"/solutions/reinforced-learning"}>
                  <div>
                    <div className={styles.imgContainer}>
                      <Image
                        src={"/images/solution1.svg"}
                        alt=""
                        width={200}
                        height={200}
                        className={styles.thumbnail}
                      />
                      <Image
                        src={"/images/arrow-up-right-circle.svg"}
                        alt={"arrow"}
                        width={56}
                        height={56}
                        className={styles.arrow}
                      />
                    </div>
                    <div className={styles.caption}>Reinforced Learning</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.outer}>
              <div className={styles.card}>
                <div className={styles.bg}></div>
                <Link href={"/solutions/collaboration-for-teams"}>
                  <div>
                    <div className={styles.imgContainer}>
                      <Image
                        src={"/images/solution3.svg"}
                        alt=""
                        width={200}
                        height={200}
                        className={styles.thumbnail}
                      />
                      <Image
                        src={"/images/arrow-up-right-circle.svg"}
                        alt={"arrow"}
                        width={56}
                        height={56}
                        className={styles.arrow}
                      />
                    </div>
                    <div className={styles.caption}>
                      Collaboration for Teams
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Slider>
          <div className={styles.sliderIndicator}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default OurSolutions;
