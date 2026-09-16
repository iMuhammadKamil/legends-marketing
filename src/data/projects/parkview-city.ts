import type { Project } from "@/types/project";

export const parkviewCity: Project = {
  id: "parkview-city-001",
  slug: "parkview-city-islamabad",
  name: "ParkView City Islamabad",
  tagline: "Where Nature Meets Modern Living",
  status: "active",
  category: "residential",
  coverImage: "/images/projects/parkview-city/cover.jpg",
  location: {
    area: "Zone IV, Malot Road",
    city: "Islamabad",
    province: "ICT",
    address: "ParkView City, Malot Road, Islamabad",
    coordinates: { lat: 33.7, lng: 73.1 },
    googleMapsUrl: "https://maps.google.com/?q=ParkView+City+Islamabad",
    nearby: [
      { name: "Islamabad Club & Serena", distance: "15 min", type: "city" },
      { name: "Islamabad International Airport", distance: "25 min", type: "transport" },
      { name: "Centaurus Mall", distance: "20 min", type: "shopping" },
      { name: "Bahria Town Phase 7", distance: "15 min", type: "neighbourhood" },
    ],
  },
  overview: {
    description:
      "ParkView City is a premier CDA-approved gated housing society nestled against the serene Margalla Hills on Malot Road, Islamabad. Developed by Vision Group, it offers high-standard urban infrastructure, 24/7 security, lush botanical gardens, and flexible payment plans for both residential and commercial plots.",
    highlights: [
      "CDA-Approved Master Community",
      "Breathtaking Margalla Hills View",
      "Immediate Possession in Key Blocks",
      "200ft Main Boulevard & Underground Utilities",
      "Downtown Commercial & Dancing Fountains",
    ],
    totalArea: "7,000+ Kanals",
    plotSizes: ["5 Marla", "10 Marla", "1 Kanal", "2 Kanal"],
    possessionStatus: "Immediate Possession Available in Blocks A, B, H",
  },
  masterPlan: {
    description:
      "A meticulously designed master plan featuring wide tree-lined boulevards, dedicated commercial hubs, botanical gardens, international standard schools, and a championship golf course.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&auto=format",
    totalPlots: 12000,
  },
  blocks: [
    {
      id: "overseas-block",
      name: "Overseas Block",
      status: "available",
      plotSizes: ["5 Marla", "10 Marla", "1 Kanal"],
      prices: [
        {
          plotSize: "5 Marla",
          totalPrice: 6500000,
          bookingAmount: 1625000,
          monthlyInstallment: 135000,
          totalInstallments: 36,
        },
        {
          plotSize: "10 Marla",
          totalPrice: 11500000,
          bookingAmount: 2875000,
          monthlyInstallment: 240000,
          totalInstallments: 36,
        },
      ],
    },
    {
      id: "golf-estate",
      name: "Golf Estate Block",
      status: "available",
      plotSizes: ["5 Marla", "10 Marla", "1 Kanal"],
      prices: [
        {
          plotSize: "1 Kanal",
          totalPrice: 24000000,
          bookingAmount: 6000000,
          monthlyInstallment: 500000,
          totalInstallments: 36,
        },
      ],
    },
    {
      id: "downtown-commercial",
      name: "Downtown Commercial",
      status: "available",
      plotSizes: ["6 Marla", "8 Marla"],
      prices: [
        {
          plotSize: "6 Marla",
          totalPrice: 45000000,
          bookingAmount: 11250000,
          monthlyInstallment: 937500,
          totalInstallments: 36,
        },
      ],
    },
  ],
  development: [
    {
      id: "dev-1",
      date: "August 2026",
      title: "Botanical Garden & Downtown Lake Expansion",
      description: "Landscaping and commercial plaza infrastructure in full swing with paved road networks.",
      images: ["/images/projects/parkview-city/gallery2.jpg"],
      percentage: 85,
    },
  ],
  paymentPlan: {
    description: "Flexible 3-year quarterly installment plans with convenient down payment.",
    plans: [
      {
        id: "plan-3yr",
        name: "3-Year Quarterly Plan",
        duration: "3 years",
        downPayment: "25% Down Payment",
        installments: "75% in 12 Quarterly Installments",
        details: [
          "25% Confirmation upon booking",
          "Quarterly payments spread evenly across 36 months",
          "Possession upon 70% clearance",
        ],
      },
    ],
    notes: [
      "10% discount on lump-sum upfront payment",
      "Prime location charges (corner, main boulevard, park facing) apply as per society policy",
    ],
  },
  pricing: {
    currency: "PKR",
    minPrice: 6500000,
    maxPrice: 45000000,
    pricePerMarla: 1300000,
    lastUpdated: "2026-08-20",
    disclaimer: "Prices are subject to developer revision without prior notice. Contact your Legends advisor for verified latest inventory.",
  },
  amenities: [
    { id: "am-1", name: "24/7 Gated Security", icon: "shield", description: "State-of-the-art surveillance and trained security personnel." },
    { id: "am-2", name: "Botanical Gardens", icon: "park", description: "Extensive green parks with exotic flora and walking tracks." },
    { id: "am-3", name: "Downtown Dancing Fountains", icon: "water", description: "Scenic central lake surrounded by premium dining and retail." },
    { id: "am-4", name: "Underground Electricity", icon: "zap", description: "Modern uninterrupted subterranean utility infrastructure." },
    { id: "am-5", name: "International Schools & Clinics", icon: "hospital", description: "Top-tier healthcare centers and educational campuses." },
  ],
  gallery: [
    { id: "g-1", url: "/images/projects/parkview-city/cover.jpg", alt: "ParkView City Scenic Overview", category: "Overview" },
    { id: "g-2", url: "/images/projects/parkview-city/gallery1.jpg", alt: "Overseas Luxury Block", category: "Residential" },
    { id: "g-3", url: "/images/projects/parkview-city/gallery2.jpg", alt: "Downtown Commercial Boulevard", category: "Commercial" },
    { id: "g-4", url: "/images/projects/parkview-city/gallery3.jpg", alt: "Golf Estate & Green Valleys", category: "Lifestyle" },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Is ParkView City CDA Approved?",
      answer: "Yes, ParkView City Islamabad holds a valid NOC and approval from the Capital Development Authority (CDA).",
    },
    {
      id: "faq-2",
      question: "Can Overseas Pakistanis book remotely?",
      answer: "Yes, Legends Marketing facilitates seamless remote booking, document verification, and digital receipt delivery for overseas investors.",
    },
  ],
  legal: {
    nocStatus: "Approved by CDA",
    approvalAuthority: "Capital Development Authority (CDA)",
    documents: [{ name: "CDA NOC Verification", url: "/about/credentials" }],
    disclaimer: "Legends Marketing is an authorized sales and marketing partner for ParkView City Islamabad.",
  },
  advisor: {
    name: "Hassan Malik",
    designation: "Senior Investment Advisor",
    phone: "0323 1235444",
    whatsapp: "923231235444",
    email: "legends.marketing.official@gmail.com",
    experience: "8+ Years in Islamabad Real Estate",
  },
  seo: {
    title: "ParkView City Islamabad - Payment Plans & Plots | Legends Marketing",
    description:
      "Explore ParkView City Islamabad with authorized sales partner Legends Marketing. CDA approved plots on Malot Road with flexible 3-year installment plans.",
    keywords: ["parkview city islamabad", "parkview city plots", "cda approved societies islamabad", "legends marketing parkview"],
  },
  createdAt: "2024-01-01",
  updatedAt: "2026-08-20",
};