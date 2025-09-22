import { NavLink } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import { useEffect, useState } from "react";
import NaviLoader from "../../../../components/Layouts/NaviLoader";

const GoldLoanData = () => {
    const [goldSlides, setGoldSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('../../../api/goldLoanData.json'); // Local JSON file
                const data = await response.json();
                setGoldSlides(data);
            } catch (error) {
                console.error('Error fetching JSON slides:', error);
            }
        };

        fetchSlides();
    }, []);

    if (goldSlides.length === 0) {
        return <div className="items-center justify-center py-10 text-center justify-items-center">
            <NaviLoader />
        </div>;
    }

    return (
        <>
            <div className="swiper-container-wrapper">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{ delay: 3000 }}
                    loop
                    spaceBetween={20}
                    slidesPerView={3}
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
                            slidesPerView: 1,
                            navigation: false,
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className="overflow-hidden rounded-lg mySwiper"
                >
                    {goldSlides.map((items, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-[#fff] rounded w-full items-center shadow-md dark:bg-gray-700 card">
                                <div className="p-3">
                                    <NavLink href="#" className="w-full">
                                        <img src={items.image} alt={items.title} />
                                    </NavLink>
                                </div>
                                <div className="pt-0 tracking-[.9px] w-[100%]">
                                    <div className="cardTitle">
                                        <h2 className="font-roboto text-red-600 font-[600] dark:text-white text-[20px] uppercase ">
                                            {items.loanType} </h2>
                                        <hr className="dark:text-[#D6D6D6]" />
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Interest Rate : </span>
                                        <span className="text-green-400 text[10px]"> {items.interestRate}</span>
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Amount : </span>
                                        <span className="text-green-400 text[10px]"> {items.loanAmount}</span>
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Tenure : </span>
                                        <span className="text-green-400 text[10px]"> {items.tenure}</span>
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Features : </span>
                                        <span className="text-green-400 text[10px]"> {items.features}</span>
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Eligibility : </span>
                                        <span className="text-green-400 text[10px]"> {items.eligibility}</span>
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Purpose : </span>
                                        <span className="text-green-400 text[10px]"> {items.loanPurpose}</span>
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Processing Fee : </span>
                                        <span className="text-green-400 text[10px]"> {items.processingFee}</span>
                                    </div>
                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Re Payment Modes : </span>
                                        <span className="text-green-400 text[10px]"> {items.repaymentModes}</span>
                                    </div>
                                </div>
                                <div className="flex items-center w-full py-4 ml-9">
                                    <div className="flex w-[33%] items-center  rounded-md bg-gradient-to-r from-green-600 from-10%  to-green-900 to-90%">
                                        <div className="flex w-[130px] hover:bg-gradient-to-l from-green-600 from-10%  to-green-900 to-90% text-white font-roboto pt-2 pb-2 pl-3 pr-3 items-center rounded-md">
                                            <NavLink to="" className="flex items-center w-full text-white ">
                                                Read More
                                                <span className="inline items-center pl-[5px]"><HiArrowLongRight /></span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}

export default GoldLoanData