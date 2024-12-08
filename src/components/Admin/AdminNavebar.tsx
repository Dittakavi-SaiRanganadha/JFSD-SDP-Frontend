import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar: React.FC = () => {
  const adminName = localStorage.getItem("username") || "Guest"; // Handle null case with a default value

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("username");
    window.location.reload(); // Reloads the page to reflect logout
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              RealEstate Hub
            </Link>
            <Link
              to="/admin/add-property"
              className="text-gray-700 hover:text-blue-600"
            >
              Add Property
            </Link>
            <Link
              to="/admin/view-properties"
              className="text-gray-700 hover:text-blue-600"
            >
              View Properties
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Admin: {adminName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
