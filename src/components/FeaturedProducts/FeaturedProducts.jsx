import Image from "next/image";
import styles from "./FeaturedProducts.module.scss";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { CACHE_TAG_PRODUCTS } from "@/helpers/constants";

// New function to fetch products by a list of IDs
async function fetchProductById(id) {
  const productsData = await fetchFromAPI(`/api/products/${id}`, {
    tag: CACHE_TAG_PRODUCTS,
  });

  //console.log(productsData);

  return productsData;
}

export default async function FeaturedProducts({ productIds, classValue }) {
  if (productIds.length === 0) {
    return <p>No product IDs provided.</p>;
  }

  const products = await Promise.all(
    productIds.map(async (id) => {
      return await fetchProductById(id);
    })
  );

  return (
    <div>
      <div
        className={`${styles.productRow} ${
          classValue === "left" ? styles.left : ""
        }`}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <FeaturedProductCard
              product={product}
              key={index}
              classValue={index === products.length - 1 ? "wide" : ""}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
