import React from 'react'
import SubmitFrom from '../SubmitFromFile/SubmitFrom';

const BlApplyFrom = () => {
    
    return (
        <>
            <section>
                <div className='flex items-center justify-center mt-[40px]  w-ful '>
                    <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4'>
                        <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
                            <span>Trusted Company</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
                            <span>Business Loan Application</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] dark:text-[#D6D6D6] mt-[4px]'>
                            <span>Wealth management for a secure</span>
                        </div>
                    </div>
                </div>
                <div className="items-center w-full relative">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4">
                        <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                            
                            {/* Form Submit Dialog */}
                            <SubmitFrom />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default BlApplyFrom;