import React from 'react';

const categories = ['All', 'Phones', 'Laptops', 'Tablets'];

const ProductFilter = ({ selectedCategory, setSelectedCategory, maxPrice, setMaxPrice }) => {
  return (
    <div className='items-center px-3 py-3 bg-[#fff] rounded-md dark:bg-gray-700'>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="text-lg font-semibold ">Filters</h2>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
          Max Price: ${maxPrice}
        </label>
        <input
          type="range"
          min={100}
          max={2000}
          step={100}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full sm:w-64"
        />
      </div>
    </div>
    </div>
  );
};

export default ProductFilter;
