import React from 'react'
// import FooterMenu from './Footer/FooterMenu';
import { TfiEmail } from "react-icons/tfi";
import { GiRotaryPhone } from "react-icons/gi";
import { RiMapPinLine } from "react-icons/ri";

// Social Icons
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footers = () => {

  const mainMenu = [
    {
      name: "home",
      url: "/"

    },
    {
      name: "About Us",
      url: "/about"

    },
    {
      name: "Digital Solutions",
      url: "/digital-solutions"

    },
    {
      name: "Loan Service",
      url: "/loan-Service"

    },
  ]

  const ourServices = [
    {
      name: "Gold Loan Service",
      url: "/gold-loan-services"

    },
    {
      name: "Invesments Plan",
      url: "/invesments-plan"

    },
    {
      name: "Cash Management Product",
      url: "/cash-managment-product"

    },
  ]

  const helpLink = [
    {
      name: "faq",
      url: "/faq"

    },
    {
      name: "support",
      url: "/support"

    },
  ]

  const contUs = [

    {
      email: "",
      phone: "+91 6002562417 / 7086788028",
      url: "tel:+916002562417",
      icon: <GiRotaryPhone />

    },
    {
      email: "",
      addrs: "Mandia, Mandia, Barpeta, Assam, -781308 India",
      url: "",
      icon: <RiMapPinLine />

    },
    {
      email: "support@nofinofinance.com",
      url: "mailto:support@nofinofinance.com",
      icon: <TfiEmail />

    },
  ]

  const footerLink = [
    {
      name: "Terms & Conditions",
      url: "/terms-conditions"
    },
    {
      name: "Privacy Policy",
      url: "/privacy-policy"
    },
    {
      name: "Disclaimer",
      url: "/disclaimer"
    },
    {
      name: "Refund Policy",
      url: "/refund-policy"
    },

  ]
  return (
    <>
      {/* <FooterMenu/> */}


      <footer className="mt-4 bg-gray-100 dark:bg-gray-700 footer font-roboto">
         <div className="mx-auto max-w-[1200px] px-4 pt-5">
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 ">
            <div className='p-3'>
               <div className="flex justify-start text-teal-600 lg:justify-center sm:justify-start">
                <img src="assets/images/logo/logo-dark1.png" alt="mainLogo" />
              </div>
              <p className="dark:text-[#D6D6D6] mt-3 lg:text-center lg:max-w-full max-w-md font-roboto text-[16px] leading-relaxed text-gray-600 sm:max-w-xs sm:text-left ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                cum itaque neque.
              </p>
              <ul className="flex justify-center gap-6 mt-3 md:gap-6">
                <li>
                  <a href="#_" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook />
                  </a>
                </li>

                <li>
                  <a href="#_" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram />
                  </a>
                </li>

                <li>
                  <a href="#__" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Youtube</span>
                    <FaYoutube />
                  </a>
                </li>

                <li>
                  <a href="#__" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-4 col-span-2 gap-3 px-2 py-2 lg:p-4 md:p-3 lg:grid-cols-2 lg:col-span-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
              <div className="font-roboto text-[16px] sm:text-left">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Main Menu</p>
                <ul className="mt-3 space-y-4 text-sm ">
                  {mainMenu.map((mainMenus, index) => {
                    return (
                      <li key={index}>
                        <Link className="text-gray-700 font-roboto capitalize text-[17px] 
                              transition hover:text-green-600/75 dark:text-[#D6D6D6] dark:hover:text-white" to={mainMenus.url}>
                          {mainMenus.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="font-roboto text-[16px]sm:text-left">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Our Services</p>
                <ul className="mt-3 space-y-4 text-sm">
                  {ourServices.map((ourServ, index) => {
                    return (
                      <li key={index}>
                        <Link className="text-gray-700 font-roboto capitalize text-[17px] 
                                          transition hover:text-green-600/75 dark:text-[#D6D6D6] dark:hover:text-white" to={ourServ.url}>
                          {ourServ.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="font-roboto text-[16px] sm:text-left">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Helpful Links</p>
                <ul className="mt-3 space-y-4 text-sm">
                  {helpLink.map((helpLinks, index) => {
                    return (
                      <li key={index}>
                        <Link className="text-gray-700 font-roboto capitalize text-[17px] 
                                            transition hover:text-green-600/75 dark:text-[#D6D6D6] dark:hover:text-white" to={helpLinks.url}>
                          {helpLinks.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="font-roboto text-[16px] sm:text-left w-full">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Contact Us</p>
                <ul className="w-full mt-3 space-y-4 text-sm">
                  {contUs.map((contacts, index) => {
                    return (
                      <li key={index}>
                        <Link className="flex items-center gap-1.5 hover:text-green-600/75 w-[100%]"
                          to={contacts.url}>
                          <div className="shrink-0 dark:text-[#D6D6D6]  text-gray-900 shadow-sm text-[20px] hover:text-green-600/75" >
                            {contacts.icon}
                          </div>
                          <span className="gird dark:text-[#D6D6D6] dark:hover:text-white font-roboto text-[16px] break-all text-gray-700 hover:text-green-600/75">
                            {contacts.phone}
                            {contacts.addrs}
                            {contacts.email}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-3 sm:gap-1 xs:gap-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <div className="flex w-full justify-cente sm:justify-start">
              <img src="assets/images/footer/Footer-payment-icons.png" alt="Footer-logo" />
            </div>
            <div className="flex items-center justify-center w-full">
              <ul>
                <li>
                  <Link to="/">
                    <img src="assets/images/footer/google_play.png" className="inline-block w-[120px] pr-2 xs:w-20 sm:w-24"
                      alt="Google_Play" />
                  </Link>
                  <Link to="/">
                    <img src="assets/images/footer/App_store.png" className="inline-block w-[120px] xs:w-20 sm:w-24"
                      alt="Googel_Store" />
                  </Link>
                </li>
              </ul>
              <div className="flex items-center px-2">
                <img src="assets/images/footer/iso-9001-logo.png" className="inline-block w-16" alt="ISOImage" />
                <img src="assets/images/footer/pngtree.png" className="inline-block w-20" alt="ISOImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 dark:border-[#d6d6d6cb] border-t py-2.5 w-full xs:px-2 px-5 bg-gray-600  dark:bg-gray-700 bottom-0 left-0 right-0">
          <div className='mx-auto max-w-[1200px] w-full px-4 items-center sm:px-2 sm:mx-1'>
            <div className='grid items-center w-full grid-cols-2 gap-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1'>
              <div className='flex w-full lg:md:justify-center md:text-center sm:text-center xs:text-center'>
                <p className="capitalize text-white font-roboto text-[15px] lg:text-[13px] xs:text-[10px]">
                  Copyright &copy; 2023 Nofino Rural Finance all rights reserved.
                </p>
              </div>
              <div className="w-full md:text-center">
                <div className="flex text-[#D6D6D6] font-roboto text-[15px] lg:text-[13px] justify-end md:text-center 
                            md:justify-center sm:text-center xs:text-center xs:text-[10px]">
                  {footerLink.map((footerLinks, index) => {
                    return (
                      <li key={index} className='list-none text-decoration-line'>
                        <Link className="inline-block px-2 sm:px-[5px] transition hover:text-white xs:text-[10px] sm:text-[11px]" to={footerLinks.url}>
                          {footerLinks.name}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footers;