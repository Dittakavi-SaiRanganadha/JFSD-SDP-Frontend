import { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import SearchBar from '../components/Home/SearchBar';
import PropertyCard from '../components/Home/PropertyCard';
import { Property } from '../types/property';

const rentProperties: Property[] = [
  {
    id: '1',
    title: 'Furnished 2BHK Apartment',
    price: 25000,
    location: 'Pune, Maharashtra',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    description: 'Fully furnished apartment with modern amenities',
    images: ['https://images.unsplash.com/photo-1560448075-bb485b067938?w=500&auto=format'],
    amenities: ['Furnished', 'Security', 'Parking'],
    postedDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Spacious 3BHK with Balcony',
    price: 35000,
    location: 'Delhi, NCR',
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    description: 'Spacious apartment with great views',
    images: ['https://images.unsplash.com/photo-1560449013-0c3d52f5b2c9?w=500&auto=format'],
    amenities: ['Balcony', 'Gym', 'Swimming Pool'],
    postedDate: '2024-03-14'
  },
  {
    id: '3',
    title: 'Furnished 2BHK Apartment',
    price: 25000,
    location: 'Pune, Maharashtra',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    description: 'Fully furnished apartment with modern amenities',
    images: ['https://images.unsplash.com/photo-1560448075-bb485b067938?w=500&auto=format'],
    amenities: ['Furnished', 'Security', 'Parking'],
    postedDate: '2024-03-15',
  },
  {
    id: '4',
    title: 'Spacious 3BHK with Balcony',
    price: 35000,
    location: 'Delhi, NCR',
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    description: 'Spacious apartment with great views',
    images: ['https://images.unsplash.com/photo-1560449013-0c3d52f5b2c9?w=500&auto=format'],
    amenities: ['Balcony', 'Gym', 'Swimming Pool'],
    postedDate: '2024-03-14',
  },
  {
    id: '5',
    title: 'Studio Apartment in City Center',
    price: 18000,
    location: 'Mumbai, Maharashtra',
    type: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    description: 'Compact studio ideal for individuals or couples',
    images: ['https://images.unsplash.com/photo-1600607682179-0e25d2e8e401?w=500&auto=format'],
    amenities: ['Furnished', '24/7 Security', 'Close to Metro'],
    postedDate: '2024-03-13',
  },
  {
    id: '6',
    title: 'Luxury 4BHK Penthouse',
    price: 75000,
    location: 'Bangalore, Karnataka',
    type: 'rent',
    bedrooms: 4,
    bathrooms: 4,
    area: 2500,
    description: 'Luxurious penthouse with top-notch amenities',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format'],
    amenities: ['Rooftop Terrace', 'Private Elevator', 'Gym'],
    postedDate: '2024-03-12',
  },
  {
    id: '7',
    title: 'Charming 2BHK in Suburbs',
    price: 20000,
    location: 'Chennai, Tamil Nadu',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    description: 'Peaceful property in a suburban area',
    images: ['https://images.unsplash.com/photo-1599949464936-5bf7b0303d86?w=500&auto=format'],
    amenities: ['Parking', 'Pet-Friendly', 'Close to Schools'],
    postedDate: '2024-03-10',
  },
  {
    id: '8',
    title: 'Serviced Apartment with Amenities',
    price: 45000,
    location: 'Hyderabad, Telangana',
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 1300,
    description: 'Fully serviced apartment in a prime location',
    images: ['https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format'],
    amenities: ['Housekeeping', 'Swimming Pool', 'Wi-Fi Included'],
    postedDate: '2024-03-08',
  },
  {
    id: '9',
    title: 'Compact 1BHK Near IT Hub',
    price: 15000,
    location: 'Pune, Maharashtra',
    type: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    description: 'Perfect for IT professionals working nearby',
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format'],
    amenities: ['Parking', 'Close to Public Transport', 'Security'],
    postedDate: '2024-03-06',
  },
];

// export default function Rent() {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-16">
//           <div className="max-w-7xl mx-auto px-4">
//             <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">
//               Properties for Rent
//             </h1>
//             <SearchBar />
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {rentProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );

export default function Rent() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const filteredProperties = rentProperties.filter(
    (property) =>
      (location === '' || property.location.toLowerCase().includes(location.toLowerCase())) &&
      (propertyType === '' || property.type === propertyType)
  );

  return (
    <div>
      <Navbar />
      <main>
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">
              Properties for Rent
            </h1>
            <SearchBar
              location={location}
              setLocation={setLocation}
              propertyType={propertyType}
              setPropertyType={setPropertyType}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No properties match your search criteria.</p>
          )}
        </div>
      </main>
    </div>
  );
}