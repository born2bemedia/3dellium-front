import React from "react";
import Link from "next/link";
import IdeasHero from "./components/IdeasHero/IdeasHero";
import IdeasLoop from "./components/IdeasLoop/IdeasLoop";
import ShopAssistance from "../(shop)/components/ShopAssistance/ShopAssistance";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const CACHE_TAG_IDEAS = "ideas";

async function getIdeas() {
  try {
    const response = await fetch(`${API_URL}/api/ideas`, {
      cache: "force-cache",
      next: { tags: [CACHE_TAG_IDEAS] },
    });
    const data = await response.json();
    return (data.docs || []).reverse();
  } catch (error) {
    console.error("Error fetching ideas:", error);
    return [];
  }
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
