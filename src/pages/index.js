import styles from "@/styles/Home.module.scss";
const HomeHeroClient = dynamic(() => import("@/components/Home/Hero"), {
  ssr: false,
});
const WorkforceClient = dynamic(() => import("@/components/Home/Workforce"), {
  ssr: false,
});
import OurSolutions from "@/components/Home/OurSolutions";
import HomeClients from "@/components/Home/Clients";
import HomeBlogs from "@/components/Home/Blogs/inedx";
import HomeValues from "@/components/Home/Values";
import Framework from "@/components/Home/Framework";
import VideoExperience from "@/components/Home/VideoExperience";
import dynamic from "next/dynamic";
import News from "@/components/Home/News";
import { useRouter } from "next/router";
import WorkforceVersion2 from "@/components/Home/WorkforceVersion2";
import Certificate from "@/components/Home/Certificate";
const HomeHeroVersion2 = dynamic(
  () => import("@/components/Home/HeroVersion2"),
  {
    ssr: false,
  },
);

export default function Home() {
  const router = useRouter();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  console.log(router?.query?.version === "2");
  return (
    <div className={styles.wrapper}>
      <div className={styles.mobileView}>
        <HomeHeroVersion2 />
        <WorkforceVersion2 />
      </div>
      <div className={styles.desktopView}>
        <HomeHeroClient />
        <WorkforceClient />
      </div>
      <OurSolutions />
      <Certificate />
      <HomeClients />
      <HomeValues />
      <Framework />
      <VideoExperience />

      <HomeBlogs />
      <News />
    </div>
  );
}
