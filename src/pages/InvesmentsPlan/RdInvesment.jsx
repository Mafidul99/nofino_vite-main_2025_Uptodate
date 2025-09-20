import RdInvesmentCalc from '../../utils/RdInvesmentCalc';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Layouts/Loader';

const RdInvesment = () => {
  const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
      const loadApp = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsPending(false);
      };
  
      loadApp();
    }, []);
  
    if (isPending) {
      return <Loader />;
    }
  return (
    <>
      <section>
        <div className='flex items-center justify-center mt-[40px]  w-ful '>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4 py-3'>
            <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
              <span>Trusted Company</span>
            </div>
            <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
              <span>Rd Invesment Calculator </span>
            </div>
            <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] dark:text-[#D6D6D6] mt-[4px]'>
              <span>Wealth management and insurance solutions for a secure tomorrow</span>
            </div>
          </div>
        </div>
        <div className="items-center w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full">
            <div className="w-[100%] grid gap-2 grid-cols-1">
              <RdInvesmentCalc />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RdInvesment;