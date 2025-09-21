import React from 'react'

const CategoryList = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 gap-4 my-6 md:grid-cols-4">
      {categories.map((category, i) => (
        <div key={i} className="p-4 text-center bg-gray-100 rounded shadow">
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
