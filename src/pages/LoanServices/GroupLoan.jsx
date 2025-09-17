import React from 'react'
import { Link } from "react-router-dom";
import PDFImg from "../../assets/pdf3.png";
import IconApply from "../../assets/apply.png";
import ServImg from "../../assets/loanservice/g_loans.svg";

import { TbHeadphonesFilled } from "react-icons/tb";
import { FcOk } from "react-icons/fc";

const GroupLoan = () => {
  return (
    <>
      <section>
        <div className='flex items-center justify-center mt-[40px]  w-ful '>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4'>
            <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
              <span>Trusted Company</span>
            </div>
            <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
              <span>Group Loan Services</span>
            </div>
            <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] dark:text-[#D6D6D6] mt-[4px]'>
              <span>Wealth management for a secure</span>
            </div>
          </div>
        </div>
        <div className="items-center w-full mt-[30px] mb-[40px] relative">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4">
            <div className="grid w-full grid-cols-3 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
              <div className="items-center mb-[0px] pb-[0px] relative">
                <div className="items-center justify-center text-center shadow-md call-do-action-feature">
                  <TbHeadphonesFilled size={80} className="items-center justify-center w-full text-purple-600" />
                  <div className="text-green-600 font-roboto text-[25px] font-[700] py-2">
                    <h5>Have any Questions? Call us Today!</h5>
                  </div>
                  <div className="font-roboto text-[23px] text-white font-[600] py-2">
                    <h4><Link to="tel:+916002562417" className='hover:text-green-300'>+91 6002562417</Link></h4>
                  </div>
                  <div className="font-roboto text-[20px] text-white font-[500] py-2 hover:text-green-300">
                    <p><Link to="mailto:support@nofinofinance.com" className='hover:text-green-300'>support@nofinofinance.com</Link></p>
                  </div>
                </div>
                <div className="px-3 pt-3 pb-8 mt-4 rounded-md shadow-md bg-slate-50 dark:bg-gray-700">
                  <h3 className="font-roboto text-[24px] dark:text-[#D6D6D6] text-green-600 font-[600] border-b-[2px]
                             border-b-gray-500">Download</h3>
                  <div className="flex mx-3 mt-3 border-[1px] border-gray-400 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500">
                    <Link to="#" target="_blank" className='hover:text-gray-600 font-roboto font-[500] text-[15px]
                             dark:text-[#D6D6D6]'>
                      <img src={PDFImg} alt="PDFImg" className='inline-block mr-2' />GeneralForm.pdf (1.04 MB)
                    </Link>
                  </div>
                  <div className="flex mx-3 mt-3 border-[1px] border-gray-400 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500">
                    <Link to="#" target="_blank" className='hover:text-gray-600 font-roboto font-[500] text-[15px] 
                            dark:text-[#D6D6D6] '>
                      <img src={PDFImg} alt="PDFImg2" className='inline-block mr-2' />LoanForm.pdf (469.50 KB)
                    </Link>
                  </div>
                </div>
                <div className="items-center mb-0 justify-content-end px-3 py-4 mt-[60px] text-center text-gray-600
                         dark:text-[#D6D6D6] rounded-md justify-items-center bg-slate-200 dark:bg-gray-700 shadow-md">
                  <div className="py-2 font-roboto">
                    <h5 className='text-[24px] font-[700] py-2 font-roboto'>About Our Country</h5>
                    <p className='text-[16px] py-2'>We are here to help our customer any time. You can call on 24/7 To Answer Your Question.</p>
                  </div>
                  <div className="flex items-center justify-center py-2 mb-3 mt-2 border-[1px] border-gray-400 p-2 w-44 rounded-md
                           bg-green-100 hover:bg-green-200 text-gray-600 font-roboto font-[600] text-[18px]">
                    <Link to="/grop-apply-from" className='hover:text-gray-600'>
                      <img src={IconApply} alt="Icon33" className='inline-block mr-2' /> Apply Now</Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-[#f8f8f8] dark:bg-gray-700 p-4 rounded-md shadow-md my-auto">
                <div className="flex flex-col items-start justify-center w-full ">
                  <div className="items-center justify-center w-full mb-3 text-left font-roboto text-gray-800 dark:text-[#D6D6D6]">
                    <h3 className='text-[30px] font-[700] py-1 underline uppercase'>Group Loan Overview</h3>
                    <p className='text-[16px] py-1 text-justify'>A group loan from Nofino Rural Finance Private Limited enables members of a community to 
                      access low-interest financing collectively, fostering mutual support and shared responsibility. This collaborative approach
                       empowers individuals to achieve their goals, strengthens community bonds, and promotes sustainable economic growth in North East India.
                    </p>
                  </div>
                  <div className="py-2 text-center">
                    <img src={ServImg} alt="imageServ3" className='w-full h-auto rounded-md' />
                  </div>
                  <div className="items-center justify-center w-full text-left font-roboto text-gray-800 dark:text-[#D6D6D6]">
                    <h3 className='text-[30px] font-[700] py-2 font-roboto underline'>Required Documents:</h3>
                  </div>
                  <div className="items-center justify-center tracking-[1px] leading-[35px] w-full py-2 mb-3 text-left font-roboto text-gray-800 dark:text-[#D6D6D6]">
                    <ul className="list-unstyled text-gray-800 dark:text-[#D6D6D6] text-[16px] font-roboto">
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>PAN CARD.</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>AADHAR CARD.</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>PAN CARD (Guarantor).</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>AADHAR CARD (Guarantor).</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>Identity Proof: Aadhaar Card, Driving license, Passport, or Voter ID.</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2 '>Address Proof: Utility Bill, Rent Agreement, or Passport, Voter Card, Job Card, Driving license, Bank Passbook.</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>Income Proof: Salary Slips, Bank Statements (last 6 months), or Income Tax Returns.</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>Business Proof (if applicable): GST Registration, Business License, or Financial Statements.</span>
                      </li>
                      <li className='flex items-center'>
                        <span><FcOk size={23} /></span>
                        <span className='inline-block ml-2'>Photographs: Recent passport-sized photo.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GroupLoan;