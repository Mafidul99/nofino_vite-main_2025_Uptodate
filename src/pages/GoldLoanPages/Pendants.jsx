import React, { useState } from 'react'
import BannerSwiper from './Pendants/BannerSwiper';
import ProductFilter from './Pendants/ProductFilter';
import ProductCard from './Pendants/ProductCard';
import products from './Pendants/data/products';
import ProductPage from './Pendants/ProductPage';

const Pendants = () => {
  const [filter, setFilter] = useState('All');

  const categories = [...new Set(products.map(p => p.category))];
  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);


  const carouselItems = [
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Bracelets Bangles' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 2' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 3' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 3' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 3' },
  ];
  return (
    <>
    <div className="container px-4 mx-auto">
      <BannerSwiper items={carouselItems}/>
      <ProductFilter current={filter} setFilter={setFilter} categories={categories} />
      <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ProductPage/>
    </div>
    </>
  )
}

export default Pendants;