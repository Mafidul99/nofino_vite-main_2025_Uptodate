import React from 'react'
import OurTeamsLink from '../../api/ourTeam/ourTeam.json';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";


const OurTeams = () => {

    const socialmedia = [
        {
            icon: {
                facebook: <FaFacebook  />,
                tiwtter: <FaTwitter  />,
                instagram: <FaInstagramSquare  />,
                youyube: <FaYoutube />,
            }
        }
    ]

    return (
        <>
            <section className="mt-[20px]">
                <div className="py-8 px-4 mx-auto max-w-[1200px] text-center lg:py-16 lg:px-6">
                    <div className='animate-slide-fade items-center'>
                        <div className="grid gap-4 grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                            {OurTeamsLink.map((ourTeamLinks) => {
                                const { id, name, designation, images } = ourTeamLinks;
                                return (
                                    <div className="text-center text-gray-500 dark:text-gray-400 dark:bg-gray-700 font-roboto
                                        bg-[#fff] border-green-500 border-b-2 pb-4 rounded-md shadow-md transition duration-300 hover:scale-105" key={id}>
                                        <img className="mx-auto mb-3 w-[100%] px-[1px] py-[1px] rounded-md"
                                            src={images.png} alt={images.alt} />
                                        <h3 className="mb-1 text-[22px] uppercase font-roboto font-bold tracking-tight text-gray-900 dark:text-white hover:text-purple-700 dark:hover:text-green-500">
                                            {name}
                                        </h3>
                                        <p>{designation.common}</p>
                                        {socialmedia.map((socialmedias, index) => {
                                            return (
                                                <ul className="flex justify-center mt-3 space-x-4 text-[20px]">
                                                    <li>
                                                        <a href="#__" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                                            {socialmedias.icon.facebook}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#__" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                            {socialmedias.icon.instagram}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#__" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                                            {socialmedias.icon.tiwtter}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#__" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                                                            {socialmedias.icon.youyube}
                                                        </a>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeams