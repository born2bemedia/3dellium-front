import NeedAssistance from "@/components/NeedAssistance/NeedAssistance";
import CtaBlock from "./components/CtaBlock/CtaBlock";
import HighQualityDesigns from "./components/HighQualityDesigns/HighQualityDesigns";
import HomeHero from "./components/HomeHero/HomeHero";
import WeAnimate from "./components/WeAnimate";
import WeCapture from "./components/WeCapture";
import WeDesign from "./components/WeDesign";
import WeSimplify from "./components/WeSimplify";
import styles from "./page.module.scss";
import useAuthStore from "@/stores/authStore";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WeSimplify />
      <WeAnimate />
      <WeCapture />
      <WeDesign />
      <CtaBlock />
      <HighQualityDesigns />
      <NeedAssistance />
    </>
  );
}
