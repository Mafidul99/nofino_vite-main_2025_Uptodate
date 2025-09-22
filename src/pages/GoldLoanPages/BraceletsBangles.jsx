import React, { useState } from 'react';
import { products as allProducts } from './BraceletsBangles/products';
import Banner from './BraceletsBangles/Banner';
import BannerImg from './BraceletsBangles/BannerImg';
import OwlCarouselBanner from './common/OwlCarouselBanner';
import ProductFilter from './common/ProductFilter';
import ProductList from './common/ProductList';
import SearchBar from './common/SearchBar';

 const carouselItems = [
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s', icon: "🚀 ", title: 'Bracelets Bangles', bgcolor: "#BFDBFE" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048',  icon: "🔥 ", title: 'Featured Product 2', bgcolor: "#c6f6d5" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', icon: "⭐ ", title: 'Featured Product 3', bgcolor: "#FED7D7" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', icon: "⭐ ", title: 'Featured Product 3', bgcolor: "#c6f6d5" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', icon: "⭐ ", title: 'Featured Product 3', bgcolor: "#ce93d8" },
];

function BraceletsBangles() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="items-center justify-center w-full h-full ">
      <Banner />
      <div className="flex-wrap justify-between max-w-[1200px] w-full items-center px-4 mx-auto py-6">
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-1 gap-2">
            <SearchBar/>
            <ProductFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
            <BannerImg />
        </div>
        <div className="col-span-3">
        <ProductList products={filteredProducts} />
        </div>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-6'>
          <OwlCarouselBanner items={carouselItems}/>
        </div>
      </div>
    </div>
  );
}

export default BraceletsBangles;
