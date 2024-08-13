import { useRouter } from "next/router";
import Container from "@/components/Shared/Container";
import styles from "./styles.module.scss";
import Image from "next/image";
import PrimaryButton from "@/components/Shared/Button/Primary";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileSolutionNav, setMobileSolutionNav] = useState(false);
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHover(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      <header className={styles.wrapper}>
        <Container>
          <div className={styles.row}>
            <Link href={"/"}>
              <Image
                src={"/images/Logo.svg"}
                alt={"logo"}
                width={400}
                height={200}
                className={styles.logo}
              />
            </Link>
            <Image
              src={open?"/images/close-cross.svg":"/images/menu.svg"}
              alt={"menu"}
              width={24}
              height={24}
              className={styles.menu}
              onClick={() => setOpen(!open)}
            />
            <ul className={`${styles.navList} ${open ? styles.open : ""}`}>
              <li className={router.pathname === "/" ? styles.active : ""}>
                <Link href="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li
                className={
                  !isMobile && router.pathname.includes("/solutions")
                    ? styles.active
                    : ""
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setMobileSolutionNav(!mobileSolutionNav)}
              >
                Solutions
                <Image
                  src={"/images/chevron-right-grey.svg"}
                  alt={"arrow"}
                  width={24}
                  height={24}
                  className={`${styles.arrow} ${hover || mobileSolutionNav ? styles.active : ""}`}
                />
                <div
                  className={`${styles.mobileSubNav} ${mobileSolutionNav ? styles.open : ""}`}
                >
                  <Link
                    href="/solutions/workplace-wellbeing"
                    className={styles.card}
                    onClick={handleLinkClick}
                  >
                    <Image
                      src={"/images/solution2.svg"}
                      alt=""
                      width={200}
                      height={200}
                      className={styles.thumbnail}
                    />
                    Workplace Well-being
                  </Link>

                  <Link
                    href="/solutions/reinforced-learning"
                    className={styles.card}
                    onClick={handleLinkClick}
                  >
                    <Image
                      src={"/images/solution1.svg"}
                      alt=""
                      width={200}
                      height={200}
                      className={styles.thumbnail}
                    />
                    Reinforced Learning
                  </Link>

                  <Link
                    href="/solutions/collaboration-for-teams"
                    className={styles.card}
                    onClick={handleLinkClick}
                  >
                    <Image
                      src={"/images/solution3.svg"}
                      alt=""
                      width={200}
                      height={200}
                      className={styles.thumbnail}
                    />
                    Collaboration
                  </Link>
                </div>
              </li>
              <li
                className={router.pathname === "/about-us" ? styles.active : ""}
              >
                <Link href="/about-us" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li className={router.pathname === "/blogs" ? styles.active : ""}>
                <Link href="/blogs" onClick={handleLinkClick}>
                  Blogs
                </Link>
              </li>
              <li
                className={router.pathname === "/contact" ? styles.active : ""}
              >
                <Link href="/contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
              <li className={styles.cta}>
                <Link href={"/contact/demo"} onClick={handleLinkClick}>
                  <PrimaryButton>Book a Demo</PrimaryButton>
                </Link>
              </li>
              <div className={styles.details}>
                <div className={styles.title}> Get in touch</div>
                <Link
                  target={"_blank"}
                  href="mailto:connect@bigyellow.io"
                  className={styles.maillink}
                >
                  connect@bigyellow.io
                </Link>
                <div className={styles.social}>
                  {/*<Link href={'/'}>*/}
                  {/*  <Image src={"/images/Instagram.svg"} alt={"insta"} width={24} height={24} />*/}
                  {/*</Link>*/}
                  {/*<Link href={'/'}>*/}
                  {/*  <Image src={"/images/Facebook.svg"} alt={"facebook"} width={24} height={24} />*/}
                  {/*</Link>*/}
                  <Link href={'/'}>
                    <Image src={"/images/Linkedin-solid.svg"} alt={"linkedin"} width={24} height={24} />
                  </Link>
                  {/*<Link href={'/'}>*/}
                  {/*  <Image src={"/images/Twitter.svg"} alt={"twitter"} width={24} height={24} />*/}
                  {/*</Link>*/}
                </div>
              </div>
            </ul>
          </div>
        </Container>
      </header>
      {/*<div className={styles.dummy}></div>*/}
      <AnimatePresence>
        {hover && (
          <motion.div
            className={styles.serviceMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
          >
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li>
                <Link
                  href="/solutions/workplace-wellbeing"
                  className={styles.card}
                  onClick={handleLinkClick}
                >
                  Workplace Well-being
                  <Image
                    src={"/images/solution2.svg"}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.thumbnail}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/reinforced-learning"
                  className={styles.card}
                  onClick={handleLinkClick}
                >
                  Reinforced Learning
                  <Image
                    src={"/images/solution1.svg"}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.thumbnail}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/collaboration-for-teams"
                  className={styles.card}
                  onClick={handleLinkClick}
                >
                  Collaboration
                  <Image
                    src={"/images/solution3.svg"}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.thumbnail}
                  />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
