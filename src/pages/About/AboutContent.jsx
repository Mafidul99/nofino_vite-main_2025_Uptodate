import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from "react-icons/hi2";

const AboutContent = () => {
    return (
        <>
            <div className='flex mx-auto max-w-[1200px] w-full px-4 items-center'>
                <div className="w-[100%] grid gap-3 grid-cols-2 md:grid-cols-1 md:p-5">
                    <div className="relative md:items-center md:justify-center md:p-4">
                        <div className="max-w-[100%] relative z-[2] px-[30px] py-[30px] rounded-md">
                            <img src="/assets/images/about/ab1.png" alt="thumb" className='rounded-md' />
                        </div>
                        <div className="absolute bottom-[40px] left-[-72px] z-[1] alltuchtopdown ">
                            <img src="/assets/images/about/ab-circle.png" alt="circle-thumb" className="w-[380px]" />
                        </div>
                    </div>
                    <div className="font-roboto font-[25px] font[500] mb-[33px] py-[30px] text-gray-800">
                        <div className="mb-[20px] justify-center items-center text-justify dark:text-white">
                            <p>Nofino Rural Finance Private Limited, headquartered in Mandia,
                                Barpeta District, Assam, is dedicated to uplifting the needy, poor,
                                and small businesses in North East India. Our mission is to provide accessible
                                financial services to empower marginalized communities, fostering economic growth
                                and self-reliance. We believe in creating opportunities and bridging financial
                                gaps for those often overlooked by traditional banking systems. By offering tailored
                                financial solutions, we strive to enhance livelihoods, promote sustainable
                                development, and contribute to the region's overall prosperity. At Nofino Rural
                                Finance, we are committed to making a meaningful difference in the lives of our
                                clients.</p>
                        </div>
                        <div className="d-flex">
                            <div className="px-2">
                                <img src="/assets/images/about/career-3.png" alt="circle-thumb" className="w-[80px]" />
                            </div>
                            <div className="w-full">
                                <div className="text-[30px] tracking-[.9px] font-[800] mb-2 dark:text-white">
                                    <h4>Our Vission</h4>
                                </div>
                                <div className="mb-[20px] justify-center items-center text-justify dark:text-white">
                                    <p>Nofino Rural Finance Private Limited envisions a future where every individual in North East India,
                                        regardless of their socio-economic background, has access to financial resources that empower them
                                        to achieve their dreams and improve their quality of life. We aim to be a catalyst for sustainable
                                        development, fostering economic growth, and social progress by providing innovative financial
                                        solutions tailored to the unique needs of the region. Our vision is to bridge the financial gap,
                                        ensuring that the underserved communities can thrive, prosper, and contribute to the region's
                                        overall prosperity. By focusing on inclusive growth, we aspire to create a resilient financial
                                        ecosystem that supports small businesses, uplifts the poor, and nurtures the potential of
                                        every individual in North East India.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center pt-3 pb-3 ml-9">
                            <Link to="/contact" className=" flex text-white bg-gradient-to-r from-green-400 via-green-500
                         to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
                          dark:shadow-green-800/80 font-medium rounded-lg text-[15px] px-4 py-3 text-center me-2 mb-2">
                                More Contact Us
                                <span className="inline items-center pl-[5px]"><HiArrowLongRight size={20} /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent