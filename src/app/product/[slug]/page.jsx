"use server";

import ProductHero from "../components/ProductHero/ProductHero";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

async function getProductBySlug(slug) {
  try {
    const response = await fetch(
      `${API_URL}/api/products?where[slug][equals]=${slug}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    if (data.docs.length === 0) {
      return null;
    }

    return data.docs[0];
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const ProductPage = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      {/**<div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{product.title}</h1>
      <img
        src={`${API_URL}${product.image?.url}`}
        alt={product.title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
    </div> */}
      <ProductHero product={product} />
    </>
  );
};

export default ProductPage;
