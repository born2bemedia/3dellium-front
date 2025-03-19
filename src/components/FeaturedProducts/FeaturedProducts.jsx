import FeaturedProductsClient from "./FeaturedProductsClient";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { CACHE_TAG_PRODUCTS } from "@/helpers/constants";

// New function to fetch products by a list of IDs
async function fetchProductById(id) {
  const productsData = await fetchFromAPI(`/api/products/${id}`, {
    tag: CACHE_TAG_PRODUCTS,
  });
  return productsData;
}

export default async function FeaturedProducts({ productIds, classValue }) {
  if (productIds.length === 0) {
    return <p>No product IDs provided.</p>;
  }

  const products = await Promise.all(
    productIds.map(async (id) => await fetchProductById(id))
  );

  return <FeaturedProductsClient products={products} classValue={classValue} />;
}
