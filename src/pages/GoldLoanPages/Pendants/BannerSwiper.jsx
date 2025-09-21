import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

const BannerSwiper = ({ items }) => {  


    return (
        <>
            <div className="flex items-center justify-center w-full py-4 my-4">
                <div className="flex-wrap justify-between max-w-[1200px] w-full items-center px-4">
                    <div class="w-full font-roboto">
                        <div class="gird grid-rows-1 gap-2" >
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
                                        <div className="overflow-hidden bg-white rounded shadow-md">
                                            <img src={item.image} alt={item.title} className="object-cover w-full h-40" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BannerSwiper;
