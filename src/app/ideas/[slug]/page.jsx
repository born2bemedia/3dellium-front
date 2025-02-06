import ShopAssistance from "@/app/(shop)/components/ShopAssistance/ShopAssistance";
import React from "react";
import styles from "./page.module.scss";
import SingleIdeaHero from "../components/SingleIdeaHero/SingleIdeaHero";
import Link from "next/link";
import MoreButton from "@/components/MoreButton/MoreButton";
import Image from "next/image";
import createMetadata from "@/helpers/metadata";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { API_URL, CACHE_TAG_IDEAS } from "@/helpers/constants";
import { renderBlock } from "@/helpers/renderBlock";

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const idea = await getIdeaBySlug(slug);

  if (!idea) {
    return {
      title: "Idea Not Found",
    };
  }

  return createMetadata({
    title: idea.title,
    description: idea.description,
    imageUrl: idea.image?.url,
  });
}

export async function getIdeaBySlug(slug) {
  const data = await fetchFromAPI("/api/ideas", {
    query: `where[slug][equals]=${slug}`,
    tag: CACHE_TAG_IDEAS,
  });
  return data?.docs?.length > 0 ? data.docs[0] : null;
}

async function getIdeas(slug) {
  const data = await fetchFromAPI("/api/ideas", {
    tag: CACHE_TAG_IDEAS,
  });
  const ideas = data.docs || [];
  const filteredIdeas = ideas.filter((idea) => idea.slug !== slug);

  return filteredIdeas;
}

const ArticlePage = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const idea = await getIdeaBySlug(slug);
  const ideas = await getIdeas(slug);

  if (!idea) {
    return <p>Idea not found.</p>;
  }

  const imageUrl = idea.image?.url
    ? `${API_URL}${idea.image.url}`
    : "/images/ideas/hero.png";

  return (
    <>
      <SingleIdeaHero image={imageUrl} />
      <section className={styles.articleWrap}>
        <div className="_container" style={{ padding: "20px" }}>
          <div className={styles.body}>
            <div className={styles.content}>
              <h1>{idea.title}</h1>
              {idea.content.root.children.map((block, index) =>
                renderBlock(block, index)
              )}
              <div className={styles.buttons}>
                <Link href={"/ideas"}>Back to Ideas</Link>
                <MoreButton text={"Explore 3D Models"} link={"/3d-modelling"} />
              </div>
            </div>
            <div className={styles.sidebar}>
              {ideas.map((idea, index) => (
                <Link href={`/ideas/${idea.slug}`} key={index}>
                  <Image
                    width={235}
                    height={156}
                    src={`${API_URL}${idea.image?.url}`}
                    alt={idea.title}
                  />
                  <span>{idea.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ShopAssistance />
    </>
  );
};

export default ArticlePage;
