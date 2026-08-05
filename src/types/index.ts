export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  departureCity: DepartureCity;
  duration: number;
  durationUnit: 'days' | 'hours';
  price: number;
  pricePerPerson: boolean;
  currency: string;
  maxGroupSize: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  vip: boolean;
  image: string;
  gallery: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  faq: FAQ[];
  category: TourCategory;
  destinations: string[];
  content: string;
  [key: string]: any;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  destinations: string[];
  meals?: string[];
  accommodation?: string;
  [key: string]: any;
}

export interface FAQ {
  question: string;
  answer: string;
  [key: string]: any;
}

export type DepartureCity = 'Casablanca' | 'Marrakech' | 'Fes' | 'Tangier' | 'Agadir' | 'Merzouga';

export type TourCategory = 'popular' | 'desert' | 'imperial' | 'vip' | 'short' | 'cultural';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  description: string;
  content: string;
  image: string;
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  topAttractions: string[];
  relatedTourSlugs: string[];
  [key: string]: any;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  text: string;
  tourSlug: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  tags: string[];
}

export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  social: {
    facebook: string;
    instagram: string;
    wechat: string;
    tripadvisor: string;
    pinterest?: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
