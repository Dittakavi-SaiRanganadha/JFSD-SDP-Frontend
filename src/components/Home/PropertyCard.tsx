import { Link } from 'react-router-dom';
import { Property } from '../../types/property';
import { IoBedOutline, IoWaterOutline, IoResizeOutline } from 'react-icons/io5';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <span className="text-blue-600 font-bold">₹{property.price.toLocaleString()}</span>
          </div>
          
          <p className="text-gray-600 mt-2">{property.location}</p>
          
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <div className="flex items-center gap-1">
              <IoBedOutline />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <IoWaterOutline />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <IoResizeOutline />
              <span>{property.area} sq.ft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}