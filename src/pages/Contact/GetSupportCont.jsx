import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { GiRotaryPhone } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";

const GetSupportCont = () => {

    const supportLinks = [
        {
            icon: <FaMapLocationDot />,
            title: "Company Address",
            name: "Mandia, Barpeta, Assam 781308 India",
            email: {
                nam: "",
                icons: ""
            },
            phone: {
                nob: "",
                icons: ""
            },
        },
        {
            icon: <LuTimerReset />,
            title: "Opening Hours",
            name: "Mon - Sat: 09:00am - 05:00pm -- Sunday office off",
            email: {
                nam: "",
                icons: ""
            },
            phone: {
                nob: "",
                icons: ""
            },
        },
        {
            icon: <FaMapLocationDot />,
            title: "Contact Directly",
            name: "",
            smname: "Call our Contact Centre",
            email: {
                nam: "support@nofinofinance.com",
                icons: <TfiEmail />
            },
            phone: {
                nob: "+91 6002562417 / 7086788028",
                icons: <GiRotaryPhone />
            },
        }

    ]

    return (
        <>
            <section>
                <div className='flex items-center justify-center mt-[40px] w-ful '>
                    <div className='max-w-[1200px] w-full items-center justify-center pl-[70px]'>
                        <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
                            <span>Contact Us</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
                            <span>We are here for you</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] mt-[4px] dark:text-[#D6D6D6]'>
                            <span>Nofino Rural Finance Private Limited</span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center w-full mt-[40px]'>
                    <div className='flex justify-between items-center mx-auto max-w-[1200px] w-full px-4 py-3'>
                        <div className="w-[100%] grid gap-3 grid-cols-3  md:grid-cols-1 lg:gap-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 p-2">
                            {supportLinks.map((supportLink, index) => {
                                return (
                                    <div class="p-3 bg-slate-50  dark:bg-gray-700 border-gray-200 rounded-lg shadow-xl dark:border-gray-700" key={index}>
                                        <div className="flex w-full items-center justify-center justify-items-center py-2 text-center">
                                            <span className='text-[50px] w-full text-green-500 items-center text-center justify-items-center'>
                                                {supportLink.icon}
                                            </span>
                                        </div>
                                        <h5 class="mb-2 text-[24px] font-roboto font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                            {supportLink.title}
                                        </h5>
                                        <hr className='py-1 w-full border-b-2 border-gray-400 border-dashed border-t-transparent bg-transparent mb-1' />
                                        <div className="flex text-red-600 dark:text-[#D6D6D6] text-[19px] py-2 font-[500] font-roboto">
                                            <p>{supportLink.name}</p>
                                            <span className='text-[16px] font-[500] font-roboto'>
                                                <p>{supportLink.smname}</p>
                                            </span>
                                        </div>
                                        <div className='text-[17px] font-roboto  flex w-full items-center'>
                                            <p className='py-1 flex items-center '>
                                                <span className='items-center text-[17px] text-green-500'>
                                                    {supportLink.email.icons}
                                                </span>
                                                <Link to="mailto:support@nofinofinance.com" className='inline pl-2 hover:text-red-600 dark:text-[#D6D6D6] dark:hover:text-green-300'>
                                                    {supportLink.email.nam}
                                                </Link>
                                            </p>
                                        </div>
                                        <div className='text-[17px] font-roboto flex w-full items-center'>
                                            <p className='py-1 flex items-center'>
                                                <span className='items-center text-[17px] text-green-500'>
                                                    {supportLink.phone.icons}
                                                </span>
                                                <Link to="tel:+916002562417" className='inline pl-2 hover:text-red-600 dark:text-[#D6D6D6] dark:hover:text-green-300'>
                                                    {supportLink.phone.nob}
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default GetSupportCont;