import { NavLink } from "react-router-dom";
import BusinessLoanData from "../../api/businessLoanData.json";
import { HiArrowLongRight } from "react-icons/hi2";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import { useEffect, useState } from "react";
import NaviLoader from "../../components/Layouts/NaviLoader";
import ProductLoanData from "./ProductsCarousel/ProductLoanData";

const MyCarouselOwlLoan = () => {

    const [goldSlides, setGoldSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('../../api/goldLoanData.json'); // Local JSON file
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

            <section>
                <div className="flex items-center justify-center w-full mt-5">
                    <div className="flex-wrap justify-between max-w-[1200px] w-full items-center px-4">
                        <div className="flex w-[100%] items-center font-[500] font-roboto tracking-[2px] dark:bg-gray-700 bg-[#fff] h-auto border-[1px] border-gray-300 dark:border-0 shadow-xl rounded-[7px]">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#goldloan" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Gold Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#productLoan" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Product Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#businessLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Business Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#groupLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Group Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#personalLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Personal Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#vehicleLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Loan Against Vehicle</button>
                                </div>
                            </nav>
                        </div>
                        <div className="mt-4 tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="goldloan" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="mt-4 font-roboto">
                                    <div class="gird grid-rows-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-2">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="productLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="mt-4 font-roboto">
                                <div class="gird grid-rows-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-2">
                                    <ProductLoanData/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="businessLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="flex w-[100%] font-roboto mt-4">
                                <div class="owl-carousel owl-theme grid-three-cols">
                                    {BusinessLoanData.map((businLoanData) => {
                                        const {
                                            id, loanType, interestRate, loanAmount,
                                            tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                        return (

                                            <div className="flex items-center w-full shadow-md card dark:bg-gray-700" key={id}>
                                                <div className="SliderImage">
                                                    <NavLink href="#">
                                                        <img src={image} alt="thumb" />
                                                    </NavLink>
                                                </div>
                                                <div className="pt-0 tracking-[.9px] w-[100%]">
                                                    <div className="cardTitle">
                                                        <h2 className="font-roboto text-red-600 font-[600] dark:text-white text-[20px] uppercase ">
                                                            {loanType} </h2> <hr />
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Interest Rate : </span>
                                                        <span className="text-green-400 text[10px]"> {interestRate}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Amount : </span>
                                                        <span className="text-green-400 text[10px]"> {loanAmount}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Tenure : </span>
                                                        <span className="text-green-400 text[10px]"> {tenure}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Features : </span>
                                                        <span className="text-green-400 text[10px]"> {features}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Eligibility : </span>
                                                        <span className="text-green-400 text[10px]"> {eligibility}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Purpose : </span>
                                                        <span className="text-green-400 text[10px]"> {loanPurpose}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Processing Fee : </span>
                                                        <span className="text-green-400 text[10px]"> {processingFee}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Re Payment Modes : </span>
                                                        <span className="text-green-400 text[10px]"> {repaymentModes}</span>
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
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="groupLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="flex w-[100%] font-roboto mt-4">
                                <div class="owl-carousel owl-theme grid-three-cols">
                                    {BusinessLoanData.map((businLoanData) => {
                                        const {
                                            id, loanType, interestRate, loanAmount,
                                            tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                        return (

                                            <div className="flex items-center w-full shadow-md card dark:bg-gray-700" key={id}>
                                                <div className="SliderImage">
                                                    <NavLink href="#">
                                                        <img src={image} alt="thumb" />
                                                    </NavLink>
                                                </div>
                                                <div className="pt-0 tracking-[.9px] w-[100%]">
                                                    <div className="cardTitle">
                                                        <h2 className="font-roboto text-red-600 font-[600] dark:text-white text-[20px] uppercase ">
                                                            {loanType} </h2> <hr />
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Interest Rate : </span>
                                                        <span className="text-green-400 text[10px]"> {interestRate}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Amount : </span>
                                                        <span className="text-green-400 text[10px]"> {loanAmount}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Tenure : </span>
                                                        <span className="text-green-400 text[10px]"> {tenure}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Features : </span>
                                                        <span className="text-green-400 text[10px]"> {features}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Eligibility : </span>
                                                        <span className="text-green-400 text[10px]"> {eligibility}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Purpose : </span>
                                                        <span className="text-green-400 text[10px]"> {loanPurpose}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Processing Fee : </span>
                                                        <span className="text-green-400 text[10px]"> {processingFee}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Re Payment Modes : </span>
                                                        <span className="text-green-400 text[10px]"> {repaymentModes}</span>
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
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="personalLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="flex w-[100%] font-roboto mt-4">
                                <div class="owl-carousel owl-theme grid-three-cols">
                                    {BusinessLoanData.map((businLoanData) => {
                                        const {
                                            id, loanType, interestRate, loanAmount,
                                            tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                        return (

                                            <div className="flex items-center w-full shadow-md card dark:bg-gray-700" key={id}>
                                                <div className="SliderImage">
                                                    <NavLink href="#">
                                                        <img src={image} alt="thumb" />
                                                    </NavLink>
                                                </div>
                                                <div className="pt-0 tracking-[.9px] w-[100%]">
                                                    <div className="cardTitle">
                                                        <h2 className="font-roboto text-red-600 font-[600] dark:text-white text-[20px] uppercase ">
                                                            {loanType} </h2> <hr />
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Interest Rate : </span>
                                                        <span className="text-green-400 text[10px]"> {interestRate}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Amount : </span>
                                                        <span className="text-green-400 text[10px]"> {loanAmount}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Tenure : </span>
                                                        <span className="text-green-400 text[10px]"> {tenure}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Features : </span>
                                                        <span className="text-green-400 text[10px]"> {features}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Eligibility : </span>
                                                        <span className="text-green-400 text[10px]"> {eligibility}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Purpose : </span>
                                                        <span className="text-green-400 text[10px]"> {loanPurpose}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Processing Fee : </span>
                                                        <span className="text-green-400 text[10px]"> {processingFee}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Re Payment Modes : </span>
                                                        <span className="text-green-400 text[10px]"> {repaymentModes}</span>
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
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="vehicleLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="flex w-[100%] font-roboto mt-4">
                                <div class="owl-carousel owl-theme grid-three-cols">
                                    {BusinessLoanData.map((businLoanData) => {
                                        const {
                                            id, loanType, interestRate, loanAmount,
                                            tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                        return (

                                            <div className="flex items-center w-full shadow-md card dark:bg-gray-700" key={id}>
                                                <div className="SliderImage">
                                                    <NavLink href="#">
                                                        <img src={image} alt="thumb" />
                                                    </NavLink>
                                                </div>
                                                <div className="pt-0 tracking-[.9px] w-[100%]">
                                                    <div className="cardTitle">
                                                        <h2 className="font-roboto text-red-600 font-[600] dark:text-white text-[20px] uppercase ">
                                                            {loanType} </h2> <hr />
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Interest Rate : </span>
                                                        <span className="text-green-400 text[10px]"> {interestRate}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Amount : </span>
                                                        <span className="text-green-400 text[10px]"> {loanAmount}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Tenure : </span>
                                                        <span className="text-green-400 text[10px]"> {tenure}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Features : </span>
                                                        <span className="text-green-400 text[10px]"> {features}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Eligibility : </span>
                                                        <span className="text-green-400 text[10px]"> {eligibility}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Purpose : </span>
                                                        <span className="text-green-400 text[10px]"> {loanPurpose}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Processing Fee : </span>
                                                        <span className="text-green-400 text[10px]"> {processingFee}</span>
                                                    </div>
                                                    <div className="pt-1 pr-4 font-roboto pl-7">
                                                        <span className="font-[600] text-[15px] dark:text-white text-gray-500">Re Payment Modes : </span>
                                                        <span className="text-green-400 text[10px]"> {repaymentModes}</span>
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
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>


    );
}

export default MyCarouselOwlLoan;



