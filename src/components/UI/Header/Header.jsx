import { Link} from "react-router-dom";
import Topbar from "./Topbar";

// import { FiMenu } from "react-icons/fi";
// import { useState } from "react";
// import HeaderGoldDropDown from "../../../dropdowns/HeaderGoldDropDown";
// import LoanSerDropDown from "../../../dropdowns/LoanSerDropDown";
// import InvesmentDropDown from "../../../dropdowns/InvesmentDropDown";
// import MobileHeader from "../MobileHeader";
import MobileMenu from "../MobileMenu";




const Header = () => {

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#fff]">
                <Topbar />
                <div className='items-center w-full py-3'>
                    <div className="flex mx-auto max-w-[1200px] w-full px-4 items-center">
                        <div className='grid items-center w-full grid-cols-3 gap-1'>                        
                            <div className='items-center w-[140px] justify-start'>
                                <Link to="/">
                                    <img src="assets/images/logo/logo-dark1.png" className='w-full' alt="MainLogo" />
                                </Link>
                            </div>
                        <div className='flex col-span-2 gap-3 ml-auto'>
                            <div className="flex ml-auto sm:hidden xs:hidden">
                                <Link to="/accounts" className="relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-gray-600 border-2 border-green-600 rounded-full outlineBtn dark:border-gray-700 hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 dark:bg-gray-700 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                                    <span className="relative font-roboto text-[15px] font-[700]">Open Account</span>
                                </Link>
                            </div>
                            <div className="flex ml-auto">
                                <Link to="https://nofinofinance.in/" target="_blank" className="relative inline-flex items-center justify-start py-2 overflow-hidden font-medium transition-all bg-green-500 dark:bg-gray-500 px-7 rounded-xl group">
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded dark:bg-gray-700 group-hover:-mr-4 group-hover:-mt-4">
                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 dark:bg-gray-700 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-roboto text-[15px] font-[700]">Login Page</span>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <MobileMenu/>
            </header>
        </>
    )
}

export default Header;