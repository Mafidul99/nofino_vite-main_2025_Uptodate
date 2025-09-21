
import { FiSearch } from "react-icons/fi";
export default function SearchBar() {
  return (
    <div className="flex mb-4 items-center bg-gray-700 rounded-md pl-2 ">
        <FiSearch size={25} className="justify-center items-center text-white font-roboto font-bold"/>        
      <input      
        type="text"
        placeholder="Search products..."
        className="w-full p-2.5 dark:bg-gray-700 rounded-e-md focus:outline-none focus:ring-2 focus:ring-green-500 ml-2"
        
      />
    </div>
  );
}
