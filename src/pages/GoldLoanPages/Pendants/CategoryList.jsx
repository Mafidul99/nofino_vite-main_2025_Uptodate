export default function CategoryList({ categories, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
