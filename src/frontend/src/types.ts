export interface Property {
  id: string;
  title: string;
  type: string;
  category: string;
  location: string;
  area: string;
  price: string;
  priceUnit: string;
  availability: "Available" | "Limited" | "Occupied";
  availabilityStatus: "available" | "limited" | "occupied";
  description: string;
  tags: string[];
  features: string[];
  images: string[];
  listingCount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  listingCount: number;
  image: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export interface StatsItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  emoji: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
  emoji: string;
  accentColor: string;
}
