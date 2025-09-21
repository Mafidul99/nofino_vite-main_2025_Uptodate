import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

const OwlCarouselBanner = ({items}) => {
  return (
    <>
      <div className="my-6">
        <div className="dark:text-gray-800">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={3}
            className="overflow-hidden rounded-lg"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx}>
                {/* <img src={src.img} alt={src.alt} className="object-cover w-full h-60" /> */}
                <div className="overflow-hidden rounded shadow-md"  style={{ backgroundColor: item.bgcolor }}>
                  <img src={item.image} alt={item.title} className="object-cover w-full h-36" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.icon} {item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div >

    </>
  )
}

export default OwlCarouselBanner;