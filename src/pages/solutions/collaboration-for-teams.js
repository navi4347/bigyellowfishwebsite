import WellbeingHero from "@/components/Wellbeing/Hero";
import WorkWIthUs from "@/components/Solutions/WorkWIthUs";
import FooterBanner from "@/components/FooterBanner";
import SolutionsTextImage from "@/components/Solutions/TextImage";
import SideImageText from "@/components/Solutions/SideImageText";

const ReinforcedLearning = () => {
  const data = {
    heading: "Collaboration",
    subHeading:
      "Building a unified and cohesive culture for your frontline workforce & driving collaboration.",
    bg: "/images/ct-bg.svg",
    sideImgSrc: "/images/ct-side-right.svg",
    bgColor: "linear-gradient(-53deg, #CAE1FF 0%, #B5D5FF 100%)",
    tags: [
      {
        icon: "/images/blue-thumb.svg",
        title: "Trust & Transparency",
      },
      {
        icon: "/images/blue-mic.svg",
        title: "Driving ‘speak up’ culture",
      },
      {
        icon: "/images/blue-phone.svg",
        title: "Last mile connect",
      },
    ],
    knowList: [
      "Close to 51% of your frontline workforce are actively disengaged which poses an exponential risk to your operations.",
      "Workplace behaviours are often contagious & maintaining a unified culture requires an inclusive communication and collaboration strategy.\n",
      "The amount of knowledge your frontline workforce carries from hands on experience seldom finds its way into best practice.",
      "Basic facilitation of touchpoints is proven to drive better retention, lessen the need to retrain and improve the company’s reputation.",
    ],
  };
  return (
    <>
      <WellbeingHero {...data} />
      <SolutionsTextImage
        imgSrc={"/images/ct-mr.png"}
        mobileImgSrc={"/images/mobile-ct-mr.png"}
        text={
          "Build Trust & Transparency by leaning into the ‘Voice of your Workforce’ with our advanced analytics & response management dashboard."
        }
      />
      <SideImageText
        leftImage
        title={"Facilitating a ‘Speak Up’ culture"}
        subtitle={
          "Equip your frontline workforce with communication tools designed to break barriers. Support anonymous and secure sharing of concerns or best practices, respecting internal policies. "
        }
        imgSrc={"/images/ct-sp.png"}
      />
      <SideImageText
        title={"Engage better with Last Mile reach"}
        subtitle={
          "Push contextual communication to the last mile. Monitor indicators that directly impact the operational atmosphere & respond directly to the workforce to instil a sense of belonging."
        }
        imgSrc={"/images/ct-ml.png"}
        bgColor={"#CEE1FA"}
      />
      <SideImageText
        leftImage
        title={"Incentivise positive behaviours & outcomes"}
        subtitle={
          "Drive motivation & satisfaction levers by incentivising positive behaviours transparently. Offer your workforce a gamified experience!"
        }
        imgSrc={"/images/ct-ip.png"}
      />
      <WorkWIthUs bg={"/images/ct-work-with-us.svg"} />
    </>
  );
};
export default ReinforcedLearning;
