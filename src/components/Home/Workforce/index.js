import styles from "./styles.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Workforce = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageSliderRef = useRef();
  const textSliderRef = useRef();
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      if (isMobile) {
        imageSliderRef.current.slickGoTo(next);
      }
    },
  };

  let settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
  };

  const items = Array.from({ length: 4 }, (value, index) => index);

  useEffect(() => {
    let trigger;
    if (typeof window !== "undefined" && !isMobile) {
      trigger = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=300%",
        pin: containerRef.current,
        scrub: true,
        onUpdate: (self) => {
          if (self && self?.progress) {
            const newSlide = Math.floor(self.progress * items.length);
            if (newSlide !== currentSlide) {
              console.log("newSlide", newSlide, items.length - 1);
              if (textSliderRef.current && imageSliderRef.current) {
                textSliderRef.current.slickGoTo(newSlide);
                imageSliderRef.current.slickGoTo(newSlide);
              }
              if (newSlide < items.length - 1) {
                setCurrentSlide(newSlide);
              }
            }
          }
        },
      });
    }

    return () => {
      if (trigger) trigger.kill();
    };
  }, [currentSlide]);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.3 },
  };

  return (
    <div ref={wrapperRef}>
      <div className={styles.wrapper} ref={containerRef}>
        <div className={styles.imageContainer}>
          <Slider {...settings2} ref={imageSliderRef}>
            <div>
              <Image
                src={"/images/workforcemobile1.png"}
                alt={""}
                width={600}
                height={600}
                className={styles.mainMobile}
              />
              <div className={styles.imageWrapper}>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 0 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside1}
                >
                  <Image
                    src={"/images/workforce1side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 0 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside2}
                >
                  <Image
                    src={"/images/workforce2side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 0 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.line1}
                >
                  <Image
                    src={"/images/workforceline1.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                <Image
                  src={"/images/workforce1.png"}
                  alt={""}
                  width={600}
                  height={600}
                  className={styles.mainImg}
                />
              </div>
            </div>
            <div>
              <Image
                src={"/images/workforcemobile2.png"}
                alt={""}
                width={600}
                height={600}
                className={styles.mainMobile}
              />
              <div className={styles.imageWrapper}>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 1 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside3}
                >
                  <Image
                    src={"/images/workforce3side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 1 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside4}
                >
                  <Image
                    src={"/images/workforce4side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>

                {/*Line 2*/}
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 1 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.line2}
                >
                  <Image
                    src={"/images/workforceline2.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>

                <Image
                  src={"/images/workforce2.png"}
                  alt={""}
                  width={600}
                  height={600}
                  className={styles.mainImg}
                />
              </div>
            </div>
            <div>
              <Image
                src={"/images/workforcemobile3.png"}
                alt={""}
                width={600}
                height={600}
                className={styles.mainMobile}
              />
              <div className={styles.imageWrapper}>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 2 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside5}
                >
                  <Image
                    src={"/images/workforce5side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 2 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside6}
                >
                  <Image
                    src={"/images/workforce6side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                {/*Line 3*/}
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 2 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.line3}
                >
                  <Image
                    src={"/images/workforceline3.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>

                <Image
                  src={"/images/workforce3.png"}
                  alt={""}
                  width={600}
                  height={600}
                  className={styles.mainImg}
                />
              </div>
            </div>
            <div>
              <Image
                src={"/images/workforcemobile4.png"}
                alt={""}
                width={600}
                height={600}
                className={styles.mainMobile}
              />
              <div className={styles.imageWrapper}>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 3 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside7}
                >
                  <Image
                    src={"/images/workforce7side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 3 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.workside8}
                >
                  <Image
                    src={"/images/workforce8side.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>

                {/*Line 4*/}
                <motion.div
                  initial="hidden"
                  animate={currentSlide === 3 ? "visible" : "exit"}
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.line4}
                >
                  <Image
                    src={"/images/workforceline4.svg"}
                    alt={"side"}
                    height={210}
                    width={145}
                  />
                </motion.div>
                <Image
                  src={"/images/workforce4.png"}
                  alt={""}
                  width={600}
                  height={600}
                  className={styles.mainImg}
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.content}>
          <motion.div
            className={styles.marker}
            animate={{ borderRadius: currentSlide % 2 ? 30 : 200 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <Slider {...settings} ref={textSliderRef}>
            {/* One*/}
            <div className={styles.text}>
              <div className={styles.heading}>
                Unlock well-being for your workforce
              </div>
              <p>
                Invest in a holistic approach that is preventative, supportive &
                developmental. Build continuous resilience reserves.
              </p>
            </div>
            {/*Two*/}
            <div className={styles.text}>
              <div className={styles.heading}>
                Monitor & manage the balance between job demands & resources
              </div>
              <p>
                Be on top of the imbalances caused by job demands & resources on
                the go and take actions when they matter the most.
              </p>
            </div>
            {/* three*/}
            <div className={styles.text}>
              <div className={styles.heading}>
                Reinforcement learning into the flow of work
              </div>
              <p>
                Empower your workforce at the point of context, just in time,to
                reduce errors & drive efficiencies.
              </p>
            </div>
            {/*Four*/}
            <div className={styles.text}>
              <div className={styles.heading}>
                Drive organisational culture by making your frontline visible &
                audible
              </div>
              <p>
                Build trust & transparency, the culture of 'Speak up' and a
                sense of belonging to establish a sustainable & homogenous
                culture.
              </p>
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
      </div>
    </div>
  );
};

export default Workforce;
