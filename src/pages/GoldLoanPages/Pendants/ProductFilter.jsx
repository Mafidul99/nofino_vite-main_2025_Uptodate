import CategoryList from "./CategoryList";

export default function ProductFilter({  setFilter, categories }) {
  return (
    <div className="mb-6">
      <CategoryList
        categories={['All', ...categories]}
        onSelect={(cat) => setFilter(cat)}
      />
    </div>
  );
}
