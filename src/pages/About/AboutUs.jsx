import React from 'react'
import AboutContent from './AboutContent';
import OurTeams from './OurTeams';


const AboutUs = () => {
  return (
    <div>
      <section>
        <div className='flex items-center justify-center mt-[40px] w-ful '>
          <div className='max-w-[1200px] w-full items-center justify-center pl-[70px]'>
            <div className='flex w-[100%] font-roboto text-[30px] xs:text-[20px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
              <span>Get To Know About Us</span>
            </div>
            <div className='flex w-[100%] font-roboto text-[40px] xs:text-[30px] tracking-[.9px] font-[800] mt-[-15px] dark:text-[#D6D6D6] uppercase'>
              <span>Company About US</span>
            </div>
            <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] mt-[4px] dark:text-[#D6D6D6]'>
              <span>Nofino Rural Finance Private Limited</span>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center w-full  mt-[40px] bg-[#fafafa] dark:bg-gray-700'>
          <AboutContent />
        </div>
        <div className='flex items-center justify-center mt-[40px] w-ful '>
          <div className='max-w-[1200px] w-full items-center justify-center pl-[70px]'>
            <div className='flex w-[100%] font-roboto text-[30px] xs:text-[20px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
              <span>Team Member</span>
            </div>
            <div className='flex w-[100%] font-roboto text-[40px] xs:text-[30px] tracking-[.9px] font-[800] mt-[-15px] dark:text-[#D6D6D6] uppercase'>
              <span>Our Awesome Creative <br/> Team Member</span>
            </div>
            <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] mt-[4px] dark:text-[#D6D6D6]'>
              <span>Nofino Rural Finance Private Limited</span>
            </div>
          </div>
        </div>
        <OurTeams />
      </section>
    </div>
  )
}

export default AboutUs;