import React from 'react'
import Banner from './common/Banner';
import SearchBar from './common/SearchBar';
import OwlCarouselBanner from './common/OwlCarouselBanner';
import SidebarFilters from './common/SidebarFilters';
import ProductList from './common/ProductList';
import BannerImg from './common/BannerImg';


const AnkletsToeRings = () => {
  const carouselItems = [
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', icon: "🚀 ", title: 'Bracelets Bangles', bgcolor: "#BFDBFE" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048',  icon: "🔥 ", title: 'Featured Product 2', bgcolor: "#c6f6d5" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', icon: "⭐ ", title: 'Featured Product 3', bgcolor: "#FED7D7" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', icon: "⭐ ", title: 'Featured Product 3', bgcolor: "#c6f6d5" },
  { image: 'https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048', icon: "⭐ ", title: 'Featured Product 3', bgcolor: "#ce93d8" },
];
  return (
    <>
    <div className='flex items-center justify-center mt-[40px] w-full'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4 py-3'>
          <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
            <span>Trusted Company</span>
          </div>
          <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
            <span>anklets and ring Product List</span>
          </div>
          <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] dark:text-[#D6D6D6] mt-[4px]'>
            <span>Wealth management and insurance solutions for a secure tomorrow</span>
          </div>
        </div>
      </div>
    <div className="items-center justify-center w-full h-full mt-4">
      <Banner />      
      <div className="flex-wrap justify-between max-w-[1200px] w-full items-center px-4 mx-auto py-6">
        <div className="grid grid-cols-4 gap-3">             
          <div className="col-span-1 gap-2">
            <SearchBar />
            <SidebarFilters />
            <BannerImg />
          </div>
        <div className="col-span-3">
          <ProductList />      
        </div>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-6'>
          <OwlCarouselBanner items={carouselItems}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default AnkletsToeRings;