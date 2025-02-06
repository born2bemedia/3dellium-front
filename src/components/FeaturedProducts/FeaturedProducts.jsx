import Image from "next/image";
import styles from "./FeaturedProducts.module.scss";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";
import fetchFromAPI from "@/helpers/fetchFromAPI";

const CACHE_TAG_PRODUCTS = "products";

async function fetchLatestProductsFromCategories(categorySlugs) {
  const categoryData = await fetchFromAPI("/api/categories", {
    query: `where[slug][in]=${categorySlugs.join(",")}`,
    tag: CACHE_TAG_PRODUCTS,
  });

  const categoryIds = categoryData.docs.map((cat) => cat.id);

  const productsData = await fetchFromAPI("/api/products", {
    query: `where[category][in]=${categoryIds.join(
      ","
    )}&sort=-createdAt&limit=3`,
    tag: CACHE_TAG_PRODUCTS,
  });

  return productsData.docs;
}

export default async function FeaturedProducts({ categorySlugs, classValue }) {
  const products = await fetchLatestProductsFromCategories(categorySlugs);

  return (
    <div>
      <div
        className={`${styles.productRow} ${
          classValue == "left" && styles.left
        }`}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <FeaturedProductCard
              product={product}
              key={product.id}
              classValue={index === products.length - 2 ? "wide" : ""}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
