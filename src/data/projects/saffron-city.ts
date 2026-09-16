import type { Project } from "@/types/project";

export const saffronCity: Project = {
  id: "saffron-city-001",
  slug: "saffron-city-islamabad",
  name: "Saffron City Islamabad",
  tagline: "Affordable Luxury in Prime Capital Corridor",
  status: "active",
  category: "residential",
  coverImage: "/images/projects/saffron-city/cover.jpg",
  location: {
    area: "Main G.T Road & Rawat / Thalian Link",
    city: "Islamabad / Rawalpindi",
    province: "ICT / Punjab",
    address: "Saffron City, Main G.T Road Link, Near Rawat & Ring Road Junction, Islamabad",
    coordinates: { lat: 33.6, lng: 73.2 },
    googleMapsUrl: "https://maps.google.com/?q=Saffron+City+Islamabad",
    nearby: [
      { name: "Rawalpindi Ring Road Interchange", distance: "3 min", type: "transport" },
      { name: "G.T Road Junction", distance: "2 min", type: "transport" },
      { name: "DHA Islamabad Phase 3 & 4", distance: "12 min", type: "neighbourhood" },
      { name: "Islamabad International Airport", distance: "20 min", type: "transport" },
    ],
  },
  overview: {
    description:
      "Saffron City Islamabad is a masterfully planned residential enclave engineered for smart living, serene greenery, and maximum capital appreciation. Positioned directly along major arterial link roads, it offers budget-friendly pre-launch pricing with premium infrastructure standards.",
    highlights: [
      "Strategic Location along Ring Road & G.T Road Junction",
      "Most Competitive Entry Pricing in the Twin Cities",
      "High Potential for 150%+ Capital Gain upon Completion",
      "Wide 120ft Main Avenues with Green Belts and Solar LED Lighting",
      "Community Centers, Theme Parks, and Smart Security",
    ],
    totalArea: "15,000+ Kanals",
    plotSizes: ["3 Marla", "5 Marla", "10 Marla", "1 Kanal"],
    possessionStatus: "Phase 1 Land Development in Fast Progress",
  },
  masterPlan: {
    description:
      "Eco-conscious layout with dedicated education enclaves, medical facilities, theme parks, family lakes, and commercial business districts.",
    imageUrl: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1200&h=800&fit=crop&auto=format",
    totalPlots: 12000,
  },
  blocks: [
    {
      id: "sector-a",
      name: "Executive Block A",
      status: "available",
      plotSizes: ["5 Marla", "10 Marla"],
      prices: [
        {
          plotSize: "5 Marla",
          totalPrice: 1950000,
          bookingAmount: 295000,
          monthlyInstallment: 38000,
          totalInstallments: 36,
        },
        {
          plotSize: "10 Marla",
          totalPrice: 3450000,
          bookingAmount: 495000,
          monthlyInstallment: 68000,
          totalInstallments: 36,
        },
      ],
    },
    {
      id: "overseas-saffron",
      name: "Overseas Saffron Block",
      status: "available",
      plotSizes: ["5 Marla", "10 Marla", "1 Kanal"],
      prices: [
        {
          plotSize: "1 Kanal",
          totalPrice: 6200000,
          bookingAmount: 895000,
          monthlyInstallment: 125000,
          totalInstallments: 36,
        },
      ],
    },
  ],
  development: [
    {
      id: "dev-sfc-1",
      date: "August 2026",
      title: "Entrance Gate & Boulevard Earthwork",
      description: "Grand gate structure under finishing; 120ft main avenue grading and drainage works in progress.",
      images: ["/images/projects/saffron-city/gallery1.jpg"],
      percentage: 70,
    },
  ],
  paymentPlan: {
    description: "Highly accessible 3-year monthly and quarterly payment plans with low down payment.",
    plans: [
      {
        id: "plan-saffron-3yr",
        name: "3-Year Easy Installment Plan",
        duration: "3 years",
        downPayment: "15% Down Payment",
        installments: "85% in 36 Monthly Installments",
        details: [
          "15% Down payment at registration",
          "Low, manageable monthly payments",
          "Balloting & sector allocation after 40% clearance",
        ],
      },
    ],
    notes: [
      "Special discounts on full cash payments",
      "No hidden development surcharges during initial launch",
    ],
  },
  pricing: {
    currency: "PKR",
    minPrice: 1950000,
    maxPrice: 12500000,
    pricePerMarla: 390000,
    lastUpdated: "2026-08-20",
    disclaimer: "Pre-launch rates are valid for limited inventory. Consult our advisors for current rate confirmations.",
  },
  amenities: [
    { id: "am-1", name: "Grand Saffron Entrance Gate", icon: "shield", description: "Iconic monumental entrance with automated boom barriers." },
    { id: "am-2", name: "Central Theme Park & Lake", icon: "park", description: "Expansive recreational green space with jogging tracks and family gazebos." },
    { id: "am-3", name: "Saffron Commercial Plaza", icon: "shopping-bag", description: "Multi-purpose retail, supermarket, and banking hubs." },
    { id: "am-4", name: "Solar Powered Street Infrastructure", icon: "sun", description: "Eco-friendly uninterrupted LED lighting across all boulevards." },
    { id: "am-5", name: "Modern Health Clinic & School", icon: "hospital", description: "Integrated community clinic and reputable educational campuses." },
  ],
  gallery: [
    { id: "g-1", url: "/images/projects/saffron-city/cover.jpg", alt: "Saffron City Grand Gateway", category: "Entrance" },
    { id: "g-2", url: "/images/projects/saffron-city/gallery1.jpg", alt: "Executive Residential Block", category: "Residential" },
    { id: "g-3", url: "/images/projects/saffron-city/gallery2.jpg", alt: "Saffron Commercial Plaza", category: "Commercial" },
    { id: "g-4", url: "/images/projects/saffron-city/gallery3.jpg", alt: "Central Theme Park & Sports Complex", category: "Amenities" },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Why is Saffron City ideal for first-time property investors?",
      answer: "With 5 Marla plots starting under PKR 2 Million and installments under PKR 40,000/month, Saffron City delivers unbeatable accessibility near the Ring Road.",
    },
  ],
  legal: {
    nocStatus: "Under Process with RDA & Competent Authorities",
    approvalAuthority: "Rawalpindi Development Authority (RDA)",
    documents: [{ name: "Land Ownership & Planning Approval Submission", url: "/about/credentials" }],
    disclaimer: "Legends Marketing is an authorized sales partner for Saffron City Islamabad.",
  },
  advisor: {
    name: "Kamran Qureshi",
    designation: "Senior Investment Advisor",
    phone: "0323 1235444",
    whatsapp: "923231235444",
    email: "legends.marketing.official@gmail.com",
    experience: "10+ Years in Twin Cities Corridor Real Estate",
  },
  seo: {
    title: "Saffron City Islamabad - Affordable Plots & Payment Plans | Legends Marketing",
    description:
      "Book your plot in Saffron City Islamabad with Legends Marketing. Budget-friendly 3-year installments near Ring Road and G.T Road.",
    keywords: ["saffron city islamabad", "affordable plots islamabad", "ring road plots rawalpindi", "saffron city payment plan"],
  },
  createdAt: "2024-01-06",
  updatedAt: "2026-08-20",
};