export default function ProductCard({ product }) {
  return (
    <div className="bg-[#fff] dark:bg-gray-700 rounded-md shadow-md p-4 hover:shadow-lg transition dark:text-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600 dark:text-white">${product.price}</p>
      <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Apply Now</button>
    </div>
  );
}
