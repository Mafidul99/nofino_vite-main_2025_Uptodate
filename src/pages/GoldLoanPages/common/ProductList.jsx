import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 120, image: 'https://media.gettyimages.com/id/171302954/photo/groceries.jpg?s=612x612&w=gi&k=20&c=V1rR0STPdGb4AF4N9cvx0ZjNQodolWAOVHkLDqj4ATI=' },
  { id: 2, name: 'Smart Watch', price: 90, image: 'https://media.gettyimages.com/id/171302954/photo/groceries.jpg?s=612x612&w=gi&k=20&c=V1rR0STPdGb4AF4N9cvx0ZjNQodolWAOVHkLDqj4ATI=' },
  { id: 3, name: 'T-Shirt', price: 25, image: 'https://media.gettyimages.com/id/171302954/photo/groceries.jpg?s=612x612&w=gi&k=20&c=V1rR0STPdGb4AF4N9cvx0ZjNQodolWAOVHkLDqj4ATI=' },
  { id: 4, name: 'Sneakers', price: 70, image: 'https://media.gettyimages.com/id/171302954/photo/groceries.jpg?s=612x612&w=gi&k=20&c=V1rR0STPdGb4AF4N9cvx0ZjNQodolWAOVHkLDqj4ATI=' },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-3 gap-3 rounded-md">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
