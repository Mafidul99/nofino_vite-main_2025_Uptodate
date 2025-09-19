
import { RxCaretDown } from "react-icons/rx";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const TopbarDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const calLinks = [
        {
            name: "FD Calculator",
            url: "/fd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "EMI Calculator",
            url: "/loan-emi-calculator"

        },
    ]

    return (
        <div className="relative inline-block text-left">
            <div>
                <button onClick={toggleDropdown}
                    onMouseEnter={() => setIsOpen(true)}
                    className="inline-flex justify-center text-[#ccced2] text-[12px] pr-2 pl-2 font-roboto w-full focus:outline-none" >
                    Calculator
                    <RxCaretDown fontSize={16} className='inline hover:text-white' />
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-left absolute left-0  mt-2 w-60 z-50 rounded-md shadow-lg bg-[#fff] ring-1 ring-black ring-opacity-5
                    focus:outline-none dark:bg-gray-700 " role="menu" >
                    <div className="py-1" role="none">
                        {calLinks.map((calLink, index) => {
                            return (
                                <Link to={calLink.url}
                                    className="block px-4 py-2 text-sm text-gray-700 font-roboto dark:text-white dark:hover:text-green-500 hover:text-green-500" role="menuitem" key={index}>
                                    {calLink.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopbarDropdown;