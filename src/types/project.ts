export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: "active" | "upcoming" | "completed" | "sold-out";
  category: "residential" | "commercial" | "mixed";
  coverImage?: string;
  location: {
    area: string;
    city: string;
    province: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsUrl: string;
    nearby: NearbyPlace[];
  };
  overview: {
    description: string;
    highlights: string[];
    totalArea: string;
    plotSizes: string[];
    possessionStatus: string;
  };
  masterPlan: {
    description: string;
    imageUrl: string;
    totalPlots: number;
  };
  blocks: Block[];
  development: DevelopmentUpdate[];
  paymentPlan: PaymentPlan;
  pricing: PricingInfo;
  amenities: Amenity[];
  gallery: GalleryItem[];
  faqs: FAQ[];
  legal: LegalInfo;
  advisor: AdvisorInfo;
  seo: SEOData;
  createdAt: string;
  updatedAt: string;
}

export interface Block {
  id: string;
  name: string;
  status: "available" | "sold-out" | "coming-soon";
  plotSizes: string[];
  prices: {
    plotSize: string;
    totalPrice: number;
    bookingAmount: number;
    monthlyInstallment: number;
    totalInstallments: number;
  }[];
}

export interface DevelopmentUpdate {
  id: string;
  date: string;
  title: string;
  description: string;
  images: string[];
  percentage?: number;
}

export interface PaymentPlan {
  description: string;
  plans: {
    id: string;
    name: string;
    duration: string;
    downPayment: string;
    installments: string;
    balloonPayment?: string;
    details: string[];
  }[];
  notes: string[];
}

export interface PricingInfo {
  currency: string;
  minPrice: number;
  maxPrice: number;
  pricePerMarla?: number;
  pricePerSqft?: number;
  lastUpdated: string;
  disclaimer: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LegalInfo {
  nocStatus: string;
  approvalAuthority: string;
  registrationNumber?: string;
  documents: {
    name: string;
    url: string;
  }[];
  disclaimer: string;
}

export interface AdvisorInfo {
  name: string;
  designation: string;
  phone: string;
  whatsapp: string;
  email: string;
  image?: string;
  experience?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  type: string;
}