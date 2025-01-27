import Image from "next/image";
import styles from "./FeaturedProducts.module.scss";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN;

const CACHE_TAG_PRODUCTS = "products";

async function fetchLatestProductsFromCategories(categorySlugs) {
  try {
    const categoryRes = await fetch(
      `${API_URL}/api/categories?where[slug][in]=${categorySlugs.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "force-cache",
        next: {
          tags: [CACHE_TAG_PRODUCTS],
        },
      }
    );

    if (!categoryRes.ok) {
      throw new Error(`Error ${categoryRes.status}: ${categoryRes.statusText}`);
    }

    const categoryData = await categoryRes.json();
    const categoryIds = categoryData.docs.map((cat) => cat.id);

    // Fetch products sorted by createdAt in descending order to get the latest
    const productsRes = await fetch(
      `${API_URL}/api/products?where[category][in]=${categoryIds.join(
        ","
      )}&sort=-createdAt&limit=3`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "force-cache",
        next: {
          tags: [CACHE_TAG_PRODUCTS],
        },
      }
    );

    if (!productsRes.ok) {
      throw new Error(`Error ${productsRes.status}: ${productsRes.statusText}`);
    }

    const productsData = await productsRes.json();
    //console.log(productsData);

    // Return the latest 4 products
    return productsData.docs;
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return [];
  }
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
