import HomeHero from "./components/HomeHero";
import WeAnimate from "./components/WeAnimate";
import WeCapture from "./components/WeCapture";
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
    </>
  );
}
