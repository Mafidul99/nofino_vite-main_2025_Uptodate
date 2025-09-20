import React, { useState } from 'react';
import Carousel from './components/Carousel';
import SidebarFilter from './components/SidebarFilter';
import ProductGrid from './components/ProductGrid';
import OtherContent from './components/OtherContent';

const BraceletsBangles = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Kitchen'];

  const carouselItems = [
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Bracelets Bangles' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 2' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Featured Product 3' },
  ];

  const allProducts = [
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Product 1', price: '$99', category: 'Electronics' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Product 2', price: '$45', category: 'Books' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Product 3', price: '$79', category: 'Clothing' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Product 4', price: '$120', category: 'Home & Kitchen' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Product 5', price: '$59', category: 'Electronics' },
    { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', title: 'Product 5', price: '$59', category: 'Electronics' },
    // etc.
  ];

  const filteredProducts = selectedCategory && selectedCategory !== 'All'
    ? allProducts.filter(p => p.category === selectedCategory)
    : allProducts;

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

      <div className="flex items-center justify-center w-full py-4 my-4">
        <div className="flex-wrap justify-between max-w-[1200px] w-full items-center px-4">
          <div className="grid grid-cols-5 gap-3">
            <div className="w-full">
              <SidebarFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
            <div className="w-full col-span-4">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
          <Carousel items={carouselItems} />
          <OtherContent />
        </div>
      </div>
    </>
  );
};

export default BraceletsBangles;
