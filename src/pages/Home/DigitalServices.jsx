

import { SiBackbone } from "react-icons/si";
import { FaBug } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { TbTransactionRupee } from "react-icons/tb";
import ConutSection from "./CountSection";

export const DigitalServices = () => {

    const cardLinks = [
        {
            icon: <SiBackbone/>,
            name: "Easy loan small business and essential product.",
            number: "01"
        },
        {
            icon: <FaBug/>,
            name: "Get your loan within 6 hours of Application approval.",
            number: "02"
        },
        {
            icon: <BsCashCoin/>,
            name: "Get your loan within 6 hours of Application approval.",
            number: "03"
        },
        {
            icon: <TbTransactionRupee/>,
            name: "Easy EMI method for repayment without Burden.",
            number: "04"
        }
        
    ]
    return (
        <>
            <section>
                <div className='flex items-center justify-center mt-[40px]  w-ful '>
                    <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4'>
                        <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
                            <span>Trusted Company</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
                            <span>Most of the People Trust on <br /> Us For Fast Services</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] dark:text-[#D6D6D6] mt-[4px]'>
                            <span>Wealth management and insurance solutions for a secure tomorrow</span>
                        </div>
                    </div>
                </div>

                <div className="items-center w-full bg-[#271151] dark:bg-gray-900 pt-4 pb-[60px] mt-[30px] mb-[40px] relative">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4">
                        <div className="w-[100%] grid gap-4 grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                            {cardLinks.map((cardlink, index) => {
                                return <div className="items-center w-full">
                                <div className="choose-us-single-feature ">
                                    <div className="choose-us-feature-wrapper white dark:bg-gray-700">                                        
                                         <div className="choose-us-content">
                                            <div className="choose-us-feature-txt">
                                                <p>{cardlink.name}</p>
                                                </div>
                                            <div className="choose-us-icon">
                                                <span className="flex text-[60px] text-white items-center">
                                                    {cardlink.icon}
                                                </span>
                                            </div>
                                            <div className="choose-us-btn dark:bg-gray-600"></div>
                                            <div className="choose-us-number">
                                                <h2>{cardlink.number}</h2>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            })}
                        </div>
                    </div>
                </div>
                <ConutSection/>
            </section>
        </>
    )
}

export default DigitalServices;