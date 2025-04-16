'use server';

import createMetadata from '@/helpers/metadata';
import PrintingRecommendations from '../components/PrintingRecommendations/PrintingRecommendations';
import ProductHero from '../components/ProductHero/ProductHero';
import { Metadata } from 'next';
import { API_URL, CACHE_TAG_PRODUCTS } from '@/helpers/constants';
import fetchFromAPI from '@/helpers/fetchFromAPI';
import ProductNeedAssistance from '../components/ProductNeedAssistance/ProductNeedAssistance';
import NeedAssistance from '@/components/NeedAssistance/NeedAssistance';
import Description from '@/app/product/components/Description/Description';
import Info from '@/app/product/components/Info/Info';
import Tabs from '@/app/product/components/Tabs/Tabs';
import ProductDescription from '@/app/product/components/ProductDescription/ProductDescription';
import NeedAssistanceNew from '@/components/NeedAssistanceNew/NeedAssistanceNew';
import React from 'react';
import AlsoLike from '@/app/product/components/AlsoLike/AlsoLike';

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return createMetadata({
    title: `${product.title} ${
      product.category?.id !== 6 ? '3D Printing Plan' : ''
    } | 3Dellium`,
    description:
      product.category?.id !== 6
        ? `Get the ready-to-print 3D model for ${product.title}. Professionally designed for easy printing and everyday use.`
        : '',
    imageUrl: 'https://3dellium.com/images/meta.png',
  });
}

async function getProductBySlug(slug) {
  const data = await fetchFromAPI('/api/products', {
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

  console.log(product);

  return (
    <>
      <ProductHero product={product} />
      <ProductDescription
        description={product.content.root.children[0].children[0].text}
        files={product.category.id === 6 ? product.files : product.filesurl}
        isVideoCategory={product.category.id === 6}
      />
      <AlsoLike
        categorySlugs={[product.category.slug]}
        currentProductName={product.title}
      />
      <NeedAssistanceNew
        type={'default'}
        background="/images/product/assist-bg.jpeg"
        backgroundMob="/images/product/assist-bg.jpeg"
        color={'#fff'}
      />
    </>
  );
};

export default ProductPage;
