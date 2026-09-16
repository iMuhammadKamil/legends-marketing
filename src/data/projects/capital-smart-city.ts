import type { Project } from "@/types/project";

export const capitalSmartCity: Project = {
  id: "capital-smart-city-001",
  slug: "capital-smart-city",
  name: "Capital Smart City",
  tagline: "Pakistan's First Smart Eco City",
  status: "active",
  category: "mixed",
  coverImage: "/images/projects/capital-smart-city/cover.jpg",
  location: {
    area: "M-2 Motorway, Near Thalian Interchange",
    city: "Islamabad / Rawalpindi",
    province: "Punjab",
    address: "Capital Smart City, M-2 Motorway Dedicated Interchange, Islamabad",
    coordinates: { lat: 33.55, lng: 72.95 },
    googleMapsUrl: "https://maps.google.com/?q=Capital+Smart+City",
    nearby: [
      { name: "Dedicated M-2 Interchange", distance: "1 min", type: "transport" },
      { name: "Islamabad International Airport", distance: "12 min", type: "transport" },
      { name: "CPEC Route", distance: "10 min", type: "transport" },
      { name: "New Islamabad Airport Metro", distance: "15 min", type: "transport" },
    ],
  },
  overview: {
    description:
      "Capital Smart City Islamabad is Pakistan's first Smart City and the 4th in Asia. Master-planned by world-renowned consultant Surbana Jurong (Singapore) and developed by Future Development Holdings (FDHL) & HRL, it introduces automated traffic, smart resource management, Silicon Village tech park, and smart villas.",
    highlights: [
      "Master Planned by Surbana Jurong (Singapore)",
      "Approved Dedicated M-2 Motorway Interchange",
      "Silicon Village & Financial Square Tech Hubs",
      "Crystal Lake & 18-Hole Championship Golf Course",
      "Fast-Track Possession in Overseas Central & Executive Blocks",
    ],
    totalArea: "80,000+ Kanals",
    plotSizes: ["3.5 Marla", "5 Marla", "7 Marla", "10 Marla", "12 Marla", "1 Kanal", "2 Kanal"],
    possessionStatus: "Possession Handed Over in Overseas Prime & Harmony Blocks",
  },
  masterPlan: {
    description:
      "A sustainable eco-friendly blueprint featuring smart transportation, smart metering, dedicated financial and IT districts, education city, and luxury lake view villas.",
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop&auto=format",
    totalPlots: 45000,
  },
  blocks: [
    {
      id: "overseas-central",
      name: "Overseas Central Block",
      status: "available",
      plotSizes: ["5 Marla", "10 Marla", "1 Kanal"],
      prices: [
        {
          plotSize: "5 Marla",
          totalPrice: 3200000,
          bookingAmount: 480000,
          monthlyInstallment: 55000,
          totalInstallments: 36,
        },
        {
          plotSize: "10 Marla",
          totalPrice: 5800000,
          bookingAmount: 870000,
          monthlyInstallment: 102000,
          totalInstallments: 36,
        },
      ],
    },
    {
      id: "overseas-prime",
      name: "Overseas Prime II",
      status: "available",
      plotSizes: ["7 Marla", "10 Marla", "1 Kanal", "2 Kanal"],
      prices: [
        {
          plotSize: "1 Kanal",
          totalPrice: 11500000,
          bookingAmount: 1725000,
          monthlyInstallment: 200000,
          totalInstallments: 36,
        },
      ],
    },
    {
      id: "smart-villas",
      name: "Smart Villas (Ready Built)",
      status: "available",
      plotSizes: ["5 Marla", "10 Marla", "1 Kanal"],
      prices: [
        {
          plotSize: "5 Marla Villa",
          totalPrice: 14500000,
          bookingAmount: 2900000,
          monthlyInstallment: 320000,
          totalInstallments: 36,
        },
      ],
    },
  ],
  development: [
    {
      id: "dev-csc-1",
      date: "August 2026",
      title: "Interchange Bridge & Crystal Lake Waterfront Progress",
      description: "Dedicated Motorway interchange operational, silicon village ground work progressing rapidly.",
      images: ["/images/projects/capital-smart-city/gallery1.jpg"],
      percentage: 88,
    },
  ],
  paymentPlan: {
    description: "3 to 4-year structured quarterly installment plans with flexible possession milestones.",
    plans: [
      {
        id: "plan-3yr",
        name: "3-Year Smart Investor Plan",
        duration: "3 years",
        downPayment: "20% Down Payment",
        installments: "80% in 12 Quarterly Installments",
        details: [
          "20% Down payment with instant confirmation",
          "12 equal quarterly payments",
          "Smart infrastructure development charges included",
        ],
      },
    ],
    notes: [
      "10% rebate on lump-sum full advance payment",
      "Special allocation quota for Overseas Pakistanis (NICOP holders)",
    ],
  },
  pricing: {
    currency: "PKR",
    minPrice: 3200000,
    maxPrice: 35000000,
    pricePerMarla: 640000,
    lastUpdated: "2026-08-20",
    disclaimer: "Official prices depend on block category and developer updates. Contact Legends Marketing for confirmed files.",
  },
  amenities: [
    { id: "am-1", name: "Automated Traffic & BRT System", icon: "truck", description: "Smart electric bus transit with automated signal control." },
    { id: "am-2", name: "Silicon Village & IT Tech Park", icon: "cpu", description: "Dedicated free-zone technology park for software and innovation." },
    { id: "am-3", name: "18-Hole Championship Golf Course", icon: "flag", description: "Harradine Golf designed PGA standard international course." },
    { id: "am-4", name: "Crystal Lake & Marina", icon: "water", description: "Floating restaurants, musical fountains, and lakeside promenades." },
    { id: "am-5", name: "Smart Resource & Power Grid", icon: "zap", description: "Self-sustaining solar and high-efficiency uninterrupted power." },
  ],
  gallery: [
    { id: "g-1", url: "/images/projects/capital-smart-city/cover.jpg", alt: "Capital Smart City Panorama", category: "Overview" },
    { id: "g-2", url: "/images/projects/capital-smart-city/gallery1.jpg", alt: "Smart Villas & Crystal Lake", category: "Residential" },
    { id: "g-3", url: "/images/projects/capital-smart-city/gallery2.jpg", alt: "Silicon Village & Financial Square", category: "Commercial" },
    { id: "g-4", url: "/images/projects/capital-smart-city/gallery3.jpg", alt: "Lake View Commercial & Golf Estate", category: "Lifestyle" },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Is Capital Smart City approved by RDA?",
      answer: "Yes, Capital Smart City has full NOC approval from the Rawalpindi Development Authority (RDA) covering its extensive master plan acreage.",
    },
    {
      id: "faq-2",
      question: "What makes it a 'Smart City'?",
      answer: "It utilizes modern IoT infrastructure, automated smart traffic, automated waste collection, digital surveillance, smart power grids, and eco-friendly architecture.",
    },
  ],
  legal: {
    nocStatus: "Approved by RDA",
    approvalAuthority: "Rawalpindi Development Authority (RDA)",
    documents: [{ name: "RDA Approved Layout Plan", url: "/about/credentials" }],
    disclaimer: "Legends Marketing is an authorized sales and marketing partner for Capital Smart City.",
  },
  advisor: {
    name: "Ahmed Raza",
    designation: "Principal Investment Consultant",
    phone: "0323 1235444",
    whatsapp: "923231235444",
    email: "legends.marketing.official@gmail.com",
    experience: "9+ Years in High-Yield Real Estate Assets",
  },
  seo: {
    title: "Capital Smart City Islamabad - Plots & Smart Villas | Legends Marketing",
    description:
      "Invest in Capital Smart City with authorized sales partner Legends Marketing. M-2 Motorway access, Silicon Village, and flexible 3-year payment plans.",
    keywords: ["capital smart city", "capital smart city islamabad", "smart villas islamabad", "surbana jurong smart city"],
  },
  createdAt: "2024-01-07",
  updatedAt: "2026-08-20",
};