import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid w-full grid-cols-3 gap-3">
      {products.map((p, idx) => (
        <ProductCard key={idx} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;
