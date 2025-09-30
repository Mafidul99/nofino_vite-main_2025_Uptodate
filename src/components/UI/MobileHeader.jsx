import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router-dom";


export const MobileHeader = () => {
    const [isOpenLoan, setIsOpenLoan] = useState(false);
    const [isOpenGold, setIsOpenGold] = useState(false);
    const [isOpenInves, setIsOpenInves] = useState(false);

    const toggleDropdownLoan = () => {
        setIsOpenLoan(!isOpenLoan);
    };
    const toggleDropdownGold = () => {
        setIsOpenGold(!isOpenGold);
    };
    const toggleDropdownInves = () => {
        setIsOpenInves(!isOpenInves);
    };

    const LoanSerLink = [
        {
            name: "Personal Loan",
            url: "/personal-loan"

        },
        {
            name: "Business Loan",
            url: "/business-loan"
        },
        {
            name: "Group Loan",
            url: "/group-loan"
        },
        {
            name: "Product Loan",
            url: "/product-loan"
        },
        {
            name: "Loan Against Vehicle",
            url: "/loan-against-vehicle"
        }
    ]

    const GoldLoanLink = [
        {
            name: "Bracelets & Bangles",
            url: "/bracelets-bangles"

        },
        {
            name: "Rings & Ear Rings",
            url: "/rings-ear-rings"
        },
        {
            name: "Gold Necklaces",
            url: "/necklaces"
        },
        {
            name: "Pendants",
            url: "/pendants"
        },
        {
            name: "Anklets & Toe Rings",
            url: "/anklets-and-ring"
        },
        {
            name: "Khazana Jewellery",
            url: "/khazana-jewellery"
        },
        {
            name: "Bangles Designs",
            url: "/bangle-designs"
        },
        {
            name: "Ring Designs",
            url: "/ring-designs"
        }
    ]

    const InvesLink = [
        {
            name: "FD Invesment",
            url: "/fd-invesment"

        },
        {
            name: "RD Invesment",
            url: "/rd-invesment"
        },
        {
            name: "SIP Invesment",
            url: "/sip-invesment"
        }
    ]

    return (
        <>

            <div className="h-[100vh] flex flex-col w-full px-2 py-4 space-y-7">
                <ul className="font-[700] text-[15px] font-roboto items-start flex flex-col p-4 capitalize">
                    <li>
                        <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-700 md:p-0 dark:text-white dark:hover:text-green-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-700 md:p-0 dark:text-white dark:hover:text-green-400">
                            About Us
                        </Link>
                    </li>
                    <li className="w-full">
                        <button onClick={toggleDropdownLoan} className="flex relative items-center justify-between w-full py-2 px-3 text-gray-700 rounded-sm
                            dark:hover:text-green-400 hover:text-green-700 md:hover:bg-transparent  dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-transparent
                             md:dark:hover:bg-transparent font-[700] text-[16px]">
                            Loan Services <RxCaretDown fontSize={20} className='inline-block ml-auto justify-self-end ' />
                        </button>
                        {isOpenLoan && (
                            <div className="bg-transparent  font-[12px] w-[300px] text-start pl-2 font-roboto">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                    {LoanSerLink.map((LoanSerLinks, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={LoanSerLinks.url} className="block px-4 py-2 hover:text-green-700 text-gray-600 dark:text-[#ccced2] dark:hover:text-white">
                                                    {LoanSerLinks.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link to="/accounts" className="block px-3 py-2 text-gray-700 rounded-sm lg:bg-transparent hover:text-green-700 md:p-0 dark:text-white dark:hover:text-green-400">
                            Accounts
                        </Link>
                    </li>
                    <li>
                        <Link to="/cash-managment-product" className="block px-3 py-2 text-gray-700 rounded-sm lg:bg-transparent hover:text-green-700 md:p-0 dark:text-white dark:hover:text-green-400">
                            Cash Management Product
                        </Link>
                    </li>
                    <li className="w-full">
                        <button onClick={toggleDropdownGold} className="flex relative items-center w-full py-2 px-3 text-gray-700 rounded-sm
                            dark:hover:text-green-400 hover:text-green-700 md:hover:bg-transparent  dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-transparent
                             md:dark:hover:bg-transparent font-[700] text-[16px]">
                            Gold Loan Services <RxCaretDown fontSize={20} className='inline-block ml-auto justify-self-end ' />
                        </button>
                        {isOpenGold && (
                            <div className="bg-transparent  font-[12px] w-[300px] text-start pl-2 font-roboto">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                    {GoldLoanLink.map((GoldLoanLinks, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={GoldLoanLinks.url} className="block px-4 py-2 hover:text-green-700 text-gray-600 dark:text-[#ccced2] dark:hover:text-white">
                                                    {GoldLoanLinks.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="w-full">
                        <button onClick={toggleDropdownInves} className="flex relative items-center justify-between w-full py-2 px-3 text-gray-700 rounded-sm
                            dark:hover:text-green-400 hover:text-green-700 md:hover:bg-transparent  dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-transparent
                             md:dark:hover:bg-transparent font-[700] text-[16px]">
                            Invesments Plan <RxCaretDown fontSize={20} className='inline-block ml-auto justify-self-end' />
                        </button>
                        {isOpenInves && (
                            <div className="bg-transparent  font-[12px] w-[300px] text-start pl-2 font-roboto">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                    {InvesLink.map((InvesLinks, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={InvesLinks.url} className="block px-4 py-2 hover:text-green-700 text-gray-600 dark:text-[#ccced2] dark:hover:text-white">
                                                    {InvesLinks.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </li>

                    <li>
                        <Link to="/contact" className="block px-3 py-2 text-gray-700 rounded-sm lg:bg-transparent hover:text-green-700 md:p-0 dark:text-white dark:hover:text-green-400">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default MobileHeader;