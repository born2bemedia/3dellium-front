import React from "react";
import Link from "next/link";
import IdeasHero from "./components/IdeasHero/IdeasHero";
import IdeasLoop from "./components/IdeasLoop/IdeasLoop";
import ShopAssistance from "../(shop)/components/ShopAssistance/ShopAssistance";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { CACHE_TAG_IDEAS } from "@/helpers/constants";

export const metadata = {
  title: "Guides & Insights on 3D, Animation, UI/UX & Video | 3Dellium",
  description:
    "Explore expert insights, tutorials, and guides on 3D modeling, animation, video production, and UI/UX design. Learn, create, and innovate.",
  openGraph: {
    title: "Guides & Insights on 3D, Animation, UI/UX & Video | 3Dellium",
    description:
      "Explore expert insights, tutorials, and guides on 3D modeling, animation, video production, and UI/UX design. Learn, create, and innovate.",
    images: "https://3dellium.com/images/meta.png",
  },
};

async function getIdeas() {
  const data = await fetchFromAPI("/api/ideas", {
    tag: CACHE_TAG_IDEAS,
  });
  return (data.docs || []).reverse();
}

const IdeasPage = async () => {
  const ideas = await getIdeas();

  return (
    <>
      <IdeasHero />
      <IdeasLoop ideas={ideas} />
      <ShopAssistance />
    </>
  );
};

export default IdeasPage;
