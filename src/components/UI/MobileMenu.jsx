
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import LoanSerDropDown from '../../dropdowns/LoanSerDropDown';
import HeaderGoldDropDown from '../../dropdowns/HeaderGoldDropDown';
import InvesmentDropDown from '../../dropdowns/InvesmentDropDown';
import MobileHeader from './MobileHeader';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);  

    
    const menuItems = [
        {
            name: "Home",
            url: "/"

        },
        {
            name: "About Us",
            url: "/about"
        },
        {
            name: "Digital Solutions",
            url: "/digital-solutions"
        },
        {
            name: <LoanSerDropDown />
        },
        {
            name: "Accounts",
            url: "/accounts"
        },
        {
            name: "Cash Management Product",
            url: "/cash-managment-product"

        },

        {
            name: <HeaderGoldDropDown />

        },
        {
            name: <InvesmentDropDown />

        },
        {
            name: "Contact Us",
            url: "/contact"

        }
    ]

    return (
        <header className="bg-[#f1f3ff]  dark:bg-gray-700 shadow-md w-full flex border-t-[1px] border-t-[#a8acd5] border-b-[1px] border-b-[#a8acd5] mt-[5px] items-center">
            <div className="flex flex-wrap items-center mx-auto w-full max-w-[1200px] px-4">
                {/* Desktop menu */}
                <nav className="relative w-full space-x-6 cursor-pointer lg:hidden">
                    <div className="flex items-center w-full">
                        {menuItems.map((item) => (
                            <ul className="text-[14px] dark:text-[#fff] font-roboto font-[500] capitalize text-center justify-items-center"  key={item}>
                                <li className="hover:bg-[#e7e7fc] dark:hover:bg-gray-400  items-center border-r-[1px] border-dashed border-r-[#d6d8ec] text-center justify-items-center justify-center">
                                    <Link to={item.url} className="flex px-[13px] py-[12px] items-center dark:hover:text-white hover:text-gray-800 text-center justify-items-center ">
                                        {item.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                </nav>

                {/* Mobile Hamburger */}
                <div className="justify-end hidden px-2 py-2 ml-auto bg-gray-700 rounded-md cursor-pointer lg:inline-block dark:bg-slate-50 hover:bg-gray-300 ">
                    <button onClick={toggleMenu} className="items-center cursor-pointer">                        
                        {isOpen ? (
                            <IoMdClose size={22} className="items-center justify-center text-center dark:text-gray-900 text-[#fff] hover:text-gray-800" />
                        ) : (
                            <FiMenu size={22} className="items-center justify-center text-center dark:text-gray-900 text-[#fff] hover:text-gray-800" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="bg-[#f4f4f4] lg:bg-white shadow-md absolute top-0 left-0 w-[50%] dark:bg-gray-700 transition duration-500">
                    <div className="w-full border-t border-gray-200 shadow-md lg:inline-block font-roboto ">
                        <nav className="w-full">
                            {/* {menuItems.map((item) => (
                                <Link
                                    key={item}
                                    href={item.url}
                                    className="inline-block font-medium text-gray-700 hover:text-green-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))} */}
                             <MobileHeader onClick={(e) => {e.stopPropagation}}/>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default MobileMenu;
