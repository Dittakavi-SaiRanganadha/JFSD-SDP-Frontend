import { useParams } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import { Property } from '../types/property';
import { IoBedOutline, IoWaterOutline, IoResizeOutline } from 'react-icons/io5';

// Mock data - In a real app, this would come from an API
const mockProperties: Record<string, Property> = {
  '1': {
    id: '1',
    title: 'Modern Apartment in City Center',
    price: 25000000,
    location: 'Mumbai, Maharashtra',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    description: 'Beautiful apartment with modern amenities and stunning city views. Features include high-end finishes, spacious living areas, and a modern kitchen. Located in the heart of the city with easy access to shopping, dining, and entertainment.',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format',
      'https://images.unsplash.com/photo-1560449013-0c3d52f5b2c9?w=500&auto=format'
    ],
    amenities: ['Parking', 'Swimming Pool', 'Gym', '24/7 Security', 'Power Backup', 'Club House'],
    postedDate: '2024-03-15'
  },
  '2': {
    id: '2',
    title: 'Luxury Villa with Garden',
    price: 45000000,
    location: 'Bangalore, Karnataka',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    description: 'Luxurious villa with a beautiful garden and modern amenities. This property features spacious rooms, high ceilings, and premium finishes throughout. The private garden is perfect for outdoor entertaining.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format',
      'https://images.unsplash.com/photo-1564013799922-ab600027ffc9?w=500&auto=format'
    ],
    amenities: ['Garden', 'Security', 'Club House', 'Swimming Pool', 'Tennis Court'],
    postedDate: '2024-03-14'
  },
  '3': {
    id: '3',
    title: 'Seaside Penthouse',
    price: 35000000,
    location: 'Mumbai, Maharashtra',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 4,
    area: 2000,
    description: 'Luxurious penthouse with panoramic sea views. Features include a private terrace, premium finishes, and state-of-the-art home automation.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c751?w=500&auto=format'
    ],
    amenities: ['Sea View', 'Private Terrace', 'Home Automation', 'Concierge', 'Spa'],
    postedDate: '2024-03-13'
  },
  '4': {
    id: '4',
    title: 'Contemporary Office Space',
    price: 150000,
    location: 'Pune, Maharashtra',
    type: 'rent',
    bedrooms: 0,
    bathrooms: 2,
    area: 1500,
    description: 'Modern office space in prime business district. Open floor plan with meeting rooms and break-out areas.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format',
      'https://images.unsplash.com/photo-1497366216548-37526070297d?w=500&auto=format'
    ],
    amenities: ['24/7 Access', 'Conference Rooms', 'Cafeteria', 'Parking', 'High-speed Internet'],
    postedDate: '2024-03-12'
  },
  '5': {
    id: '5',
    title: 'Garden View Apartment',
    price: 75000,
    location: 'Delhi, NCR',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    description: 'Serene apartment overlooking landscaped gardens. Perfect for families, featuring modern amenities and secure environment.',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffc?w=500&auto=format'
    ],
    amenities: ['Garden View', 'Children\'s Play Area', 'Fitness Center', 'Parking'],
    postedDate: '2024-03-11'
  },
  '6': {
    id: '6',
    title: 'Smart Home Villa',
    price: 55000000,
    location: 'Hyderabad, Telangana',
    type: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 3000,
    description: 'Fully automated smart home with voice controls and energy efficiency features.',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b915?w=500&auto=format'
    ],
    amenities: ['Smart Home System', 'Solar Panels', 'EV Charging', 'Home Theater'],
    postedDate: '2024-03-10'
  },
  '7': {
    id: '7',
    title: 'Heritage Bungalow',
    price: 65000000,
    location: 'Kolkata, West Bengal',
    type: 'sale',
    bedrooms: 6,
    bathrooms: 4,
    area: 4000,
    description: 'Restored heritage property with modern amenities while maintaining colonial charm.',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68774?w=500&auto=format'
    ],
    amenities: ['Period Features', 'Large Garden', 'Staff Quarters', 'Wine Cellar'],
    postedDate: '2024-03-09'
  },
  '8': {
    id: '8',
    title: 'Mountain View Cottage',
    price: 95000,
    location: 'Shimla, Himachal Pradesh',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 1,
    area: 800,
    description: 'Cozy cottage with stunning mountain views and modern comforts.',
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=500&auto=format',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d9?w=500&auto=format'
    ],
    amenities: ['Mountain View', 'Fireplace', 'Heated Floors', 'Private Parking'],
    postedDate: '2024-03-08'
  },
  '9': {
    id: '9',
    title: 'Tech Park Office Suite',
    price: 250000,
    location: 'Chennai, Tamil Nadu',
    type: 'rent',
    bedrooms: 0,
    bathrooms: 4,
    area: 2500,
    description: 'Premium office space in leading tech park with modern infrastructure.',
    images: [
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=500&auto=format',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fb?w=500&auto=format'
    ],
    amenities: ['24/7 Access', 'Meeting Rooms', 'IT Infrastructure', 'Food Court'],
    postedDate: '2024-03-07'
  },
  '10': {
    id: '10',
    title: 'Beachfront Studio',
    price: 125000,
    location: 'Goa',
    type: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    description: 'Stylish studio apartment with direct beach access and ocean views.',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&auto=format',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c3?w=500&auto=format'
    ],
    amenities: ['Beach Access', 'Pool', 'Beach Equipment', 'Restaurant'],
    postedDate: '2024-03-06'
  },
  '11': {
    id: '11',
    title: 'Eco-Friendly Township Villa',
    price: 42000000,
    location: 'Pune, Maharashtra',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    description: 'Sustainable living space with solar power and rainwater harvesting.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc7?w=500&auto=format'
    ],
    amenities: ['Solar Panels', 'Organic Garden', 'EV Charging', 'Recycling Center'],
    postedDate: '2024-03-05'
  },
  '12': {
    id: '12',
    title: 'Lake View Apartment',
    price: 85000,
    location: 'Udaipur, Rajasthan',
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
    description: 'Serene apartment with stunning lake views and traditional architecture.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c751?w=500&auto=format'
    ],
    amenities: ['Lake View', 'Traditional Decor', 'Boat Access', 'Rooftop Restaurant'],
    postedDate: '2024-03-04'
  },
  '13': {
    id: '13',
    title: 'Presidential Penthouse',
    price: 150000000,
    location: 'Mumbai, Maharashtra',
    type: 'sale',
    bedrooms: 5,
    bathrooms: 6,
    area: 6000,
    description: 'Ultra-luxury penthouse with 360-degree city views and private helipad.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539aa?w=500&auto=format'
    ],
    amenities: ['Helipad', 'Private Pool', 'Wine Cellar', 'Smart Home', 'Private Elevator'],
    postedDate: '2024-03-03'
  },
  '14': {
    id: '14',
    title: 'Golf Course Villa',
    price: 85000000,
    location: 'Gurugram, Haryana',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 4.5,
    area: 4500,
    description: 'Premium villa overlooking championship golf course with luxury amenities.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc7?w=500&auto=format'
    ],
    amenities: ['Golf View', 'Private Garden', 'Home Theater', 'Wine Room', 'Smart Home'],
    postedDate: '2024-03-02'
  },
  '15': {
    id: '15',
    title: 'Premium Retail Space',
    price: 350000,
    location: 'Delhi, NCR',
    type: 'rent',
    bedrooms: 0,
    bathrooms: 2,
    area: 2000,
    description: 'High-street retail space with excellent footfall and modern infrastructure.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format',
      'https://images.unsplash.com/photo-1497366216548-37526070297d?w=500&auto=format'
    ],
    amenities: ['High Footfall', 'Storage Space', 'Loading Dock', 'Security'],
    postedDate: '2024-03-01'
  },
  '16': {
    id: '16',
    title: 'Warehouse Facility',
    price: 200000,
    location: 'Bhiwandi, Maharashtra',
    type: 'rent',
    bedrooms: 0,
    bathrooms: 4,
    area: 10000,
    description: 'Modern warehouse with logistics support and security features.',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310e?w=500&auto=format'
    ],
    amenities: ['Loading Bay', '24/7 Security', 'Parking', 'Office Space'],
    postedDate: '2024-02-29'
  },
  
};

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = id ? mockProperties[id] : null;

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <p className="text-2xl text-blue-600 font-bold mt-2">
                ₹{property.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mt-2">{property.location}</p>
            </div>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <IoBedOutline className="text-xl" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <IoWaterOutline className="text-xl" />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <IoResizeOutline className="text-xl" />
                <span>{property.area} sq.ft</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span>• {amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}