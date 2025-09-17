
import React from 'react'
// import { IoSunnyOutline } from "react-icons/io5";
import { useDarkMode } from '../../context/ThemeContext';
import { LuSunMoon } from "react-icons/lu";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

const DarkModeToggle = () => {
    const {darkMode, setDarkMode} = useDarkMode()
    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)} className='flex items-center justify-center w-[40px] h-[24px] cursor-pointer'>
                {darkMode ? <LuSunMoon className='size-5'/> : <WiMoonAltThirdQuarter className='size-5'/> }
            </button>
        </>
    )
}

export default DarkModeToggle;