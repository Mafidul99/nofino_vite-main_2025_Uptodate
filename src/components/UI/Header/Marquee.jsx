import React from 'react'

const Marquee = ({ children }) => {
      return (
        <div className='w-full overflow-hidden flex'>
          <div className="marquee-content flex gap-2 items-center animate-marquee w-full ">
            {children}
          </div>
        </div>
      );
    };

export default Marquee;