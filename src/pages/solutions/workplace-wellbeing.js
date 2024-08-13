import WellbeingHero from "@/components/Wellbeing/Hero";
import Framework from "@/components/Wellbeing/Framework";
import SolutionsTextImage from "@/components/Solutions/TextImage";
import SideImageText from "@/components/Solutions/SideImageText";
import WorkWIthUs from "@/components/Solutions/WorkWIthUs";
import DemoBanner from "@/components/DemoBanner";
import FooterBanner from "@/components/FooterBanner";

const SolutionsWellbeing = () => {
  const data = {
    heading: "Workplace Well-being",
    subHeading:
      "Optimize employee well-being and productivity using our customised and gamified well-being solution.",
    bg: "/images/wellbeing-bg.svg",
    bgColor:
      "linear-gradient(130deg,#FF9631 0%, #FFC083 37%, rgba(109, 171, 255, 0.13) 100%)",
    sideImgSrc: "/images/wellbeing-side-right.svg",
    tags: [
      {
        icon: "/images/phone.svg",
        title: "Preventative",
      },
      {
        icon: "/images/tool.svg",
        title: "Developmental",
      },
      {
        icon: "/images/link.svg",
        title: "Supportive",
      },
    ],

    knowList: [
      "Over 33% of the factors affecting workplace well-being are variables that can be controlled!",
      "‘Emergency Support’ is often seen as a last resort, yet historically, no more than 4% to 6% of an organization's workforce globally has utilised it.",
      "66% of the workforce requires either “supportive” or “developmental” well-being assistance.",
      "Poor mental health among employees is estimated to cost the global economy around $1 trillion per year in lost productivity.",
    ],
  };
  return (
    <>
      <WellbeingHero {...data} />
      <Framework />
      <SolutionsTextImage
        imgSrc={"/images/hpi.png"}
        mobileImgSrc={"/images/mobile-hpi.png"}
        text={
          "Advanced Management Analytics Dashboard that provides deeper situational awareness, monitors behavioral risks, alerts early warning signals and provides recommendations as decision support mechanism."
        }
      />
      <SideImageText
        leftImage
        title={
          "Understand the base-line states across key critical variables that impact well-being at the workplace."
        }
        subtitle={
          "Start with a deeper understanding of the overall state of well-being and the impact of imbalances between Job Demand & Resources, quantify it and witness how the platform helps move the needle."
        }
        imgSrc={"/images/ate.png"}
      />
      <SideImageText
        title={"Leveraging evidence-based interventions"}
        subtitle={
          "Build resilience and engage your crew via Cognitive games, Curated micro-learnings, Mindfulness meditations, soundscapes and Nutrition tips."
        }
        imgSrc={"/images/leb.png"}
        bgColor={"#FFF6EE"}
      />{" "}
      <SideImageText
        leftImage
        title={"On-Demand Support"}
        subtitle={
          "Round-the-clock access to trained Psychologists & Expert Nutritionists over smooth, confidential chat-based counselling sessions for any concerns."
        }
        imgSrc={"/images/w-od.png"}
      />{" "}
      <SideImageText
        title={"Last mile Orientation via Gamified Microlearning"}
        subtitle={
          "Equipping the last mile with continuous orientation & knowledge building via fun & gamified microlearning on a broad range of well-being topics. Tailored for quick, easy and contextual learning."
        }
        imgSrc={"/images/mhn.png"}
        bgColor={"#FFF6EE"}
      />
      <WorkWIthUs bg={"/images/work-with-us.svg"} />
    </>
  );
};
export default SolutionsWellbeing;
