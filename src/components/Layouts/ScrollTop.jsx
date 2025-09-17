import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollTop = () => {

    const [showButton, setShowButton] = useState(false);

  const handleGoToTop = () => {
    if (window.scrollY > 250) { 
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleGoToTop);
    return () => {
      window.removeEventListener('scroll', handleGoToTop);
    };
  }, []);
    
    return (
        <>
        <div className="flex items-center text-center justify-items-center ">
            {showButton && (
            <div className="w-full transition duration-300 bg-green-600 dark:bg-gray-500 dark:border-[1px] dark:border-[#D6D6D6] shadow-xl top-btn hover:scale-110" onClick={scrollToTop}>
                <FaArrowUp className="items-center justify-center text-center top-btn--icon justify-items-center"/>
                <div className="absolute flex mt-[90px] font-[500] text-[13px] text-[#a5a5a5b4] items-center text-center leading-3
                 justify-items-center font-roboto dark:text-[#D6D6D6]">
                  Scroll to Top
                </div>                
            </div>
            
            )}            
        </div>           

        </>
    );
};



export default ScrollTop;