import type { Project } from "@/types/project";

export const faisalTown: Project = {
  id: "faisal-town-001",
  slug: "faisal-town-islamabad",
  name: "Faisal Town Islamabad",
  tagline: "Premium Living with Prime Connectivity",
  status: "active",
  category: "residential",
  coverImage: "/images/projects/faisal-town/cover.webp",
  location: {
    area: "M-2 Motorway & Thalian Interchange",
    city: "Rawalpindi / Islamabad",
    province: "Punjab",
    address: "Faisal Town Phase 2, Adjacent to Thalian Interchange & Airport",
    coordinates: { lat: 33.58, lng: 72.88 },
    googleMapsUrl: "https://maps.google.com/?q=Faisal+Town+Phase+2",
    nearby: [
      { name: "Thalian Motorway Interchange", distance: "2 min", type: "transport" },
      { name: "Islamabad International Airport", distance: "8 min", type: "transport" },
      { name: "Kashmir Highway Extension", distance: "5 min", type: "transport" },
      { name: "Downtown Islamabad G-11", distance: "20 min", type: "city" },
    ],
  },
  overview: {
    description:
      "Faisal Town Phase 2 is an esteemed project by Zedem International under the leadership of Chaudhry Abdul Majeed. Renowned across Pakistan for rapid delivery, pristine landscaping, top-tier engineering standards, and unmatched investor trust.",
    highlights: [
      "Backed by the Proven Track Record of Zedem International",
      "Direct Interchange Access to M-2 Motorway",
      "Over 40% Green Open Spaces and Botanical Parks",
      "High Resale Liquidity & Rapid Capital Appreciation",
      "Complete Gated Community with Commercial Plazas",
    ],
    totalArea: "35,000+ Kanals",
    plotSizes: ["5.56 Marla", "8 Marla", "10.89 Marla", "14.22 Marla", "1 Kanal", "2 Kanal"],
    possessionStatus: "Phase 1 Delivered; Phase 2 Fast-Track Development Underway",
  },
  masterPlan: {
    description:
      "Engineered layout featuring wide 225ft main avenues, commercial boulevards, Jamia Mosques, community sports clubs, and underground utility conduits.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&auto=format",
    totalPlots: 25000,
  },
  blocks: [
    {
      id: "phase2-exec-a",
      name: "Executive Block A",
      status: "available",
      plotSizes: ["5.56 Marla", "8 Marla", "10.89 Marla"],
      prices: [
        {
          plotSize: "5.56 Marla",
          totalPrice: 2795000,
          bookingAmount: 595000,
          monthlyInstallment: 120000,
          totalInstallments: 18,
        },
        {
          plotSize: "10.89 Marla",
          totalPrice: 5245000,
          bookingAmount: 995000,
          monthlyInstallment: 235000,
          totalInstallments: 18,
        },
      ],
    },
    {
      id: "phase2-exec-b",
      name: "Executive Block B (1 & 2 Kanal)",
      status: "available",
      plotSizes: ["1 Kanal", "2 Kanal"],
      prices: [
        {
          plotSize: "1 Kanal",
          totalPrice: 8950000,
          bookingAmount: 1495000,
          monthlyInstallment: 414000,
          totalInstallments: 18,
        },
      ],
    },
  ],
  development: [
    {
      id: "dev-ft-1",
      date: "August 2026",
      title: "Main Boulevard Asphalt & Grand Gate Construction",
      description: "Earthwork 90% completed with heavy machinery working 24/7 on main boulevards and bridges.",
      images: ["/images/projects/faisal-town/gallery1.jpg"],
      percentage: 75,
    },
  ],
  paymentPlan: {
    description: "Convenient 4.5-year / 18-quarterly installment schedule with reasonable initial registration.",
    plans: [
      {
        id: "plan-4.5yr",
        name: "4.5-Year (18 Installments) Plan",
        duration: "4.5 years",
        downPayment: "20% Down Payment",
        installments: "80% in 18 Bi-Annual / Quarterly Installments",
        details: [
          "Down payment with immediate file allotment",
          "18 quarterly payments spaced evenly",
          "20% discount on 100% upfront lump sum payment",
        ],
      },
    ],
    notes: [
      "Inclusive of all development charges as per Zedem terms",
      "Guaranteed transparent transfer and verification",
    ],
  },
  pricing: {
    currency: "PKR",
    minPrice: 2795000,
    maxPrice: 17500000,
    pricePerMarla: 500000,
    lastUpdated: "2026-08-20",
    disclaimer: "Prices subject to Zedem International circulars. Book via Legends Marketing for verified official allocations.",
  },
  amenities: [
    { id: "am-1", name: "Grand Central Jamia Mosque", icon: "moon", description: "Architectural masterpiece designed for large congregational prayers." },
    { id: "am-2", name: "225ft Main Access Boulevard", icon: "map", description: "Expansive multi-lane arterial road connected directly to Motorway." },
    { id: "am-3", name: "Commercial Financial District", icon: "building", description: "Corporate towers, retail plazas, and banking avenues." },
    { id: "am-4", name: "Lush Community Parks & Sports Arena", icon: "award", description: "Cricket grounds, tennis courts, and children's amusement zones." },
    { id: "am-5", name: "Underground Utilities & Water Filtration", icon: "zap", description: "Uninterrupted electricity, gas, sewerage, and clean water plants." },
  ],
  gallery: [
    { id: "g-1", url: "/images/projects/faisal-town/cover.webp", alt: "Faisal Town Grand Avenue", category: "Entrance" },
    { id: "g-2", url: "/images/projects/faisal-town/gallery1.jpg", alt: "Executive Residential Sector", category: "Residential" },
    { id: "g-3", url: "/images/projects/faisal-town/gallery2.jpg", alt: "Commercial Central Plaza", category: "Commercial" },
    { id: "g-4", url: "/images/projects/faisal-town/gallery3.jpg", alt: "Family Parks & Community Center", category: "Lifestyle" },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Why is Zedem International known for high returns?",
      answer: "Zedem projects (Faisal Hills, Faisal Town Phase 1, Faisal Residencia) have historically delivered before deadlines with 100%+ capital appreciation for early investors.",
    },
  ],
  legal: {
    nocStatus: "Approved by RDA",
    approvalAuthority: "Rawalpindi Development Authority (RDA)",
    documents: [{ name: "Zedem Official Partnership Certificate", url: "/about/credentials" }],
    disclaimer: "Legends Marketing is an authorized sales partner for Faisal Town projects.",
  },
  advisor: {
    name: "Kamran Qureshi",
    designation: "Senior Investment Advisor",
    phone: "0323 1235444",
    whatsapp: "923231235444",
    email: "legends.marketing.official@gmail.com",
    experience: "10+ Years in Zedem & Motorway Corridor Projects",
  },
  seo: {
    title: "Faisal Town Phase 2 Islamabad - Plots & Payment Plan | Legends Marketing",
    description:
      "Explore Faisal Town Phase 2 with authorized sales partner Legends Marketing. Prime plots near Thalian Interchange with flexible 18-installment plan.",
    keywords: ["faisal town phase 2", "zedem international", "faisal town plots islamabad", "chaudhry abdul majeed projects"],
  },
  createdAt: "2024-01-04",
  updatedAt: "2026-08-20",
};