import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import MoreButton from "@/components/MoreButton/MoreButton";
import createMetadata from "@/helpers/metadata";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { renderBlock } from "@/helpers/renderBlock";

const CACHE_TAG_IDEAS = "policies";

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
  const data = await fetchFromAPI("/api/policies", {
    query: `where[slug][equals]=${slug}`,
    cache: "no-store",
  });
  return data?.docs?.length > 0 ? data.docs[0] : null;
}

const ArticlePage = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const idea = await getIdeaBySlug(slug);

  if (!idea) {
    return <p>Idea not found.</p>;
  }

  return (
    <>
      <section className={styles.articleWrap}>
        <div className="_container" style={{ padding: "20px" }}>
          <div className={styles.body}>
            <div className={styles.content}>
              <h1>{idea.title}</h1>
              {idea.content.root.children.map((block, index) =>
                renderBlock(block, index)
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
