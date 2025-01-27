"use server";

import ProductHero from "../components/ProductHero/ProductHero";
import { Metadata } from "next";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const CACHE_TAG_PRODUCTS = "products";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | 3Dellium`,
    description: "",
    openGraph: {
      title: `${product.title} | 3Dellium`,
      description: "",
      images: [
        {
          url: product.image.url,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

async function getProductBySlug(slug) {
  try {
   // console.time("API Fetch Timer");
    const response = await fetch(
      `${API_URL}/api/products?where[slug][equals]=${slug}`,
      {
        cache: "force-cache",
        next: {
          tags: [CACHE_TAG_PRODUCTS],
        },
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
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return <ProductHero product={product} />;
};

export default ProductPage;
