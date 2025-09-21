import React, { useState } from 'react';
import Carousel from './BanglesDesigns/Carousel';
import CategoryList from './BanglesDesigns/CategoryList';
import ProductCard from './BanglesDesigns/ProductCard';
import ProductFilter from './BanglesDesigns/ProductFilter';

const carouselItems = [
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Bracelets Bangles' },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 2' },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 3' },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 3' },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 3' },
];

const sampleProducts = [
  { id: 1, name: 'Shirt', category: 'Clothing', price: 25, image: 'https://cdn.shopify.com/s/files/1/0622/9206/6563/files/NEW-FROM-IMAGE-SKINCARE.jpg' },
  { id: 2, name: 'Shoes', category: 'Footwear', price: 60, image: 'https://cdn.shopify.com/s/files/1/0622/9206/6563/files/NEW-FROM-IMAGE-SKINCARE.jpg' },
  // more...
];

const BanglesDesigns = () => {

  const [filteredCategory, setFilteredCategory] = useState('All');
  const categories = ['All', 'Clothing', 'Footwear', 'Accessories'];

  const filteredProducts =
    filteredCategory === 'All'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === filteredCategory);
  return (
    <>
      <div className='flex items-center justify-center mt-[40px] w-full'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4 py-3'>
          <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
            <span>Trusted Company</span>
          </div>
          <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
            <span>Gold Loan Product List</span>
          </div>
          <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] dark:text-[#D6D6D6] mt-[4px]'>
            <span>Wealth management and insurance solutions for a secure tomorrow</span>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <Carousel items={carouselItems} />
        <CategoryList categories={categories.slice(1)} />
        <ProductFilter categories={categories} onFilter={setFilteredCategory} />
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BanglesDesigns;