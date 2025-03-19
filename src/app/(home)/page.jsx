import NeedAssistance from "@/components/NeedAssistance/NeedAssistance";
import CtaBlock from "./components/CtaBlock/CtaBlock";
import HighQualityDesigns from "./components/HighQualityDesigns/HighQualityDesigns";
import HomeHero from "./components/HomeHero/HomeHero";
import WeAnimate from "./components/WeAnimate";
import WeCapture from "./components/WeCapture/WeCapture";
import styles from "./page.module.scss";
import useAuthStore from "@/stores/authStore";
import WeDesign from "./components/WeDesign/WeDesign";
import WeSimplify from "./components/WeSimplify/WeSimplify";
import NeedAssistanceNew from "@/components/NeedAssistanceNew/NeedAssistanceNew";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WeSimplify />
      <WeAnimate />
      <WeCapture />
      <WeDesign />
      <CtaBlock />
      <NeedAssistanceNew
        type={"default"}
        background={"/images/home/assist.webp"}
        backgroundMob={"/images/home/assistMob.webp"}
        color={"#fff"}
      />
    </>
  );
}
