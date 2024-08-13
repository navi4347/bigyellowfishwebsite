import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import PrimaryButton from "@/components/Shared/Button/Primary";

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 50 }}
          className={styles.wrapper}
        >
          <div className={styles.content}>
            <div className={styles.title}>We Value your privacy</div>
            <div className={styles.text}>
              We and our partners use technology such as cookies on our site to
              personalise content and ads, provide social media features, and
              analyse our traffic. Click below to consent to the use of this
              technology across the web. You can change your mind and change
              your consent choices at anytime by returning to this site.
            </div>
          </div>
          <div className={styles.ctaContainer}>
            <PrimaryButton clicked={handleAccept}>Accept all</PrimaryButton>
            <div
              className={styles.secondary}
              onClick={() => setIsVisible(false)}
            >
              Reject all
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cookies;
