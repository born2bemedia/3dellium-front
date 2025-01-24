import HomeHero from "./components/HomeHero";
import styles from "./page.module.scss";
import useAuthStore from "@/stores/authStore";

export default function Home() {
  return (
    <>
      <HomeHero />
    </>
  );
}
