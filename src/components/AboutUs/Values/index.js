import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";

const TeamValues = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-50% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const data = [
    {
      name: "Empathy",
      image: "/images/empathy-bg.svg",
    },
    {
      name: "Optimism",
      image: "/images/optimism.svg",
    },
    {
      name: "Innovation",
      image: "/images/innovation-bg.svg",
    },
    {
      name: "Simplicity",
      image: "/images/simplicity-bg.svg",
    },
    {
      name: "Honesty",
      image: "/images/honesty-bg.svg",
    },
    {
      name: "Responsiveness",
      image: "/images/responsiveness-bg.svg",
    },
  ];

  const circleVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: (direction) => ({
      opacity: 1,
      x: direction === "left" ? 100 : -100,
      transition: { duration: 0.7 },
    }),
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div
        className={styles.leftCircle}
        initial="hidden"
        animate={controls}
        custom="left"
        variants={circleVariants}
      />
      <motion.div
        className={styles.rightCircle}
        initial="hidden"
        animate={controls}
        custom="right"
        variants={circleVariants}
      />
      <Container>
        <h5 className={styles.title}>Our Values</h5>
        <ul className={styles.list}>
          {data.map((item, index) => {
            return (
              <li className={styles.card} key={index}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={350}
                  height={150}
                />
                <div className={styles.text}>{item.name}</div>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default TeamValues;
