import React from 'react'
import { NavLink } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterMenu = () => {
  return (
    <>
    <footer>
        <div className="footer py-10 mt-[50px] font-roboto ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <div className="about-company">
                    <div className="footer-logo mb-10">
                      <img src="assets/images/logo/logo-dark1.png" alt="Footer-logo" />
                    </div>
                    <p className='text-white font-roboto text-[15px]'>Welcome to Nofino Rural Finance, empowering communities through accessible financial
                      services.
                      Together, let's build a brighter, more prosperous future.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <div className="footer-quick-link">
                    <div className="footer-widget-title">
                      <h5 className='text-white border-b-[2px] border-solid items-center text-[20px]'>Loan Section</h5>
                    </div>
                    <div className="footer-helpful-links text-white text-[15px]">
                      <ul>
                        <li><NavLink to="/personal">Personal Loan</NavLink></li>
                        <li><NavLink to="/business">Business Loan</NavLink></li>
                        <li><NavLink to="/group">Group Loan</NavLink></li>
                        <li><NavLink to="/product">Product Loan</NavLink></li>
                        <li><NavLink to="/gold-loan">Gold Loan</NavLink></li>
                        <li><NavLink to="/vehicle">Loan Against Vehicle</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <div className="footer-quick-link">
                    <div className="footer-widget-title font-bold text-[20px]">
                      <h5 className='text-white border-b-[2px] border-solid items-center text-[20px]'>Support</h5>
                    </div>
                    <div className="footer-helpful-links text-white text-[15px]">
                      <ul>
                        <li><NavLink to="/privacy-policy">Praivacy Policy</NavLink></li>
                        <li><NavLink to="/terms-condition-product">Terms&Condition Product</NavLink></li>
                        <li><NavLink to="/apply-from">Application From</NavLink></li>
                        <li><NavLink to="/refund-policy">Refund Policy</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <div className="footer-contact">
                    <div className="footer-widget-title">
                      <h5 className='text-white border-b-[2px] border-solid items-center text-[20px] pb-0'>Contact</h5>
                    </div>
                    <p><b>Adress: </b> Mandia Gaon, Mandia, Barpeta, Assam - 781308 India</p>
                    <p><b>Telephone: </b> +91 6002562417 / +91 7086788028 </p>
                    <p><b>Email: </b> <NavLink to="mailto:support@nofinofinance.com" className='text-red-500'>support@nofinofinance.com</NavLink> </p>
                    <div className="footer-social-icon d-flex ">
                            <span>Follow Us:</span>
                      <ul className='text-red-600 text-[20px]'>
                        <li><NavLink to="/"><span><FaFacebookF/></span></NavLink></li>
                        <li><NavLink to="/"><span><FaTwitter/></span></NavLink></li>
                        <li><NavLink to="/"><span><FaInstagram/></span></NavLink></li>
                        <li><NavLink to="/"><span><FaYoutube/></span></NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-7">
                  <div className="footer-logo2 pt-2 flex items-center justify-center">
                    <img src="assets/images/footer/Footer-payment-icons.png" alt="Footer-logo" />
                  </div>
                </div>
                <div className="col-md-5 py-2 flex items-center ml-auto justify-center">
                  <ul>
                    <li>
                      <NavLink to="/">
                        <img src="assets/images/footer/google_play.png" className="googeimg pb-2"
                          alt="Google Play" />
                      </NavLink>
                      <NavLink to="/">
                        <img src="assets/images/footer/App_store.png" className="googeimg"
                          alt="Googel Store" />
                      </NavLink>                        
                    </li>
                  </ul>
                  <div className="flex px-2 items-center">
                    <img src="assets/images/footer/iso-9001-logo.png" className="isoimag inline size-20" alt="ISOImage" />
                        <img src="assets/images/footer/pngtree.png" className="isoimag inline size-15" alt="ISOImage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-section items-center justify-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="footer-copyright-text text-white font-roboto text-[14px] items-center justify-center">
                  <p>Copyright &copy; 2023 Nofino Rural Finance all rights reserved. </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="footer-copyright-link text-white items-center justify-center">
                  <ul>
                    <li><NavLink to="/terms-conditions">Terms & Condition</NavLink></li>
                    <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                    <li><NavLink to="/disclaimer">Disclaimer</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
  )
}

export default FooterMenu;

