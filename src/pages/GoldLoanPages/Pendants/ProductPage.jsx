import { useParams } from 'react-router-dom';
import products from './data/products';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-8">Product not found.</div>;

  return (
    <div className="container p-8 mx-auto">
      <div className="grid gap-8 md:grid-cols-2">
        <img src={product.image} className="object-cover w-full rounded h-80" alt={product.name} />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-xl text-gray-700">${product.price}</p>
          <p className="mt-6 text-gray-600">This is a great product in the {product.category} category.</p>
          <button className="px-6 py-2 mt-6 text-white bg-green-600 rounded hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
