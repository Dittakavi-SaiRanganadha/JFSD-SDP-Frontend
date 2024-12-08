import { FiSearch, FiMapPin } from 'react-icons/fi';

interface SearchBarProps {
  location: string;
  setLocation: (value: string) => void;
  propertyType: string;
  setPropertyType: (value: string) => void;
}

export default function SearchBar({
  location,
  setLocation,
  propertyType,
  setPropertyType,
}: SearchBarProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <form className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <FiMapPin className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
        </select>

        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <FiSearch />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
