import React from 'react';

const OtherContent = () => {
  return (
    <div className="p-6 my-4 rounded-lg bg-gray-50">
      <h2 className="mb-4 text-2xl font-semibold">Featured Deals</h2>
      <p className="mb-4 text-gray-700">
        Check out our current promotions and get exclusive discounts for new customers!
      </p>
      {/* Example of a promotional banner or any content */}
      <div className="p-4 bg-blue-100 rounded-lg">
        <h3 className="text-xl font-bold">Limited Time Offer</h3>
        <p className="mt-2">Get extra 20% off on all electronics. Use code <strong>SAVE20</strong></p>
      </div>
    </div>
  );
};

export default OtherContent;
