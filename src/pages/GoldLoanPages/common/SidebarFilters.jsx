export default function SidebarFilters() {
  return (
    <div className="bg-[#fff] dark:bg-gray-700 dark:text-white p-4 rounded-md shadow my-3">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">Category</label>
        <select className="w-full border rounded p-2 dark:bg-gray-600">
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Price Range</label>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </div>
  );
}
