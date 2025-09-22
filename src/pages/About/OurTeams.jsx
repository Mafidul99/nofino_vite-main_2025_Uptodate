import React, { useEffect, useState } from 'react'
// import OurTeamsLink from '../../api/ourTeam/ourTeam.json';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import NaviLoader from "../../components/Layouts/NaviLoader";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

const OurTeams = () => {

    
    const socialmedia = [
        {
            icon: {
                facebook: <FaFacebook />,
                tiwtter: <FaTwitter />,
                instagram: <FaInstagramSquare />,
                youyube: <FaYoutube />,
            }
        }
    ]

    const [ourTeamsLink, setOurTeamsLink] = useState([]);

    useEffect(() => {
            const fetchSlides = async () => {
                try {
                    const response = await fetch('../../api/ourTeam/ourTeam.json'); // Local JSON file
                    const data = await response.json();
                    setOurTeamsLink(data);
                } catch (error) {
                    console.error('Error fetching JSON slides:', error);
                }
            };
    
            fetchSlides();
        }, []);
    
        if (ourTeamsLink.length === 0) {
            return <div className="items-center justify-center py-10 text-center justify-items-center">
                <NaviLoader />
            </div>;
        }

    

    return (
        <>
            <section className="mt-[20px]">
                <div className="py-8 px-4 mx-auto max-w-[1200px] text-center lg:py-16 lg:px-6">
                    <div className='items-center animate-slide-fade'>                        
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{ delay: 3000 }}
                            loop
                            spaceBetween={20}
                            slidesPerView={3}
                            className="overflow-hidden rounded-lg mySwiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    navigation: false,
                                },
                                378: {
                                    slidesPerView: 1,
                                    navigation: false,
                                },
                                639: {
                                    slidesPerView: 2,
                                    navigation: false,
                                },
                                767: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {ourTeamsLink.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div className="px-4 text-center text-gray-500 dark:text-gray-400 dark:bg-gray-700 font-roboto
                                        bg-[#f3f3f3fa] border-green-500 border-b-2 rounded-md shadow-md transition duration-300 hover:scale-105">
                                        <img src={member.images.png} alt={member.images.alt}
                                            className="object-cover p-3 mx-auto rounded-full"
                                        />
                                        <h3 className="text-[20px] uppercase font-roboto font-bold tracking-tight
                                         text-gray-900 dark:text-white hover:text-purple-700 dark:hover:text-green-500">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-[#f6f6f6ce]">{member.designation.common}</p>
                                        {socialmedia.map((socialmedias, index) => {
                                            return (
                                                <ul className="flex justify-center my-3 space-x-4 text-[20px]" key={index}>
                                                    <li>
                                                        <a href="#__" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                                            {socialmedias.icon.facebook}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#__" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                            {socialmedias.icon.instagram}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#__" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                                            {socialmedias.icon.tiwtter}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#__" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                                                            {socialmedias.icon.youyube}
                                                        </a>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeams