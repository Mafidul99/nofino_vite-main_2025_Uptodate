// src/components/SupportLayout.jsx
import React from 'react';

const SupportLayout = ({ title, children }) => (
  <div className="p-6">
    <div className="mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">{title}</h1>
      <div className="px-4 py-4 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700 dark:text-white">
        {children}
      </div>
    </div>
  </div>
);

export default SupportLayout;
