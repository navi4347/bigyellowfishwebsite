import WellbeingHero from "@/components/Wellbeing/Hero";
import WorkWIthUs from "@/components/Solutions/WorkWIthUs";
import FooterBanner from "@/components/FooterBanner";
import SolutionsTextImage from "@/components/Solutions/TextImage";
import SideImageText from "@/components/Solutions/SideImageText";

const ReinforcedLearning = () => {
  const data = {
    heading: "Reinforced Learning",
    subHeading:
      "Integrating learning into the flow of work and at the point of context, just at the right time.",
    bg: "/images/rl-bg.svg",
    bgColor:
      "linear-gradient(-53deg, rgba(168, 244, 229, 0.62) 0%, #3bdcc5 100%)",
    sideImgSrc: "/images/rl-side-right.svg",
    tags: [
      {
        icon: "/images/rl-tool.svg",
        title: "DIY Capabilities",
      },
      {
        icon: "/images/puzzle.svg",
        title: "Gamified Templates",
      },
      {
        icon: "/images/book.svg",
        title: "Bite-sized Learning",
      },
    ],
    knowList: [
      "Humans are built to consume and retain information in small bites. This is an inherent feature and not a 'bug' amongst 80% of adults.",
      "Research has proven that peak retention of knowledge happens at the time or day when the training ends. After that it a continuous forgetting process as depicted in the ‘forgetting curve’.",
      "Short bite-sized reiteration of learnings of 3 to 7 minutes of bursts at the right point of time is 90% more effective than long-form learning.",
      "Organisations that have integrated learning into the flow of work have gained 25%+ ROI year on year.",
    ],
  };
  return (
    <>
      <WellbeingHero {...data} />
      <SolutionsTextImage
        imgSrc={"/images/mla.png"}
        mobileImgSrc={"/images/mobile-mla.png"}
        text={
          "Gain insights on effectiveness, identify learning gaps & monitor continuous progress with the advanced analytics dashboard."
        }
      />
      <SideImageText
        leftImage
        title={"Gamified microlearning in a non-intrusive & effective way"}
        subtitle={
          "         Continuous performance & productivity enhancements with effective bite-sized   learnings. Making learning fun, effective & outcome-focused."
        }
        imgSrc={"/images/rl-rp.png"}
      />
      <SideImageText
        title={
          "Customise & push learnings as reinforcements to reduce human errors"
        }
        subtitle={
          "Transform your company-specific learnings into gamified templates, democratising shared knowledge & pushing it to the right audience at the right time for the proper context."
        }
        imgSrc={"/images/rl-cl.png"}
        bgColor={"#B9FFF5"}
      />
      <SideImageText
        leftImage
        title={"Create personalised Assessments & Surveys"}
        subtitle={
          "Leverage our platform's 'DIY' capabilities to push surveys, assessments, emergency alerts, and broadcast messages to the last-mile workforce."
        }
        imgSrc={"/images/rl-quiz.png"}
      />
      <WorkWIthUs bg={"/images/rl-work-with-us.svg"} />
    </>
  );
};
export default ReinforcedLearning;
