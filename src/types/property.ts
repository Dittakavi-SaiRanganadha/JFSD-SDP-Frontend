export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  images: string[];
  amenities: string[];
  postedDate: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'rent' | 'sale';
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  images: string[];
  amenities: string[];
  postedDate: string;
}

export interface newProperty {
  id: string;
  title: string;
  price: number; // Ensure consistency with your actual data
  location: string;
  type: 'sale' | 'rent';
  bedrooms: number ;
  bathrooms: number ;
  area: number ;
  description: string;
  images: string[];
  // amenities?: string[]; // Mark as optional
  postedDate: string;
}

