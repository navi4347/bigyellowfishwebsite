import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";

const VideoExperience = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/Pcp4lkpquMs?rel=0&controls=0");

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          threshold: 0.5,
        }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      setVideoSrc("https://www.youtube.com/embed/Pcp4lkpquMs?rel=0&controls=0&autoplay=1");
    } else {
      setVideoSrc("https://www.youtube.com/embed/Pcp4lkpquMs?rel=0&controls=0");
    }
  }, [isInView]);

  return (
      <Container>
        <div className={styles.wrapper} ref={videoRef}>
          <iframe
              width="560"
              height="315"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </Container>
  );
};

export default VideoExperience;
