import Image from "next/image";
import styles from "./FeaturedProducts.module.scss";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN;

async function fetchLatestProductsFromCategories(categorySlugs) {
  try {
    const categoryRes = await fetch(
      `${API_URL}/api/categories?where[slug][in]=${categorySlugs.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
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
      )}&sort=-createdAt&limit=4`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
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

export default async function FeaturedProducts({ categorySlugs }) {
  const products = await fetchLatestProductsFromCategories(categorySlugs);

  return (
    <div>
      <div className={styles.productRow}>
        {products.length > 0 ? (
          products.map((product) => (
            <FeaturedProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
