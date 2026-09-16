import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "inv-consultancy",
    slug: "investment-consultancy",
    name: "Investment Consultancy",
    shortDescription:
      "Personalized guidance for local and overseas real estate investors.",
    description:
      "Work with our advisors to understand market opportunities and make confident investment decisions.",
    icon: "consultancy",
    href: "/investor-services/investment-consultancy",
    features: ["One-on-one advisory", "Goal-based planning", "Market overview"],
  },
  {
    id: "property-buying",
    slug: "property-buying",
    name: "Property Buying",
    shortDescription:
      "Complete buying assistance from selection to possession.",
    description:
      "We help you shortlist, verify and book the right property for your needs.",
    icon: "buying",
    href: "/investor-services/property-buying",
    features: ["Project shortlisting", "Verification", "Booking support"],
  },
  {
    id: "property-selling",
    slug: "property-selling",
    name: "Property Selling",
    shortDescription:
      "Professional selling services with market-driven pricing.",
    description:
      "Sell your property at the best possible value with our buyer network and pricing expertise.",
    icon: "selling",
    href: "/investor-services/property-selling",
    features: ["Market pricing", "Buyer matching", "Secure transactions"],
  },
  {
    id: "portfolio-planning",
    slug: "portfolio-planning",
    name: "Portfolio Planning",
    shortDescription:
      "Build a balanced and profitable property portfolio.",
    description:
      "Plan your real estate portfolio to balance risk, liquidity and returns.",
    icon: "portfolio",
    href: "/investor-services/portfolio-planning",
    features: ["Asset mix strategy", "Risk assessment", "Growth planning"],
  },
  {
    id: "market-research",
    slug: "market-research",
    name: "Market Research",
    shortDescription:
      "Data-driven analysis of property markets and trends.",
    description:
      "Access research-led evaluation of Islamabad and Rawalpindi property markets.",
    icon: "research",
    href: "/investor-services/market-research",
    features: ["Market reports", "Price trends", "Area analysis"],
  },
  {
    id: "project-selection",
    slug: "project-selection",
    name: "Project Selection",
    shortDescription:
      "Choose the right project for your budget and goals.",
    description:
      "Our advisors match your budget, timeline and goals with the most suitable projects.",
    icon: "selection",
    href: "/investor-services/project-selection",
    features: ["Budget matching", "Comparison", "Expert shortlist"],
  },
  {
    id: "resale-assistance",
    slug: "resale-assistance",
    name: "Resale Assistance",
    shortDescription:
      "Buy or sell resale plots, houses and files with expert help.",
    description:
      "End-to-end assistance for resale transactions including verification and paperwork.",
    icon: "resale",
    href: "/investor-services/resale-assistance",
    features: ["File verification", "Buyer/seller matching", "Paperwork support"],
  },
  {
    id: "investment-advisory",
    slug: "investment-advisory",
    name: "Investment Advisory",
    shortDescription:
      "Ongoing advisory and monitoring for long-term investors.",
    description:
      "Continuous monitoring, reviews and guidance to keep your investment on track.",
    icon: "advisory",
    href: "/investor-services/investment-advisory",
    features: ["Periodic reviews", "Market monitoring", "Exit strategies"],
  },
];