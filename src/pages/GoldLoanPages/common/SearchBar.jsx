
import { FiSearch } from "react-icons/fi";
export default function SearchBar() {
  return (
    <div className="flex items-center pl-2 mb-4 bg-gray-700 rounded-md ">
        <FiSearch size={25} className="items-center justify-center font-bold text-white font-roboto"/>        
      <input      
        type="text"
        placeholder="Search products..."
        className="w-full p-2.5 dark:bg-gray-700 rounded-e-md focus:outline-none focus:ring-2 focus:ring-green-500 ml-2"
        
      />
    </div>
  );
}
