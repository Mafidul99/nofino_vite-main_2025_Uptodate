
import { Link } from 'react-router-dom'
import { BiSupport } from "react-icons/bi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import DarkModeToggle from '../../Layouts/DarkModeToggle';
import TopbarDropdown from '../../../dropdowns/TopbarDropdown';

const Topbar = () => {
    return (
        <>
            <div className='items-center w-full py-2.5 bg-gray-900' >
                <div className='flex mx-auto max-w-[1200px] w-full px-4 items-center'>
                    <div className='grid items-center w-full grid-cols-2 gap-1 sm:grid-cols-1'>
                        <div className='flex items-center text-[12px] font-roboto w-full sm:text-center sm:items-center sm:justify-center'>
                            <span className='pr-4 text-[#ccced2] items-center justify-center'>
                                <Link to="" className='hover:text-white font-roboto'> Skip to main content </Link>
                            </span>
                            <div className='flex text-[12px] items-center'>
                                <div className='flex items-center pl-3 pr-3 border-dashed border-r-[#ccced2] border-l-[1px] border-r-[1px]'>
                                    <ul className='flex list-none gap-[15px] text-[#ccced2] font-roboto '>
                                        <li>
                                            <Link className='text-[12px] hover:text-white' to="">A-</Link>
                                        </li>
                                        <li>
                                            <Link className='text-[12px] hover:text-white' to="">A</Link>
                                        </li>
                                        <li>
                                            <Link className='text-[12px] hover:text-white' to="">A+</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex text-[12px] items-center'>
                                <div className='flex items-center  text-[12px]'>
                                    <span className='text-[#ccced2] hover:text-white'>
                                        <DarkModeToggle />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-auto text-[#ccced2] font-roboto items-center text-[12px] h-[24px] sm:ml-0 sm:text-center sm:items-center sm:justify-center'>
                            <Link to="/support" className='inline-flex items-center justify-center mr-2 hover:text-white'>
                                <BiSupport fontSize={12} className='mr-1 hover:text-white' /> Support
                            </Link>
                            <div className='flex text-[15px] items-center hover:text-white xs:text-[10px] 
                                border-dashed border-r-[#ccced2] border-l-[1px] border-r-[1px]'>
                                <TopbarDropdown />
                            </div>
                            <div className='flex text-[12px] items-center pl-2 font-roboto xs:text-[10px]'>
                                <Link to="/" className='text-[12px] hover:text-white mr-2'> Personal Banking
                                    <LuSquareArrowOutUpRight fontSize={16} className='inline-block ml-1 hover:text-white' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar;