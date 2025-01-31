import React from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const CACHE_TAG_IDEAS = "ideas";

async function getIdeas() {
  try {
    const response = await fetch(`${API_URL}/api/ideas`, {
      cache: "force-cache",
      next: { tags: [CACHE_TAG_IDEAS] },
    });
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching ideas:", error);
    return [];
  }
}

const IdeasPage = async () => {
  const ideas = await getIdeas();

  return (
    <div className="_container" style={{ padding: "20px" }}>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "600",
          marginBottom: "30px",
          marginTop: "50px",
        }}
      >
        Ideas
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {ideas.map((idea) => (
          <li key={idea.slug} style={{ marginBottom: "16px" }}>
            <Link
              href={`/ideas/${idea.slug}`}
              style={{
                fontSize: "20px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#0070f3",
              }}
            >
              {idea.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeasPage;
