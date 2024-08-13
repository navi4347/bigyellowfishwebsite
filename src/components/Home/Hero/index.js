"use client";
import Container from "@/components/Shared/Container";
import styles from "./styles.module.scss";
import PrimaryButton from "@/components/Shared/Button/Primary";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import ScrollMagic from "scrollmagic";
import Lottie from "react-lottie-player";
import animationData from "../../../../public/lottie/Tachometer-02.json";
import Link from "next/link";

const HomeHero = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(1);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollY > 400) {
      setShowSecondImage(true);
      setAnimationDirection(1);
      if (playAnimation === false) {
        setPlayAnimation(true);
      }
    } else {
      setAnimationDirection(-1);
      setShowSecondImage(false);
    }
  }, [scrollY]);

  useEffect(() => {
    let controller;
    let scene;
    if (typeof window !== "undefined") {
      controller = new ScrollMagic.Controller();
      scene = new ScrollMagic.Scene({
        triggerElement: containerRef.current,
        triggerHook: 0,
        duration: "100%",
      })
        .setPin(containerRef.current)
        .addTo(controller);
    }
    return () => {
      scene.destroy(true);
      controller.destroy(true);
    };
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const bgVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100%" },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <AnimatePresence>
        {showSecondImage && (
          <motion.div
            className={styles.bg}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={bgVariants}
            transition={{ duration: 0.5 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <AnimatePresence>
              {!showSecondImage && (
                <div className={styles.headingContainer}>
                  <motion.h1
                    key="heading1"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={headingVariants}
                    transition={{ duration: 0.5 }}
                  >
                    Amplify human performance & sustainability
                  </motion.h1>
                </div>
              )}
              {showSecondImage && (
                <div className={styles.headingContainer}>
                  <motion.h1
                    key="heading2"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={headingVariants}
                    transition={{ duration: 0.5 }}
                  >
                    Quantify Behavioral Risks into a Performance Index Score
                  </motion.h1>
                </div>
              )}

              {!showSecondImage && (
                <div className={styles.subHeadingContainer}>
                  <motion.p
                    key="subheading1"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={headingVariants}
                    transition={{ duration: 0.5 }}
                  >
                    A Behavioural Risk Management platform at the intersection
                    of People, Process & Technology
                  </motion.p>
                </div>
              )}
              {showSecondImage && (
                <div className={styles.subHeadingContainer}>
                  <motion.p
                    key="subheading2"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={headingVariants}
                    transition={{ duration: 0.5 }}
                  >
                    By impacting Safety, Productivity and Well-being, we help
                    you achieve your sustainability goals.
                  </motion.p>
                </div>
              )}
            </AnimatePresence>
            <div className={styles.ctaContainer}>
              <Link href={"/contact/demo"}>
                <PrimaryButton>
                  <div className={styles.cta}>
                    Book a Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </PrimaryButton>
              </Link>
            </div>
          </div>
          <div className={styles.rightImage}>
            <div className={styles.chartSection}>
              <Lottie
                loop={false}
                animationData={animationData}
                play={playAnimation}
                direction={animationDirection}
                style={{ width: "100%", height: "100%" }}
              />
              {/*<AnimatePresence>*/}
              {/*  {!showSecondImage && (*/}
              {/*    <motion.img*/}
              {/*      key={"tech1"}*/}
              {/*      src="/images/tachomoter1.svg"*/}
              {/*      alt=""*/}
              {/*      initial="hidden"*/}
              {/*      animate="visible"*/}
              {/*      exit="exit"*/}
              {/*      variants={headingVariants}*/}
              {/*      transition={{ duration: 0.5 }}*/}
              {/*      className={styles.single}*/}
              {/*      width={150}*/}
              {/*    />*/}
              {/*  )}*/}
              {/*  {showSecondImage && (*/}
              {/*    <motion.img*/}
              {/*      key={"tech2"}*/}
              {/*      src="/images/tachomoter2.svg"*/}
              {/*      alt=""*/}
              {/*      initial="hidden"*/}
              {/*      animate="visible"*/}
              {/*      exit="exit"*/}
              {/*      variants={headingVariants}*/}
              {/*      transition={{ duration: 0.5 }}*/}
              {/*      width={150}*/}
              {/*      className={styles.single}*/}
              {/*    />*/}
              {/*  )}*/}
              {/*</AnimatePresence>*/}
            </div>
            <svg
              width="639"
              height="629"
              viewBox="0 0 639 629"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.maskedImage}
            >
              <defs>
                <mask id="image-mask" maskUnits="userSpaceOnUse">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 21C0 9.40203 9.40202 0 21 0H399C410.598 0 420 9.40202 420 21V140C420 151.046 428.954 160 440 160H618C629.598 160 639 169.402 639 181V523C639 534.598 629.598 544 618 544H530C518.954 544 510 552.954 510 564V608C510 619.598 500.598 629 489 629H82C70.402 629 61 619.598 61 608V523V512V254C61 242.954 52.0457 234 41 234H21C9.40203 234 0 224.598 0 213V21Z"
                    fill="white"
                  />
                </mask>
              </defs>
              <g mask="url(#image-mask)">
                <motion.image
                  href="/images/home-hero-main.png"
                  width="639"
                  height="629"
                  initial="visible"
                  animate={showSecondImage ? "hidden" : "visible"}
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                />
                <motion.image
                  href="/images/home-hero-second.png"
                  width="639"
                  height="629"
                  initial="hidden"
                  animate={showSecondImage ? "visible" : "hidden"}
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                />
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
