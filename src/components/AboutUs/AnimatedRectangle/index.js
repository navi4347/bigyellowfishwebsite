// components/AnimatedRectangle.js
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedRectangle = ({ scrollContainerRef }) => {
  const scrollY = useMotionValue(0);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const borderRadius = useTransform(scrollY, [0, 500, 1000], [0, 732, 0]);
  const background = useTransform(
    scrollY,
    [0, 500, 1000],
    [
      "linear-gradient(to bottom right, #FF9631 0%, #FFC083 32%, #6DABFF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FF9631 0%, #FFC083 32%, #6DABFF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FF9631 0%, #FFC083 32%, #6DABFF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FF9631 0%, #FFC083 32%, #6DABFF 50%) top right / 50% 50% no-repeat",
      "linear-gradient(to bottom right, #FF5733 0%, #FFC133 32%, #6DAF33 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FF5733 0%, #FFC133 32%, #6DAF33 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FF5733 0%, #FFC133 32%, #6DAF33 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FF5733 0%, #FFC133 32%, #6DAF33 50%) top right / 50% 50% no-repeat",
      "linear-gradient(to bottom right, #FF9631 0%, #FFC083 32%, #6DABFF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FF9631 0%, #FFC083 32%, #6DABFF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FF9631 0%, #FFC083 32%, #6DABFF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FF9631 0%, #FFC083 32%, #6DABFF 50%) top right / 50% 50% no-repeat",
    ],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        scrollY.set(scrollContainerRef.current.scrollTop);
      }
    };

    const scrollElement = scrollContainerRef.current;
    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef, scrollY]);

  return (
    <motion.div
      style={{
        rotate,
        borderRadius,
        background,
        width: 200,
        height: 200,
        opacity: 0.2,
        transition: "all 0.5s ease",
      }}
    />
  );
};

export default AnimatedRectangle;
