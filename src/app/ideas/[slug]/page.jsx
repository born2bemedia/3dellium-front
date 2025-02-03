import ShopAssistance from "@/app/(shop)/components/ShopAssistance/ShopAssistance";
import React from "react";
import styles from "./page.module.scss";
import SingleIdeaHero from "../components/SingleIdeaHero/SingleIdeaHero";
import Link from "next/link";
import MoreButton from "@/components/MoreButton/MoreButton";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const CACHE_TAG_IDEAS = "ideas";

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const idea = await getIdeaBySlug(slug);

  if (!idea) {
    return {
      title: "Idea Not Found",
    };
  }

  return {
    title: `${idea.title} | 3Dellium`,
    description: idea.description || "", // Ensure description is present
    openGraph: {
      title: `${idea.title} | 3Dellium`,
      description: idea.description || "",
      images: idea.image?.url
        ? [{ url: idea.image.url, width: 800, height: 600 }]
        : [],
    },
  };
}

async function getIdeaBySlug(slug) {
  try {
    const response = await fetch(
      `${API_URL}/api/ideas?where[slug][equals]=${slug}`,
      {
        cache: "force-cache",
        next: { tags: [CACHE_TAG_IDEAS] },
      }
    );
    const data = await response.json();

    return data.docs.length > 0 ? data.docs[0] : null;
  } catch (error) {
    console.error("Error fetching idea:", error);
    return null;
  }
}

async function getIdeas(slug) {
  try {
    const response = await fetch(`${API_URL}/api/ideas`, {
      cache: "force-cache",
      next: { tags: [CACHE_TAG_IDEAS] },
    });
    const data = await response.json();
    const ideas = data.docs || [];
    const filteredIdeas = ideas.filter((idea) => idea.slug !== slug);

    return filteredIdeas;
  } catch (error) {
    console.error("Error fetching ideas:", error);
    return [];
  }
}

const ArticlePage = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const idea = await getIdeaBySlug(slug);
  const ideas = await getIdeas(slug);

  console.log(idea);


  if (!idea) {
    return <p>Idea not found.</p>;
  }

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} style={{ fontSize: "16px", marginBottom: "16px" }}>
            {block.children.map((child, i) =>
              child.format === 1 ? (
                <strong key={i}>{child.text}</strong>
              ) : (
                child.text
              )
            )}
          </p>
        );
      case "heading":
        return (
          <h2
            key={index}
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "36px",
            }}
          >
            {block.children.map((child) => child.text).join(" ")}
          </h2>
        );
      case "list":
        return (
          <ul key={index} style={{ marginBottom: "16px", paddingLeft: "20px" }}>
            {block.children.map((item, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {item.children.map((child) => child.text).join(" ")}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

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
                <MoreButton
                  text={"Explore 3D Models"}
                  link={"Explore 3D Models"}
                />
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
