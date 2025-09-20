import React from 'react';

const SidebarFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <aside className="w-full h-full p-4 rounded-lg bg-green-50">
      <h2 className="mb-4 text-xl font-bold">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              className={`block w-full text-left px-3 py-1 rounded ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-200'
              }`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarFilter;
