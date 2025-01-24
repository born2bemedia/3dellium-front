import { create } from "zustand";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL; // Ensure you have this set in your env file
const CACHE_TAG_PRODUCTS = "products";

const useProductStore = create((set) => ({
  products: [],
  categories: [],
  loading: false,
  error: null,

  fetchAllProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${API_URL}/api/products?depth=2`, {
        cache: "force-cache",
        next: {
          tags: [CACHE_TAG_PRODUCTS],
        },
      });
      const data = await response.json();
      set({ products: data.docs || [], loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
    }
  },

  fetchProductsByCategorySlug: async (slug) => {
    set({ loading: true, error: null });
    try {
      const categoryRes = await fetch(
        `${API_URL}/api/categories?where[slug][equals]=${slug}`,
        {
          cache: "force-cache",
          next: {
            tags: [CACHE_TAG_PRODUCTS],
          },
        }
      );
      const categoryData = await categoryRes.json();

      if (categoryData.docs.length === 0) {
        set({ error: "Category not found", loading: false });
        return;
      }

      const categoryId = categoryData.docs[0].id;
      const productsRes = await fetch(
        `${API_URL}/api/products?where[category][equals]=${categoryId}`,
        {
          cache: "force-cache",
          next: {
            tags: [CACHE_TAG_PRODUCTS],
          },
        }
      );
      const productsData = await productsRes.json();

      set({ products: productsData.docs || [], loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products by category", loading: false });
    }
  },

  fetchRandomProductsFromCategories: async (categorySlugs) => {
    set({ loading: true, error: null });
    try {
      const categoriesRes = await fetch(
        `${API_URL}/api/categories?where[slug][in]=${categorySlugs.join(",")}`,
        {
          cache: "force-cache",
          next: {
            tags: [CACHE_TAG_PRODUCTS],
          },
        }
      );
      const categoriesData = await categoriesRes.json();

      const categoryIds = categoriesData.docs.map((cat) => cat.id);

      const productsRes = await fetch(
        `${API_URL}/api/products?where[category][in]=${categoryIds.join(",")}`,
        {
          cache: "force-cache",
          next: {
            tags: [CACHE_TAG_PRODUCTS],
          },
        }
      );
      const productsData = await productsRes.json();

      //console.log(productsData);

      const randomProducts = productsData.docs
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

      set({ products: randomProducts, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch random products", loading: false });
    }
  },
}));

export default useProductStore;
