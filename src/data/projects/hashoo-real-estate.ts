import type { Project } from "@/types/project";

export const hashooRealEstate: Project = {
  id: "hashoo-real-estate-001",
  slug: "hashoo-real-estate",
  name: "Hashoo Real Estate Division",
  tagline: "Five-Star Luxury & Signature Living",
  status: "active",
  category: "mixed",
  coverImage: "/images/projects/hashoo-real-estate/cover.jpg",
  location: {
    area: "Top Prime Locations, Twin Cities",
    city: "Rawalpindi / Islamabad",
    province: "Punjab / ICT",
    address: "Hashoo Real Estate Corporate Portfolio, Rawalpindi / Islamabad",
    coordinates: { lat: 33.6, lng: 73.05 },
    googleMapsUrl: "https://maps.google.com/?q=Hashoo+Real+Estate",
    nearby: [
      { name: "Pearl Continental Rawalpindi", distance: "5 min", type: "hotel" },
      { name: "Islamabad Club", distance: "15 min", type: "club" },
      { name: "Islamabad International Airport", distance: "20 min", type: "transport" },
      { name: "Saddar Commercial Center", distance: "8 min", type: "shopping" },
    ],
  },
  overview: {
    description:
      "Hashoo Real Estate Division represents the prestigious hospitality-driven property development arm of Hashoo Group — owners and operators of Pearl Continental (PC) and Marriott Hotels in Pakistan. Offering signature branded residences, executive suites, and luxury commercial complexes with five-star concierge services.",
    highlights: [
      "Backed by Hashoo Group's 50+ Years of Hospitality Excellence",
      "Signature Pearl Continental Branded Residences",
      "Guaranteed Rental Yield & Buy-Back Investment Programs",
      "Five-Star Concierge, Wellness, and Valet Services",
      "Prime Central Urban Locations with Zero Compromise on Quality",
    ],
    totalArea: "Prime Urban Land Parcels",
    plotSizes: ["Executive Suites", "1-Bed", "2-Bed", "3-Bed Luxury Apartments", "Penthouses", "Commercial Outlets"],
    possessionStatus: "Under Construction with Timely Delivery Guarantees",
  },
  masterPlan: {
    description:
      "High-rise luxury architectural masterpieces designed with international structural safety, seismic engineering, and smart home automation.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format",
    totalPlots: 1500,
  },
  blocks: [
    {
      id: "pc-residences",
      name: "PC Signature Residences",
      status: "available",
      plotSizes: ["1-Bed Luxury Suite", "2-Bed Executive Apartment"],
      prices: [
        {
          plotSize: "1-Bed Suite (650 Sq Ft)",
          totalPrice: 12500000,
          bookingAmount: 2500000,
          monthlyInstallment: 275000,
          totalInstallments: 36,
        },
        {
          plotSize: "2-Bed Suite (1150 Sq Ft)",
          totalPrice: 21500000,
          bookingAmount: 4300000,
          monthlyInstallment: 475000,
          totalInstallments: 36,
        },
      ],
    },
    {
      id: "hashoo-commercial",
      name: "Commercial Corporate Suites",
      status: "available",
      plotSizes: ["Corporate Office", "Retail Store"],
      prices: [
        {
          plotSize: "Retail Outlet (500 Sq Ft)",
          totalPrice: 28000000,
          bookingAmount: 5600000,
          monthlyInstallment: 620000,
          totalInstallments: 36,
        },
      ],
    },
  ],
  development: [
    {
      id: "dev-hre-1",
      date: "August 2026",
      title: "Superstructure Concreting & Interior Mockup Units",
      description: "Tower structure reached floor 14 with state-of-the-art sample suites ready for investor preview.",
      images: ["/images/projects/hashoo-real-estate/gallery1.jpg"],
      percentage: 65,
    },
  ],
  paymentPlan: {
    description: "Convenient 3-year construction-linked payment plan with high rental yield guarantees.",
    plans: [
      {
        id: "plan-hashoo-3yr",
        name: "3-Year Quarterly Investor Plan",
        duration: "3 years",
        downPayment: "20% Down Payment",
        installments: "80% linked to Construction Milestones",
        details: [
          "20% Down payment upon booking agreement",
          "Equal quarterly installments over 36 months",
          "Possession with immediate rental management option",
        ],
      },
    ],
    notes: [
      "Guaranteed rental return management handled by Hashoo Hospitality Division",
      "Exclusive complimentary membership to Pearl Continental clubs",
    ],
  },
  pricing: {
    currency: "PKR",
    minPrice: 12500000,
    maxPrice: 65000000,
    pricePerSqft: 19500,
    lastUpdated: "2026-08-20",
    disclaimer: "Pricing depends on tower floor height and view orientation. Inquire for available inventory.",
  },
  amenities: [
    { id: "am-1", name: "Five-Star Concierge & Valet", icon: "user-check", description: "Round-the-clock front desk assistance, room service, and valet." },
    { id: "am-2", name: "Executive Club & Heated Pool", icon: "activity", description: "Rooftop infinity swimming pool, sauna, and health wellness spa." },
    { id: "am-3", name: "High-Speed Smart Elevators", icon: "arrow-up", description: "Dedicated biometric high-speed elevator access." },
    { id: "am-4", name: "24/7 Power Backup (100%)", icon: "zap", description: "Heavy-duty uninterrupted generators for zero downtime." },
    { id: "am-5", name: "Fine Dining & Retail", icon: "coffee", description: "Signature restaurants and luxury retail brands on lower levels." },
  ],
  gallery: [
    { id: "g-1", url: "/images/projects/hashoo-real-estate/cover.jpg", alt: "Hashoo Luxury Towers", category: "Exterior" },
    { id: "g-2", url: "/images/projects/hashoo-real-estate/gallery1.jpg", alt: "Pearl Continental Executive Suites", category: "Suites" },
    { id: "g-3", url: "/images/projects/hashoo-real-estate/gallery2.jpg", alt: "Club House & Luxury Amenities", category: "Amenities" },
    { id: "g-4", url: "/images/projects/hashoo-real-estate/gallery3.jpg", alt: "Skyline Panorama & Penthouse", category: "Skyline" },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Can I generate passive rental income from Hashoo properties?",
      answer: "Yes, Hashoo Real Estate offers dedicated rental management and pooling programs where your property is leased to business executives and tourists.",
    },
  ],
  legal: {
    nocStatus: "Fully Approved with Clear Title",
    approvalAuthority: "Relevant Municipal Authorities & Civil Aviation",
    documents: [{ name: "Approved Building Plans & NOC", url: "/about/credentials" }],
    disclaimer: "Legends Marketing is an authorized sales partner for Hashoo Real Estate Division.",
  },
  advisor: {
    name: "Hassan Malik",
    designation: "Head of Luxury & Commercial Real Estate",
    phone: "0323 1235444",
    whatsapp: "923231235444",
    email: "legends.marketing.official@gmail.com",
    experience: "8+ Years in High-Net-Worth Advisory",
  },
  seo: {
    title: "Hashoo Real Estate Division - Luxury Suites & Towers | Legends Marketing",
    description:
      "Explore luxury residences by Hashoo Real Estate. Authorized marketing partner Legends Marketing offers PC branded suites and guaranteed rental returns.",
    keywords: ["hashoo real estate", "pc residences", "luxury apartments islamabad", "hashoo group property"],
  },
  createdAt: "2024-01-03",
  updatedAt: "2026-08-20",
};