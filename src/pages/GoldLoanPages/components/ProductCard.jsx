import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full overflow-hidden transition bg-[#fff] rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="object-cover w-full h-40 rounded-md"
      />
      <h3 className="px-4 my-3 text-lg font-semibold dark:text-white">{product.title}</h3>
      <p className="px-4 my-2 text-gray-600 dark:text-white">{product.price}</p>
    </div>
  );
};

export default ProductCard;
