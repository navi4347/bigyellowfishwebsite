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

const HomeHeroVersion2 = () => {
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
      <div className={styles.wrap}>
        <div className={styles.content}>
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
                  A Behavioural Risk Management platform at the intersection of
                  People, Process & Technology
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
                  By impacting Safety, Productivity and Well-being, we help you
                  achieve your sustainability goals.
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
          </div>
          <div className={styles.maskedImage}>
            <motion.div
              initial="visible"
              animate={showSecondImage ? "hidden" : "visible"}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/hero-home-mobile-1.png"
                width="639"
                height="629"
                className={styles.innerImages}
                alt={"hero"}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={showSecondImage ? "visible" : "hidden"}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/hero-home-mobile-2.png"
                width="639"
                height="629"
                alt={"hero"}
                className={styles.innerImages}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroVersion2;
