import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-[#fff] dark:text-white dark:bg-gray-700 rounded-md shadow-sm"
          >
            <img src={product.image} alt={product.name} className="object-cover w-full h-40 mb-2 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500 dark:text-white">{product.category}</p>
            <p className="mt-2 font-bold text-green-600 dark:text-white">${product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No products match your filters.
        </p>
      )}
    </div>
  );
};

export default ProductList;
