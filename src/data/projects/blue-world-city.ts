import type { Project } from "@/types/project";

export const blueWorldCity: Project = {
  id: "blue-world-city-001",
  slug: "blue-world-city",
  name: "Blue World City",
  tagline: "The First Purpose-Built Tourist City",
  status: "active",
  category: "residential",
  coverImage: "/images/projects/blue-world-city/cover.jpg",
  location: {
    area: "Chakri Road, Near M-2",
    city: "Rawalpindi / Islamabad",
    province: "Punjab",
    address: "Blue World City, Main Chakri Road, Rawalpindi",
    coordinates: { lat: 33.4, lng: 72.9 },
    googleMapsUrl: "https://maps.google.com/?q=Blue+World+City+Rawalpindi",
    nearby: [
      { name: "Islamabad International Airport", distance: "15 min", type: "transport" },
      { name: "CPEC Western Route", distance: "5 min", type: "transport" },
      { name: "M-2 Motorway Interchange", distance: "10 min", type: "transport" },
      { name: "Rawalpindi Ring Road", distance: "5 min", type: "transport" },
    ],
  },
  overview: {
    description:
      "Blue World City is an iconic mega-development by Blue Group of Companies in collaboration with Shan Jian Municipal Engineering Company. Designed as Pakistan's first tourist city, it features world-renowned architectural replicas including the Burj Al Arab, Blue Mosque, Horse Mascots, Rumi Square, and the Water Theme Park.",
    highlights: [
      "Direct Access to CPEC Route & M-2 Motorway",
      "World-Class Tourist Attractions & Landmarks",
      "Dedicated Overseas & Sports Valley Blocks",
      "High ROI & Affordable 4-Year Installment Plans",
      "Complete Commercial and Educational Infrastructure",
    ],
    totalArea: "100,000+ Kanals",
    plotSizes: ["4.5 Marla", "5 Marla", "7 Marla", "10 Marla", "1 Kanal", "2 Kanal"],
    possessionStatus: "Possession Handover in General & Overseas Blocks Underway",
  },
  masterPlan: {
    description:
      "Sprawling master-planned city featuring themed sectors including General Block, Overseas Block, Waterfront District, Hollywood Block, and Sports Valley.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format",
    totalPlots: 50000,
  },
  blocks: [
    {
      id: "overseas-block",
      name: "Overseas Executive Block",
      status: "available",
      plotSizes: ["7 Marla", "10 Marla", "1 Kanal"],
      prices: [
        {
          plotSize: "7 Marla",
          totalPrice: 2450000,
          bookingAmount: 367500,
          monthlyInstallment: 45000,
          totalInstallments: 40,
        },
        {
          plotSize: "10 Marla",
          totalPrice: 3500000,
          bookingAmount: 525000,
          monthlyInstallment: 65000,
          totalInstallments: 40,
        },
      ],
    },
    {
      id: "sports-valley",
      name: "Sports Valley Block",
      status: "available",
      plotSizes: ["5 Marla", "8 Marla", "1 Kanal"],
      prices: [
        {
          plotSize: "5 Marla",
          totalPrice: 2200000,
          bookingAmount: 330000,
          monthlyInstallment: 40000,
          totalInstallments: 40,
        },
      ],
    },
    {
      id: "waterfront-district",
      name: "Waterfront District",
      status: "available",
      plotSizes: ["6 Marla", "12 Marla", "18 Marla"],
      prices: [
        {
          plotSize: "6 Marla",
          totalPrice: 2750000,
          bookingAmount: 412500,
          monthlyInstallment: 52000,
          totalInstallments: 40,
        },
      ],
    },
  ],
  development: [
    {
      id: "dev-bwc-1",
      date: "August 2026",
      title: "Horse Mascots & Water Theme Park Operational",
      description: "Landmark structures completed with continuous road carpeting and electrification across sectors.",
      images: ["/images/projects/blue-world-city/gallery1.jpg"],
      percentage: 80,
    },
  ],
  paymentPlan: {
    description: "Budget-friendly 4-year easy monthly and quarterly installment plans.",
    plans: [
      {
        id: "plan-4yr",
        name: "4-Year Flexible Plan",
        duration: "4 years",
        downPayment: "15% Down Payment",
        installments: "85% in 40 Monthly / 8 Half-Yearly Installments",
        details: [
          "15% Down payment at registration",
          "Convenient monthly installment schedule",
          "Balloting eligibility upon completion of 50% payments",
        ],
      },
    ],
    notes: [
      "10% discount on upfront full payment",
      "Special discounted rates for Overseas Pakistani investors",
    ],
  },
  pricing: {
    currency: "PKR",
    minPrice: 2200000,
    maxPrice: 15000000,
    pricePerMarla: 440000,
    lastUpdated: "2026-08-20",
    disclaimer: "Developer prices and inventory update frequently. Consult our advisor for official booking forms.",
  },
  amenities: [
    { id: "am-1", name: "Horse Mascots & Tourism Hub", icon: "camera", description: "World's tallest Horse Mascots and world-scale theme parks." },
    { id: "am-2", name: "Blue Mosque Replica", icon: "monument", description: "Exact replica of Istanbul’s iconic historic mosque." },
    { id: "am-3", name: "Waterfront Lake & Promenade", icon: "water", description: "Lakeside dining, water sports, and family leisure zones." },
    { id: "am-4", name: "Sports Arena & Stadium", icon: "activity", description: "Largest international standard sports complex in twin cities." },
    { id: "am-5", name: "24/7 Security & CCTV", icon: "shield", description: "Round-the-clock patrol with automated vehicle access control." },
  ],
  gallery: [
    { id: "g-1", url: "/images/projects/blue-world-city/cover.jpg", alt: "Blue World City Grand Entrance", category: "Entrance" },
    { id: "g-2", url: "/images/projects/blue-world-city/gallery1.jpg", alt: "Waterfront District & Replicas", category: "Waterfront" },
    { id: "g-3", url: "/images/projects/blue-world-city/gallery2.jpg", alt: "Overseas Executive Block", category: "Residential" },
    { id: "g-4", url: "/images/projects/blue-world-city/gallery3.jpg", alt: "Sports Valley & Stadium", category: "Sports" },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "What makes Blue World City unique for investment?",
      answer: "Its direct proximity to the CPEC route, Ring Road access, international tourism theme, and very accessible 4-year installment plan make it one of Pakistan's highest-volume investment projects.",
    },
  ],
  legal: {
    nocStatus: "Planning permission granted by RDA",
    approvalAuthority: "Rawalpindi Development Authority (RDA)",
    documents: [{ name: "Developer Authorization Letter", url: "/about/credentials" }],
    disclaimer: "Legends Marketing is a registered sales and marketing partner for Blue World City.",
  },
  advisor: {
    name: "Zainab Chaudhry",
    designation: "Senior Investment Consultant",
    phone: "0323 1235444",
    whatsapp: "923231235444",
    email: "legends.marketing.official@gmail.com",
    experience: "7+ Years in CPEC Corridor Projects",
  },
  seo: {
    title: "Blue World City Rawalpindi - Plots & Payment Plans | Legends Marketing",
    description:
      "Authorized partner Legends Marketing brings you Blue World City plots with 4-year easy installments on Chakri Road near Islamabad Airport.",
    keywords: ["blue world city", "blue world city rawalpindi", "chakri road plots", "cpec investment"],
  },
  createdAt: "2024-01-02",
  updatedAt: "2026-08-20",
};