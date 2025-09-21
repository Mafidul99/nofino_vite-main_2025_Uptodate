import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block transition border rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="object-cover w-full h-40" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
}
