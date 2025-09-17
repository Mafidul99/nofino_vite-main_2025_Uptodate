import { RxCaretDown } from "react-icons/rx";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { GiHeartEarrings } from "react-icons/gi";
import { GiRing } from "react-icons/gi";
import { GiNecklace } from "react-icons/gi";
import { GiGemPendant } from "react-icons/gi";
import { FaRegLifeRing } from "react-icons/fa";
import { GiNecklaceDisplay } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { GiDiamondRing } from "react-icons/gi";

const HeaderGoldDropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const calLinks = [
        {
            name: "Bracelets & Bangles",
            url: "/bracelets-bangles",
            icons: <GiRing />
        },
        {
            name: "Rings & Ear Rings",
            url: "/rings-ear-rings",
            icons: <GiHeartEarrings />

        },
        {
            name: "Gold Necklaces",
            url: "/necklaces",
            icons: <GiNecklace />

        },
        {
            name: "Pendants",
            url: "/pendants",
            icons: <GiGemPendant />

        },
        {
            name: "Anklets & Toe Rings",
            url: "/anklets-and-ring",
            icons: <FaRegLifeRing />

        },
        {
            name: "Khazana Jewellery",
            url: "/khazana-jewellery",
            icons: <GiNecklaceDisplay />

        },
        {
            name: "Bangles Designs",
            url: "/bangle-designs",
            icons: <LiaRingSolid   />

        },
        {
            name: "Ring Designs",
            url: "/ring-designs",
            icons: <GiDiamondRing  />

        }
    ]

    return (
        <>
            <div className="group relative inline-block text-left">
                <div>
                    
                    <button onClick={toggleDropdown} 
                        onMouseEnter={() => setIsOpen(true)}
                        className="inline-flex justify-center menu-hover font-roboto w-full hover:text-gray-800" >
                            Gold Loan Services
                        <RxCaretDown fontSize={16} className='inline hover:text-gray-800' />
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0  mt-4 w-60 z-50 rounded-md shadow-lg bg-[#fff] ring-1 ring-black ring-opacity-5
                    focus:outline-none dark:bg-gray-700 group-hover:block transition duration-150 ease-in-out" role="menu"  onMouseLeave={() => setIsOpen(false)}>
                        <div className="py-1 " role="none">                            
                            {calLinks.map((calLink, index) => {
                                return (
                                    <Link to={calLink.url}
                                        className="flex px-4 py-[15px] font-roboto text-[15px] text-gray-700 dark:text-white dark:hover:text-green-500
                                         hover:text-green-500 items-center" role="menuitem" >
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

export default HeaderGoldDropDown;