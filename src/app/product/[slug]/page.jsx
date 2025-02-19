"use server";

import createMetadata from "@/helpers/metadata";
import PrintingRecommendations from "../components/PrintingRecommendations/PrintingRecommendations";
import ProductHero from "../components/ProductHero/ProductHero";
import { Metadata } from "next";
import { API_URL, CACHE_TAG_PRODUCTS } from "@/helpers/constants";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import ProductNeedAssistance from "../components/ProductNeedAssistance/ProductNeedAssistance";
import NeedAssistance from "@/components/NeedAssistance/NeedAssistance";

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return createMetadata({
    title: product.title,
    description: product.description,
    imageUrl: product.image?.url,
  });
}

async function getProductBySlug(slug) {
  const data = await fetchFromAPI("/api/products", {
    query: `where[slug][equals]=${slug}`,
    tag: CACHE_TAG_PRODUCTS,
  });
  if (data.docs.length === 0) {
    return null;
  }

  return data.docs[0];
}

const ProductPage = async ({ params }) => {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  const product = await getProductBySlug(slug);
  if (!product) {
    return <p>Product not found.</p>;
  }
  //console.log(product);

  return (
    <>
      <ProductHero product={product} />
      {product.category?.id !== 6 && <PrintingRecommendations />}

      {product.category?.id !== 6 ? <ProductNeedAssistance /> : <NeedAssistance />}
    </>
  );
};

export default ProductPage;
