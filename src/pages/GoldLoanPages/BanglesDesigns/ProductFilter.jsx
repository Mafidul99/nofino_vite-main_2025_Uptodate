// components/ProductFilter.jsx
import React from 'react';

const ProductFilter = ({ categories, onFilter }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
