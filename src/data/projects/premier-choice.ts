import type { Project } from "@/types/project";

export const premierChoice: Project = {
  id: "premier-choice-001",
  slug: "premier-choice-international",
  name: "Premier Choice International",
  tagline: "Modern Architectural Excellence & High-Rise Living",
  status: "active",
  category: "mixed",
  coverImage: "/images/projects/premier-choice/cover.jpg",
  location: {
    area: "River Hills & Adyala Road",
    city: "Rawalpindi / Islamabad",
    province: "Punjab",
    address: "Premier Choice Commercial & Residential Complexes, Bahria Town & Adyala, Rawalpindi",
    coordinates: { lat: 33.5, lng: 73.1 },
    googleMapsUrl: "https://maps.google.com/?q=Premier+Choice+International",
    nearby: [
      { name: "Bahria Town Phase 7 Commercial Hub", distance: "3 min", type: "shopping" },
      { name: "DHA Islamabad Phase 1", distance: "10 min", type: "neighbourhood" },
      { name: "Adyala Interchange / Ring Road", distance: "5 min", type: "transport" },
      { name: "Downtown Islamabad", distance: "25 min", type: "city" },
    ],
  },
  overview: {
    description:
      "Premier Choice International Real Estate Developers is a Dubai and Pakistan-based development giant specializing in ultra-luxury high-rise residential towers, corporate business centers, and retail gallerias (River Hills, Box Park, 68 High Street). Known for turnkey delivery and high rental yields.",
    highlights: [
      "International Dubai-Standard Architectural Designs",
      "Prime Urban Locations across Bahria Town & Twin Cities",
      "Guaranteed High Rental Yield & On-Time Construction",
      "Modern Smart Home Automation & Rooftop Amenities",
      "Flexible Construction-Linked 3 to 4-Year Payment Plans",
    ],
    totalArea: "Multi-Tower Developments",
    plotSizes: ["Studio Apartments", "1-Bed", "2-Bed Luxury Apartments", "Duplex Penthouses", "Retail Shops", "Corporate Offices"],
    possessionStatus: "Multiple Towers Delivered; New Flagship Towers Underway",
  },
  masterPlan: {
    description:
      "Sophisticated vertical urban complexes engineered with earthquake-resistant structure, dedicated multi-level parking, and luxury recreational facilities.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&auto=format",
    totalPlots: 3500,
  },
  blocks: [
    {
      id: "river-hills-luxury",
      name: "River Hills Residential Suites",
      status: "available",
      plotSizes: ["1-Bed Apartment", "2-Bed Apartment"],
      prices: [
        {
          plotSize: "1-Bed Apartment (550 Sq Ft)",
          totalPrice: 8500000,
          bookingAmount: 1700000,
          monthlyInstallment: 188000,
          totalInstallments: 36,
        },
        {
          plotSize: "2-Bed Apartment (950 Sq Ft)",
          totalPrice: 14500000,
          bookingAmount: 2900000,
          monthlyInstallment: 322000,
          totalInstallments: 36,
        },
      ],
    },
    {
      id: "box-park-commercial",
      name: "Box Park Retail & Food Street",
      status: "available",
      plotSizes: ["Ground Floor Retail", "First Floor Brand Outlet"],
      prices: [
        {
          plotSize: "Commercial Shop (350 Sq Ft)",
          totalPrice: 18500000,
          bookingAmount: 3700000,
          monthlyInstallment: 410000,
          totalInstallments: 36,
        },
      ],
    },
  ],
  development: [
    {
      id: "dev-pci-1",
      date: "August 2026",
      title: "Finishing & Glass Façade Installation",
      description: "Structural grey structure completed; imported double-glazed curtain glass installation underway.",
      images: ["/images/projects/premier-choice/gallery1.jpg"],
      percentage: 82,
    },
  ],
  paymentPlan: {
    description: "Easy 3-year quarterly payment plans with minimal down payment.",
    plans: [
      {
        id: "plan-pc-3yr",
        name: "3-Year Easy Installment Plan",
        duration: "3 years",
        downPayment: "20% Down Payment",
        installments: "80% in 12 Quarterly Installments",
        details: [
          "20% Down payment with immediate official booking confirmation",
          "12 quarterly payments tied to verified construction stages",
          "Handover and title deed transfer upon final clearance",
        ],
      },
    ],
    notes: [
      "Special corporate discounts for early full advance settlement",
      "Rental management and tenant acquisition support included",
    ],
  },
  pricing: {
    currency: "PKR",
    minPrice: 8500000,
    maxPrice: 42000000,
    pricePerSqft: 15500,
    lastUpdated: "2026-08-20",
    disclaimer: "Prices vary based on floor level and corner location. Inquire for latest official payment schedules.",
  },
  amenities: [
    { id: "am-1", name: "Rooftop Infinity Swimming Pool", icon: "water", description: "Breathtaking panoramic twin-cities views with heated pool and deck." },
    { id: "am-2", name: "State-of-the-Art Fitness Club", icon: "activity", description: "Fully equipped gymnasium with personal trainers and spa." },
    { id: "am-3", name: "Multi-Level Covered Parking", icon: "truck", description: "Dedicated secure underground parking with smart RFID access." },
    { id: "am-4", name: "High-Speed Passenger & Cargo Elevators", icon: "arrow-up", description: "Imported Otis/Kone smart elevators with generator backup." },
    { id: "am-5", name: "Fire Fighting & Smart Security", icon: "shield", description: "Automated smoke detection, sprinklers, and 24/7 CCTV surveillance." },
  ],
  gallery: [
    { id: "g-1", url: "/images/projects/premier-choice/cover.jpg", alt: "Premier Choice High-Rise Architecture", category: "Exterior" },
    { id: "g-2", url: "/images/projects/premier-choice/gallery1.jpg", alt: "Sky Luxury Apartments Interior", category: "Apartments" },
    { id: "g-3", url: "/images/projects/premier-choice/gallery2.jpg", alt: "Corporate & Retail Boulevard", category: "Retail" },
    { id: "g-4", url: "/images/projects/premier-choice/gallery3.jpg", alt: "Rooftop Infinity Pool & Gym", category: "Amenities" },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Why invest in high-rise apartments with Premier Choice?",
      answer: "Vertical living provides superior rental yields (8-12% annually), turnkey maintenance, high security, and strong capital appreciation compared to raw land plots.",
    },
  ],
  legal: {
    nocStatus: "Approved by RDA & Housing Authorities",
    approvalAuthority: "Rawalpindi Development Authority (RDA)",
    documents: [{ name: "Approved Structural & Architecture Permits", url: "/about/credentials" }],
    disclaimer: "Legends Marketing is an authorized sales and marketing partner for Premier Choice International.",
  },
  advisor: {
    name: "Hassan Malik",
    designation: "Head of Commercial & Vertical Developments",
    phone: "0323 1235444",
    whatsapp: "923231235444",
    email: "legends.marketing.official@gmail.com",
    experience: "8+ Years in High-Rise Property Portfolio Advisory",
  },
  seo: {
    title: "Premier Choice International - Luxury Apartments & Shops | Legends Marketing",
    description:
      "Explore Premier Choice luxury towers in Bahria Town & Rawalpindi with authorized partner Legends Marketing. High rental yields and easy 3-year installments.",
    keywords: ["premier choice international", "river hills rawalpindi", "luxury apartments bahria town", "high rise investment rawalpindi"],
  },
  createdAt: "2024-01-05",
  updatedAt: "2026-08-20",
};