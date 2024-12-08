import { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import SearchBar from '../components/Home/SearchBar';
import PropertyCard from '../components/Home/PropertyCard';
import { Property } from '../types/property';

const buyProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in City Center',
    price: 25000000,
    location: 'Mumbai, Maharashtra',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    description: 'Beautiful apartment with modern amenities',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format'],
    amenities: ['Parking', 'Swimming Pool', 'Gym'],
    postedDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Luxury Villa with Garden',
    price: 45000000,
    location: 'Bangalore, Karnataka',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    description: 'Spacious villa with beautiful garden',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format'],
    amenities: ['Garden', 'Security', 'Club House'],
    postedDate: '2024-03-14'
  },
  {
    id: '3',
    title: 'Cozy Beach House',
    price: 60000000,
    location: 'Goa',
    type: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 3000,
    description: 'Beachfront property with stunning ocean views',
    images: ['https://images.unsplash.com/photo-1600607682179-0e25d2e8e401?w=500&auto=format'],
    amenities: ['Private Beach', 'Swimming Pool', 'Barbecue Area'],
    postedDate: '2024-03-12',
  },
  {
    id: '4',
    title: 'Urban Studio Apartment',
    price: 15000000,
    location: 'Delhi',
    type: 'sale',
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    description: 'Perfect for young professionals in the heart of the city',
    images: ['https://images.unsplash.com/photo-1599205344947-1c4f075aa3a3?w=500&auto=format'],
    amenities: ['Rooftop Terrace', '24/7 Security', 'Gym'],
    postedDate: '2024-03-10',
  },
  {
    id: '5',
    title: 'Countryside Cottage',
    price: 18000000,
    location: 'Dehradun, Uttarakhand',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    description: 'Charming cottage surrounded by lush greenery',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format'],
    amenities: ['Garden', 'Fireplace', 'Patio'],
    postedDate: '2024-03-08',
  },
  {
    id: '6',
    title: 'Luxury Penthouse with Skyline View',
    price: 80000000,
    location: 'Mumbai, Maharashtra',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 5,
    area: 3500,
    description: 'Exclusive penthouse offering breathtaking city views',
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format'],
    amenities: ['Infinity Pool', 'Private Elevator', 'Home Automation'],
    postedDate: '2024-03-05',
  },
  {
    id: '7',
    title: 'Eco-Friendly Farmhouse',
    price: 22000000,
    location: 'Alleppey, Kerala',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    description: 'Sustainable living in a tranquil countryside setting',
    images: ['https://images.unsplash.com/photo-1600172454888-9abcfce4e4e7?w=500&auto=format'],
    amenities: ['Solar Panels', 'Organic Garden', 'Rainwater Harvesting'],
    postedDate: '2024-03-02',
  },

];

export default function Buy() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const filteredProperties = buyProperties.filter(
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
              Properties for Sale
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