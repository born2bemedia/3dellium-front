'use client';
import { useState, useEffect } from 'react';
import styles from './AlsoLike.module.scss';
import FeaturedProductCard from '@/components/FeaturedProductCard/FeaturedProductCard';
import Skeleton from '@/components/Skeleton/Skeleton';
import PhoneAccessories from '@/icons/Categories/PhoneAccessories';
import DesktopOrganization from '@/icons/Categories/DesktopOrganization';
import BoardGames from '@/icons/Categories/BoardGames';
import PetAccessories from '@/icons/Categories/PetAccessories';
import RenovationTools from '@/icons/Categories/RenovationTools';
import ArrowLeft from '@/icons/Arrows/ArrowLeft';
import ArrowRight from '@/icons/Arrows/ArrowRight';
import { API_TOKEN, API_URL } from '@/helpers/constants';
import shopFetchProducts from '@/helpers/shopFetchProducts';
import SmartDevices from '@/icons/Categories/SmartDevices';
import Garden from '@/icons/Categories/Garden';
import Fashion from '@/icons/Categories/Fashion';
import Interior from '@/icons/Categories/Interior';

const sortOptions = [
  { value: '-popularity', label: 'Popular First' },
  { value: '-createdAt', label: 'New First' },
  { value: 'createdAt', label: 'Old First' },
  { value: 'price', label: 'Price Low to High' },
  { value: '-price', label: 'Price High to Low' },
];

const priceRanges = [
  { value: '50-250', label: '50 - 250' },
  { value: '250-500', label: '250 - 500' },
  { value: '500-1000', label: '500 - 1000' },
];

export default function AlsoLike({ categorySlugs, currentProductName }) {
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

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const setSort = (value, label) => {
    setSelectedSort(value);
    setSelectedSortLabel(label);
    setSortOpened(!sortOpened);
  };

  const setFilter = value => {
    setSelectedPrice(value);
    setFilterOpened(!filterOpened);
  };

  const setType = value => {
    setSelectedCategory(value);
    setTypeOpened(!typeOpened);
  };

  useEffect(() => {
    shopFetchProducts({
      categorySlugs,
      setLoading,
      setCategories,
      selectedCategory,
      selectedPrice,
      selectedSort,
      itemsPerPage,
      currentPage,
      setProducts,
      setTotalPages,
    });
  }, [
    categorySlugs,
    selectedCategory,
    selectedSort,
    selectedPrice,
    currentPage,
    itemsPerPage,
  ]);

  const classValue = (index, categoriesLength, productsLength) => {
    if (categoriesLength === 1) {
      if (windowWidth < 992) {
        return 'wideanimation';
      } else {
        return [0, 3, 4, 6].includes(index) && productsLength >= 5
          ? 'wideanimation'
          : '';
      }
    } else {
      return [4, 10, 16].includes(index) && productsLength >= 5 ? 'wide' : '';
    }
  };

  return (
    <section className={styles.layout}>
      <h3 className={styles.heading}>You may also like</h3>
      <div className={`${styles.productRow}`}>
        {loading ? (
          <Skeleton count={4} />
        ) : products.length > 0 ? (
          products
            .filter(product => product.title !== currentProductName)
            .slice(0, 4)
            .map((product, index) => (
              <FeaturedProductCard
                product={product}
                key={product.id}
                imgStyles={styles.imgLayout}
                buyStyles={styles.buyStyles}
                classValue={classValue(
                  index,
                  categories.length,
                  products.length,
                )}
              />
            ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}
