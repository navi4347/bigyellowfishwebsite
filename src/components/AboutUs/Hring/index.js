import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import axios from "axios";
import Link from "next/link"; // Adjust the path as necessary

const Hiring = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const colors = ["#75B8FF", "#FFC67F", "#AFECE4", "#FFA396"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    async function loadData() {
      try {
        const data = await axios.get(
          "https://wordpress.bigyellowfish.io/wp-json/custom/v1/jobs",
        );
        setJobs(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.wrapper}>
      <Container>
        <h5>Now hiring for</h5>
        <ul className={styles.list}>
          {jobs.map((job, index) => {
            const randomColor = getRandomColor();

            return (
              <Link
                href={job.link}
                target={"_blank"}
                className={styles.card}
                key={index}
              >
                <div className={styles.content}>
                  <div>
                    <div className={styles.title}>{job.title}</div>
                    <p>{job.designation}</p>
                  </div>
                  <a href={job.link}>
                    <Image
                      src={"/images/chevron-right.svg"}
                      alt={"arrow"}
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="138"
                  viewBox="0 0 49 138"
                  fill="none"
                  className={styles.svgDesktop}
                >
                  <path
                    d="M0 0H49V138H0C21.472 84.7171 21.0262 54.6061 0 0Z"
                    fill={randomColor}
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="182"
                  height="24"
                  viewBox="0 0 182 24"
                  fill="none"
                  className={styles.svgMobile}
                >
                  <path
                    d="M182 0L182 24L-1.04907e-06 24L0 -7.95547e-06C70.2716 10.5169 109.983 10.2985 182 0Z"
                    fill={randomColor}
                  />
                </svg>
              </Link>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Hiring;
