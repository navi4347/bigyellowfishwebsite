import styles from "./styles.module.scss";
import Image from "next/image";
import Container from "@/components/Shared/Container";
const Team = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const data = [
    {
      name: "Abhishek Sarkar",
      designation: "Content Manager",
      image: "/images/abhishek-s.png",
      color: "#9DC3F6",
    },
    {
      name: "Akash Shukla",
      designation: "Full Stack Developer",
      image: "/images/akash-s.png",
      color: "#FFD18D",
    },
    {
      name: "Amarjeet Ray",
      designation: "Software Engineer",
      image: "/images/amarjeet-r.png",
      color: "#AFECE4",
    },
    {
      name: "Anna Varghese",
      designation: "Well-being Manager",
      image: "/images/anna-t.png",
      color: "#FFC083",
    },
    {
      name: "Arunachalam Lakshmanan",
      designation: "IT Manager",
      image: "/images/arunachalam-l.png",
      color: "#FFA092",
    },
    {
      name: "Asha Rani",
      designation: "Accounts Executive",
      image: "/images/asha-r.png",
      color: "#9DC3F6",
    },
    {
      name: "Ashwini Sagar",
      designation: "Software Engineer",
      image: "/images/ashwini-s.png",
      color: "#FFD18D",
    },
    {
      name: "Asif Patel",
      designation: "Backend Developer",
      image: "/images/asif-p.png",
      color: "#AFECE4",
    },
    {
      name: "Astin Johnson",
      designation: "Software Engineer",
      image: "/images/astit-t.png",
      color: "#FFC083",
    },
    {
      name: "Aswathy Thankappan",
      designation: "QA Engineer",
      image: "/images/aswathy-t.png",
      color: "#FFA092",
    },
    {
      name: "Basil Chacko Mathew",
      designation: "Data Scientist",
      image: "/images/basil-t.png",
      color: "#9DC3F6",
    },
    {
      name: "Binoy T V",
      designation: "Senior Software Engineer",
      image: "/images/binoy-t.png",
      color: "#FFD18D",
    },
    {
      name: "Harshitha",
      designation: "Client Success Associate",
      image: "/images/harshitha-t.png",
      color: "#AFECE4",
    },
    {
      name: "Jasleen Kaur",
      designation: "Counselling Psychologist",
      image: "/images/jasleen-k.png",
      color: "#FFC083",
    },
    {
      name: "Jatin Baghel",
      designation: "Senior Product Designer",
      image: "/images/jatin-b.png",
      color: "#FFA092",
    },
    {
      name: "Kirti Dagar",
      designation: "Head of Content - Nutritionist and Lifestyle specialist",
      image: "/images/kirti-d.png",
      color: "#9DC3F6",
    },
    {
      name: "Kundan Krishna",
      designation: "Chief Technology Architect",
      image: "/images/kundan-t.png",
      color: "#FFD18D",
    },
    {
      name: "Manjushree Chancasana",
      designation: "Content Manager",
      image: "/images/manjushree-c.png",
      color: "#AFECE4",
    },
    {
      name: "Maria Henrietta Theyos",
      designation: "Head-Client Success",
      image: "/images/maria-t.png",
      color: "#FFC083",
    },
    {
      name: "Neelima Dwivedi",
      designation: "Head of PR",
      image: "/images/neha-d.png",
      color: "#FFA092",
    },
    {
      name: "Neha Kumari",
      designation: "Senior Client Success Associate",
      image: "/images/neha-k.png",
      color: "#9DC3F6",
    },
    {
      name: "Pooja Poonacha",
      designation: "HR Manager",
      image: "/images/pooja-p.png",
      color: "#FFD18D",
    },
    {
      name: "Pratap Pudi",
      designation: "VP Business Operations & Quality Managment",
      image: "/images/pratap-t.png",
      color: "#AFECE4",
    },
    {
      name: "Priyanka Lingitta Ramesh",
      designation: "Client Relationship Manager",
      image: "/images/priyanka-t.png",
      color: "#FFC083",
    },
    {
      name: "Rachana Menon",
      designation: "Counselling Psychologist",
      image: "/images/rachana-m.png",
      color: "#FFA092",
    },
    {
      name: "Ram Krishna Kumar",
      designation: "Director - Growth & Partnerships",
      image: "/images/ram-k.png",
      color: "#9DC3F6",
    },
    {
      name: "Reshma Sivashankar",
      designation: "Domain Expert - Psychology",
      image: "/images/reshma-s.png",
      color: "#FFD18D",
    },
    {
      name: "Rimpa Sarkar",
      designation: "Senior Business Analyst",
      image: "/images/rimpa-s.png",
      color: "#AFECE4",
    },
    {
      name: "Rohan Dhareshwar",
      designation: "VP - Global Business Delivery",
      image: "/images/rohan-d.png",
      color: "#FFC083",
    },
    {
      name: "Sai Dharwadkar",
      designation: "Senior Client Account Manager",
      image: "/images/sai-d.png",
      color: "#FFA092",
    },
    {
      name: "Sandeep A C",
      designation: "Senior Business Analyst",
      image: "/images/sandeep-t.png",
      color: "#9DC3F6",
    },
    {
      name: "Shantanu Murti",
      designation: "Head of Corporate Finance & Strategy",
      image: "/images/shantanu-t.png",
      color: "#FFD18D",
    },
    {
      name: "Shivang Joshi",
      designation: "Head of Design",
      image: "/images/shivang-j.png",
      color: "#AFECE4",
    },
    {
      name: "Shraddha Ramakrishnan",
      designation: "Graphic Designer",
      image: "/images/shraddha-t.png",
      color: "#FFC083",
    },
    {
      name: "Sumit Ujjwal",
      designation: "Backend Developer",
      image: "/images/sumit-u.png",
      color: "#FFA092",
    },
    {
      name: "Varsha Purnesh",
      designation: "VP Product",
      image: "/images/varsha-p.png",
      color: "#9DC3F6",
    },
    {
      name: "Vasudha Gandikota",
      designation: "Client Success Associate",
      image: "/images/vasudha-g.png",
      color: "#FFD18D",
    },
    {
      name: "Vishwanath Gollakota",
      designation: "Chief Revenue Officer",
      image: "/images/vishwanath-g.png",
      color: "#AFECE4",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container>
        <h5>Our Team</h5>
        <Image
          src={"/images/divider-globe.svg"}
          alt={""}
          width={150}
          height={150}
          className={styles.divider}
        />
        <div className={styles.listCountry}>
          Bengaluru • Singapore • Norway • Hong Kong
        </div>

        <ul
          className={styles.teamList}
          style={
            isMobile
              ? { gridTemplateColumns: `repeat(${data.length / 2}, 1fr)` }
              : {}
          }
        >
          {data.map((item, key) => {
            return (
              <li className={styles.card} key={key}>
                <div
                  className={styles.imageContainer}
                  style={{ background: item.color }}
                >
                  <Image
                    src={item.image}
                    alt={"maria-t"}
                    width={360}
                    height={370}
                    className={styles.image}
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.designation}>{item.designation}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};
export default Team;
