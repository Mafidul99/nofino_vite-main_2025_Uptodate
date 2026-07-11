import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiHome, HiUser, HiPhone, HiBriefcase, HiCash, HiChartBar } from "react-icons/hi";

export const MobileHeader = () => {
    const [isOpenLoan, setIsOpenLoan] = useState(false);
    const [isOpenGold, setIsOpenGold] = useState(false);
    const [isOpenInves, setIsOpenInves] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const toggleDropdownLoan = () => {
        setIsOpenLoan(!isOpenLoan);
        setIsOpenGold(false);
        setIsOpenInves(false);
    };
    const toggleDropdownGold = () => {
        setIsOpenGold(!isOpenGold);
        setIsOpenLoan(false);
        setIsOpenInves(false);
    };
    const toggleDropdownInves = () => {
        setIsOpenInves(!isOpenInves);
        setIsOpenLoan(false);
        setIsOpenGold(false);
    };

    const LoanSerLink = [
        { name: "Personal Loan", url: "/personal-loan", icon: "👤" },
        { name: "Business Loan", url: "/business-loan", icon: "💼" },
        { name: "Group Loan", url: "/group-loan", icon: "👥" },
        { name: "Product Loan", url: "/product-loan", icon: "📦" },
        { name: "Loan Against Vehicle", url: "/loan-against-vehicle", icon: "🚗" }
    ];

    const GoldLoanLink = [
        { name: "Bracelets & Bangles", url: "/bracelets-bangles", icon: "📿" },
        { name: "Rings & Ear Rings", url: "/rings-ear-rings", icon: "💍" },
        { name: "Gold Necklaces", url: "/necklaces", icon: "📿" },
        { name: "Pendants", url: "/pendants", icon: "🔮" },
        { name: "Anklets & Toe Rings", url: "/anklets-and-ring", icon: "⛓️" },
        { name: "Khazana Jewellery", url: "/khazana-jewellery", icon: "👑" },
        { name: "Bangles Designs", url: "/bangle-designs", icon: "📿" },
        { name: "Ring Designs", url: "/ring-designs", icon: "💍" }
    ];

    const InvesLink = [
        { name: "FD Investment", url: "/fd-invesment", icon: "🏦" },
        { name: "RD Investment", url: "/rd-invesment", icon: "💰" },
        { name: "SIP Investment", url: "/sip-invesment", icon: "📈" }
    ];

    const mainNavLinks = [
        { name: "Home", url: "/", icon: HiHome },
        { name: "About Us", url: "/about", icon: HiUser },
        { name: "Accounts", url: "/accounts", icon: HiBriefcase },
        { name: "Cash Management Product", url: "/cash-managment-product", icon: HiCash },
        { name: "Contact Us", url: "/contact", icon: HiPhone }
    ];

    return (
        <div className="flex flex-col w-full h-screen px-4 py-4 overflow-y-auto bg-slate-50 dark:bg-gray-900">
            {/* Header with Brand */}
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    Main Menu
                </span>
                {/* <span className="text-xs text-gray-400 dark:text-gray-500">v2.0</span> */}
            </div>

            <ul className="space-y-1 font-roboto">
                {/* Main Navigation Links */}
                {mainNavLinks.map((item) => (
                    <li key={item.name}>
                        <Link 
                            to={item.url} 
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 transition-all duration-200 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-xl group"
                            onClick={() => setActiveLink(item.name)}
                        >
                            <item.icon className="text-xl text-gray-400 transition-colors dark:text-gray-500 group-hover:text-emerald-500" />
                            <span className="text-sm font-medium">{item.name}</span>
                            {activeLink === item.name && (
                                <span className="ml-auto w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                            )}
                        </Link>
                    </li>
                ))}

                {/* Loan Services Dropdown */}
                <li className="w-full">
                    <button 
                        onClick={toggleDropdownLoan} 
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 transition-all duration-200 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-xl group"
                    >
                        <div className="flex items-center gap-3">
                            <HiBriefcase className="text-xl text-gray-400 transition-colors dark:text-gray-500 group-hover:text-emerald-500" />
                            <span className="text-sm font-medium">Loan Services</span>
                        </div>
                        {isOpenLoan ? (
                            <RxCaretUp fontSize={22} className="transition-transform duration-300 text-emerald-500" />
                        ) : (
                            <RxCaretDown fontSize={22} className="text-gray-400 transition-transform duration-300 group-hover:text-emerald-500" />
                        )}
                    </button>
                    
                    {isOpenLoan && (
                        <div className="pl-2 mt-1 ml-4 border-l-2 border-emerald-200 dark:border-emerald-800 animate-slideDown">
                            <ul className="space-y-0.5">
                                {LoanSerLink.map((item, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={item.url} 
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                                        >
                                            <span className="text-base">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>

                {/* Gold Loan Services Dropdown */}
                <li className="w-full">
                    <button 
                        onClick={toggleDropdownGold} 
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 transition-all duration-200 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-xl group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-xl">🏅</span>
                            <span className="text-sm font-medium">Gold Loan Services</span>
                        </div>
                        {isOpenGold ? (
                            <RxCaretUp fontSize={22} className="transition-transform duration-300 text-emerald-500" />
                        ) : (
                            <RxCaretDown fontSize={22} className="text-gray-400 transition-transform duration-300 group-hover:text-emerald-500" />
                        )}
                    </button>
                    
                    {isOpenGold && (
                        <div className="pl-2 mt-1 ml-4 border-l-2 border-amber-200 dark:border-amber-800 animate-slideDown">
                            <ul className="space-y-0.5">
                                {GoldLoanLink.map((item, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={item.url} 
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                                        >
                                            <span className="text-base">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>

                {/* Investment Plans Dropdown */}
                <li className="w-full">
                    <button 
                        onClick={toggleDropdownInves} 
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 transition-all duration-200 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-xl group"
                    >
                        <div className="flex items-center gap-3">
                            <HiChartBar className="text-xl text-gray-400 transition-colors dark:text-gray-500 group-hover:text-emerald-500" />
                            <span className="text-sm font-medium">Investment Plans</span>
                        </div>
                        {isOpenInves ? (
                            <RxCaretUp fontSize={22} className="transition-transform duration-300 text-emerald-500" />
                        ) : (
                            <RxCaretDown fontSize={22} className="text-gray-400 transition-transform duration-300 group-hover:text-emerald-500" />
                        )}
                    </button>
                    
                    {isOpenInves && (
                        <div className="pl-2 mt-1 ml-4 border-l-2 border-blue-200 dark:border-blue-800 animate-slideDown">
                            <ul className="space-y-0.5">
                                {InvesLink.map((item, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={item.url} 
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                                        >
                                            <span className="text-base">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>

                {/* Quick Action Button */}
                <li className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                        to="/apply-loan" 
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-emerald-500/25"
                    >
                        <span>🚀</span>
                        <span>Apply for Loan Now</span>
                    </Link>
                </li>

                {/* Footer Info */}
                <li className="pt-4 mt-2">
                    <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-400 dark:text-gray-500">
                        <span>© 2026 Nofino Finance</span>
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Online
                        </span>
                    </div>
                </li>
            </ul>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-slideDown {
                    animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
            `}</style>
        </div>
    );
};

export default MobileHeader;