"use client";
import { useState, useEffect } from "react";
import styles from "./Shop.module.scss";
import FeaturedProductCard from "@/components/FeaturedProductCard/FeaturedProductCard";
import Skeleton from "@/components/Skeleton/Skeleton";
import PhoneAccessories from "@/icons/Categories/PhoneAccessories";
import DesktopOrganization from "@/icons/Categories/DesktopOrganization";
import BoardGames from "@/icons/Categories/BoardGames";
import PetAccessories from "@/icons/Categories/PetAccessories";
import RenovationTools from "@/icons/Categories/RenovationTools";
import ArrowLeft from "@/icons/Arrows/ArrowLeft";
import ArrowRight from "@/icons/Arrows/ArrowRight";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN;

const sortOptions = [
  { value: "-popularity", label: "Popular First" },
  { value: "-createdAt", label: "New First" },
  { value: "createdAt", label: "Old First" },
  { value: "price", label: "Price Low to High" },
  { value: "-price", label: "Price High to Low" },
];

const priceRanges = [
  { value: "50-250", label: "50 - 250" },
  { value: "250-500", label: "250 - 500" },
  { value: "500-1000", label: "500 - 1000" },
];

export default function Shop({ categorySlugs }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedSortLabel, setSelectedSortLabel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortOpened, setSortOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);
  const [typeOpened, setTypeOpened] = useState(false);

  const setSort = (value, label) => {
    setSelectedSort(value);
    setSelectedSortLabel(label);
    setSortOpened(!sortOpened);
  };

  const setFilter = (value) => {
    setSelectedPrice(value);
    setFilterOpened(!filterOpened);
  };

  const setType = (value) => {
    setSelectedCategory(value);
    setTypeOpened(!typeOpened);
  };

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const categoryRes = await fetch(
          `${API_URL}/api/categories?where[slug][in]=${categorySlugs.join(
            ","
          )}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        const categoryData = await categoryRes.json();
        setCategories(categoryData.docs);
        const categoryIds = selectedCategory
          ? [selectedCategory]
          : categoryData.docs.map((cat) => cat.id);

        let priceFilter = "";
        if (selectedPrice) {
          const [min, max] = selectedPrice.split("-").map(Number);
          priceFilter = `&where[price][greater_than]=${min}&where[price][less_than]=${max}`;
        }

        const productsRes = await fetch(
          `${API_URL}/api/products?where[category][in]=${categoryIds.join(
            ","
          )}&sort=${selectedSort}${priceFilter}&limit=${itemsPerPage}&page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        const productsData = await productsRes.json();
        setProducts(productsData.docs);
        setTotalPages(productsData.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [
    categorySlugs,
    selectedCategory,
    selectedSort,
    selectedPrice,
    currentPage,
    itemsPerPage,
  ]);

  return (
    <section className={styles.shopWrap}>
      <div className="_container">
        <div className={styles.shopContainer}>
          <div className={styles.filters}>
            <div className={styles.sorting}>
              <button
                className={styles.selected}
                onClick={() => setSortOpened(!sortOpened)}
              >
                Sort
              </button>
              <div
                className={`${styles.options} ${sortOpened && styles.opened}`}
              >
                {sortOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={selectedSort === option.value}
                      onChange={() => setSort(option.value, option.label)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {categories.length > 1 && (
              <>
                <div className={styles.type}>
                  <button
                    className={styles.selected}
                    onClick={() => setTypeOpened(!typeOpened)}
                  >
                    Type
                  </button>
                  <div
                    className={`${styles.options} ${
                      typeOpened && styles.opened
                    }`}
                  >
                    {categories.map((cat) => (
                      <label key={cat.id}>
                        <input
                          type="radio"
                          name="type"
                          value={cat.id}
                          checked={selectedCategory === cat.id}
                          onChange={() => setType(cat.id)}
                        />
                        <span>{cat.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.categories}>
                  {categories.map((cat) => (
                    <label key={cat.id}>
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                      />
                      <div>
                        {cat.slug == "phone-accessories" && (
                          <PhoneAccessories />
                        )}
                        {cat.slug == "desktop-organization" && (
                          <DesktopOrganization />
                        )}
                        {cat.slug == "board-games" && <BoardGames />}
                        {cat.slug == "pet-accessories" && <PetAccessories />}
                        {cat.slug == "renovation-tools" && <RenovationTools />}
                        <span>{cat.title}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}

            <div className={styles.filtering}>
              <button
                className={styles.selected}
                onClick={() => setFilterOpened(!filterOpened)}
              >
                Filter
              </button>
              <div
                className={`${styles.options} ${filterOpened && styles.opened}`}
              >
                {priceRanges.map((range) => (
                  <label key={range.value}>
                    <input
                      type="radio"
                      name="filter"
                      value={range.value}
                      checked={selectedPrice === range.value}
                      onChange={() => setFilter(range.value)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.productRow}>
            {loading ? (
              <Skeleton count={itemsPerPage} />
            ) : products.length > 0 ? (
              products.map((product, index) => (
                <FeaturedProductCard
                  product={product}
                  key={product.id}
                  classValue={
                    index === products.length - 2 && products.length >= 5
                      ? "wide"
                      : ""
                  }
                />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className={styles.shopBottom}>
              <div className={styles.itemsPerPage}>
                {[10, 25, 50].map((num) => (
                  <label key={num}>
                    <input
                      type="radio"
                      name="itemsPerPage"
                      value={num}
                      checked={itemsPerPage === num}
                      onChange={() => setItemsPerPage(num)}
                    />
                    <span>
                      {num} <span>items</span>
                    </span>
                  </label>
                ))}
              </div>

              <div className={styles.pagination}>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ArrowLeft />
                </button>
                <span>
                  {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
