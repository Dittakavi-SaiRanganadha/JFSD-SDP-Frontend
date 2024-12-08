import { Property } from '../../types/property';
import PropertyCard from './PropertyCard';

const mockProperties: Property[] = [
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
  }
];

export default function FeaturedProperties() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}