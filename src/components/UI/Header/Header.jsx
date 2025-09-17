import { Link} from "react-router-dom";
import Topbar from "./Topbar";

import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import HeaderGoldDropDown from "../../../dropdowns/HeaderGoldDropDown";
import LoanSerDropDown from "../../../dropdowns/LoanSerDropDown";
import InvesmentDropDown from "../../../dropdowns/InvesmentDropDown";
import MobileHeader from "../MobileHeader";



const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    }

    const hiddeSideMenu = () => {
        setShowMenu(false)
    }

    const links = [
        {
            name: "Home",
            url:"/"

        },
        {
            name: "About Us",
            url:"/about"
        },
        {
            name: "Digital Solutions",
            url:"/digital-solutions"
        },
        {
            name: <LoanSerDropDown/>
        },
        {
            name: "Accounts",
            url:"/accounts"
        },
        {
            name: "Cash Management Product",
            url:"/cash-managment-product"

        },
        
        {
            name: <HeaderGoldDropDown/>

        },
        {
            name: <InvesmentDropDown/>

        },
        {
            name: "Contact Us",
            url:"/contact"

        }
    ]

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
                                <Link to="#_" className="relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-gray-600 border-2 border-green-600 rounded-full outlineBtn dark:border-gray-700 hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 dark:bg-gray-700 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                                    <span className="relative font-roboto text-[15px] font-[700]">Open Account</span>
                                </Link>
                            </div>
                            <div className="flex ml-auto">
                                <Link to="#_" className="relative inline-flex items-center justify-start py-2 overflow-hidden font-medium transition-all bg-green-500 dark:bg-gray-500 px-7 rounded-xl group">
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

                <nav className="bg-[#f1f3ff]  dark:bg-gray-700 shadow-xl w-full flex border-t-[1px] border-t-[#a8acd5] border-b-[1px] border-b-[#a8acd5] mt-[5px] items-center justify-center text-center">
                    <div className="flex flex-wrap justify-between items-center mx-auto w-full max-w-[1200px] px-4 ">                        

                        <div onClick={handleButtonToggle} className="justify-end px-2 py-2 ml-auto bg-gray-700 rounded-md mobileToggle
                             dark:bg-slate-50 hover:bg-gray-300 cursor-pointer mobileToggleBtn">
                            <button  className="items-center justify-center text-center cursor-pointer">
                                <FiMenu size={25} className="items-center justify-center text-center dark:text-gray-900 text-[#fff] hover:text-gray-800" />
                            </button>
                        </div>
                         <div  className={showMenu ? "mobile-menu" : "menu-web"} >
                            <div className="w-full block_overlay" style={{ 
                                opacity: showMenu ? 1 : 0 ,
                                visibility: showMenu ? "visible" : "hidden"
                             }} onClick={hiddeSideMenu} >                       
                            <div className="w-full mobile-menu"  >                                
                                <MobileHeader onClick={(e) => {e.stopPropagation}}/>
                            </div> 
                         </div>
                                                       
                        </div>
                       <div className="relative flex text-left cursor-pointer">
                            <div className="flex items-center menu-web">
                                <ul className="flex text-[14px] dark:text-[#fff] font-roboto font-[500] justify-between capitalize text-center justify-items-center">
                                    {links.map((link, index) => {
                                        return (
                                            <li className="hover:bg-[#e7e7fc] dark:hover:bg-gray-400  items-center border-r-[1px] border-dashed border-r-[#d6d8ec] text-center justify-items-center justify-center" key={index}>
                                                <Link to={link.url} className="flex  px-[13px] py-[12px] items-center dark:hover:text-white hover:text-gray-800 text-center justify-items-center ">
                                                    {link.name}                                                
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;