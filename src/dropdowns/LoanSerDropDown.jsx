import { RxCaretDown } from "react-icons/rx";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import personalLoan from "../assets/icons/personal.png";
import businessLoan from "../assets/icons/business.png";
import groupLoan from "../assets/icons/loan.png";
import produtLoan from "../assets/icons/product.png";
import loanAgainstVehicle from "../assets/icons/car-loan.png";

import { FcBusinessman, FcInTransit, FcBusiness, FcBriefcase, FcConferenceCall   } from "react-icons/fc";

const LoanSerDropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const calLinks = [
        {
            name: "Personal Loan",
            url: "/personal-loan",
            icons: <FcBusinessman />,
            images: [personalLoan],
            alt: "Icons Loan"


        },
        {
            name: "Business Loan",
            url: "/business-loan",
            icons: <FcBusiness />,
            images: [businessLoan],
            alt: "Icons Loan"

        },
        {
            name: "Group Loan",
            url: "/group-loan",
            icons: <FcConferenceCall  />,
            images: [groupLoan],
            alt: "Icons Loan"

        },
        {
            name: "Product Loan",
            url: "/product-loan",
            icons: <FcBriefcase />,
            images: [produtLoan],
            alt: "Icons Loan"

        },
        {
            name: "Loan Against Vehicle",
            url: "/loan-against-vehicle",
            icons: <FcInTransit />,
            images: [loanAgainstVehicle],
            alt: "Icons Loan"

        }
    ]

    return (
        <>
            <div className="relative inline-block text-left group">
                <div>
                    
                    <button onClick={toggleDropdown} 
                        onMouseEnter={() => setIsOpen(true)}
                        className="inline-flex justify-center w-full menu-hover font-roboto hover:text-gray-800" >
                             Loan Services
                        <RxCaretDown fontSize={16} className='inline hover:text-gray-800' />
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0  mt-4 w-60 z-50 rounded-md shadow-lg bg-[#fff] ring-1 ring-black ring-opacity-5
                    focus:outline-none dark:bg-gray-700 group-hover:block transition duration-150 ease-in-out" role="menu"  onMouseLeave={() => setIsOpen(false)}>
                        <div className="py-1 " role="none">                            
                            {calLinks.map((calLink, index) => {
                                return (
                                    <Link to={calLink.url} key={index}
                                        className="flex px-4 py-[10px] font-roboto text-[15px] text-gray-700 dark:text-white dark:hover:text-green-500
                                         hover:text-green-500 items-center" role="menuitem" >
                                            {/* <img src={calLink.images} alt={calLink.alt} className="flex w-[22px] mr-2 items-center justify-center" /> */}
                                            <span className="flex text-[23px] mr-2 items-center justify-center">{calLink.icons}</span>
                                            <span className="inline-block">{calLink.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default LoanSerDropDown;