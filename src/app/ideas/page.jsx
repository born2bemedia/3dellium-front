import React from "react";
import Link from "next/link";
import IdeasHero from "./components/IdeasHero/IdeasHero";
import IdeasLoop from "./components/IdeasLoop/IdeasLoop";
import ShopAssistance from "../(shop)/components/ShopAssistance/ShopAssistance";
import fetchFromAPI from "@/helpers/fetchFromAPI";

const CACHE_TAG_IDEAS = "ideas";

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
