import AboutUsHero from "@/components/AboutUs/Hero";
import AboutUsFounders from "@/components/AboutUs/Founders";
import Team from "@/components/AboutUs/Team";
import OurPartners from "@/components/Home/OurPartners";
import Clients from "@/components/Home/Clients";
import TeamValues from "@/components/AboutUs/Values";
import AboutUsBanner from "@/components/AboutUs/Banner";
import FooterBanner from "@/components/FooterBanner";
import styles from "@/styles/about.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Hiring from "@/components/AboutUs/Hring";
import Safety from "@/components/AboutUs/Safety";

const AboutUs = () => {
  const ref = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const inViewStates = sectionRefs.map((ref) =>
    useInView(ref, { margin: "-20% 0px" }),
  );
  const currentViewIndex = inViewStates.findIndex((state) => state);

  const animations = [
    {
      top: isMobile ? "-100px" : "-50vh",
      width: isMobile ? "550px" : "80vw",
      height: isMobile ? "550px" : "80vw",
      borderRadius: "100%",
      rotate: 0,
      opacity: 1,
      background:
        "linear-gradient(rgb(255, 192, 131) 0%, rgb(255, 192, 131) 64%, rgb(144, 189, 249) 100%)",
    },
    {
      top: "20%",
      width: "430px",
      height: "430px",
      borderRadius: "100%",
      rotate: 0,
      opacity: 0.2,
      background:
        "linear-gradient(180deg, #FFC083 0%, #FFC083 64%,#90BDF9 100%)",
    },

    {
      top: "20%",
      width: "430px",
      height: "430px",
      borderRadius: "100%",
      rotate: 0,
      opacity: 0.2,
      background:
        "linear-gradient(-90deg, #FFC083 0%, #FFC083 64%,#90BDF9 100%)",
    },
    {
      top: "20%",
      width: "60%",
      height: "50%",
      borderRadius: "732px",
      rotate: "38deg",
      opacity: 0.2,
      background:
        "linear-gradient(-130deg, #FFC083 0%, #FFC083 64%,#90BDF9 100%)",
    },
    {
      top: "20%",
      width: "60vw",
      height: "60vw",
      borderRadius: "100%",
      rotate: "0deg",
      opacity: 0.2,
      background:
        "linear-gradient(-130deg, #FFC083 0%, #FFC083 64%,#90BDF9 100%)",
    },
    {
      top: "0%",
      width: "70vh",
      height: "70vh",
      borderRadius: "100%",
      rotate: 0,
      opacity: 0.2,
      background:
        "linear-gradient(180deg, #FFC083 0%, #FFC083 64%,#90BDF9 100%)",
    },

    {
      top: "0%",
      width: "70vh",
      height: "70vh",
      borderRadius: "100%",
      rotate: 0,
      opacity: 0.2,
      background:
        "linear-gradient(180deg, #FFC083 0%, #FFC083 64%,#90BDF9 100%)",
    },
    {
      top: "0%",
      width: "100%",
      height: "100%",
      borderRadius: "0",
      rotate: 0,
      opacity: 0.4,
      background: "linear-gradient(180deg, #FF9631 , #FFC083, #6DABFF)",
    },
  ];
  console.log(animations)

  const animation = animations[currentViewIndex] || animations[0];

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.rectangle}
          style={{
            top: animation.top,
            width: animation.width,
            height: animation.height,
            borderRadius: animation.borderRadius,
            rotate: animation.rotate,
            background: animation.background,
            opacity: animation.opacity,
          }}
        />
      </div>
      <div ref={sectionRefs[0]}>
        <AboutUsHero />
      </div>
      <div ref={sectionRefs[1]}>
        <Safety />
      </div>
      <div ref={sectionRefs[2]}>
        <AboutUsFounders />
      </div>
      <div ref={sectionRefs[3]}>
        <Team />
      </div>
      <div ref={sectionRefs[4]}>
        <Hiring />
      </div>
      <div ref={sectionRefs[5]}>
        <AboutUsBanner />
      </div>
      <div ref={sectionRefs[6]}>
        <Clients grid={true} />
      </div>
      <div ref={sectionRefs[7]}>
        <TeamValues />
      </div>
    </div>
  );
};

export default AboutUs;
