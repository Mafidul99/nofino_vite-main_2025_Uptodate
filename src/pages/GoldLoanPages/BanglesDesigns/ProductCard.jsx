// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 transition border rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="object-cover w-full h-40 mb-3" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;
