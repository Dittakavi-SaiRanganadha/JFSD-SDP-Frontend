import { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import { useAuth } from '../context/AuthContext';

export default function Sell() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    type: 'sale',
    bedrooms: '',
    bathrooms: '',
    area: '',
    description: '',
    images: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">List Your Property</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
              <input
                type="number"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
              <input
                type="number"
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Area (sq.ft)</label>
              <input
                type="number"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setFormData({ ...formData, images: files });
              }}
              className="mt-1 block w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            List Property
          </button>
        </form>
      </main>
    </div>
  );
}

// import { useState } from 'react';
// import Navbar from '../components/Header/Navbar';
// import { useProperty } from '../context/PropertyContext';

// export default function Sell() {
//   const { properties, setProperties } = useProperty();
//   const [formData, setFormData] = useState({
//     title: '',
//     price: '',
//     location: '',
//     type: 'sale',
//     bedrooms: '',
//     bathrooms: '',
//     area: '',
//     description: '',
//     images: [] as File[]
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Add the new property to the existing list
//     const newProperty = {
//       ...formData,
//       id: (properties.length + 1).toString(), // Generate a unique ID
//       postedDate: new Date().toISOString().split('T')[0], // Add current date
//       images: formData.images.map((file) => URL.createObjectURL(file)), // Convert images to URLs
//     };

    

//     // Reset the form
//     setFormData({
//       title: '',
//       price: '',
//       location: '',
//       type: 'sale',
//       bedrooms: '',
//       bathrooms: '',
//       area: '',
//       description: '',
//       images: []
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       <main className="max-w-4xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">List Your Property</h1>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Form inputs */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//           >
//             List Property
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// }
