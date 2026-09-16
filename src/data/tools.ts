import type { Tool } from "@/types/service";

export const tools: Tool[] = [
  {
    id: "roi-calculator",
    slug: "roi-calculator",
    name: "ROI Calculator",
    shortDescription:
      "Estimate the potential return on your real estate investment.",
    description:
      "Estimate future value, capital gain and ROI based on your investment amount and holding period.",
    icon: "roi",
    href: "/investment-tools/roi-calculator",
  },
  {
    id: "installment-calculator",
    slug: "installment-calculator",
    name: "Installment Calculator",
    shortDescription:
      "Calculate monthly installments for project payment plans.",
    description:
      "Break down down-payments and monthly installments for any project plan.",
    icon: "installment",
    href: "/investment-tools/installment-calculator",
  },
  {
    id: "budget-calculator",
    slug: "budget-calculator",
    name: "Investment Budget Calculator",
    shortDescription:
      "Plan your investment budget and see what you can afford.",
    description:
      "Understand how much you can invest and which projects fit your budget.",
    icon: "budget",
    href: "/investment-tools/budget-calculator",
  },
  {
    id: "project-comparison",
    slug: "project-comparison",
    name: "Project Comparison",
    shortDescription:
      "Compare projects side by side on key investment factors.",
    description:
      "Compare location, approval status, plot sizes, payment plans and development.",
    icon: "comparison",
    href: "/investment-tools/project-comparison",
  },
  {
    id: "property-finder",
    slug: "property-finder",
    name: "Property Finder",
    shortDescription:
      "Find investment properties that match your criteria.",
    description:
      "Filter projects by budget, type and preferred location to find your best options.",
    icon: "finder",
    href: "/investment-tools/property-finder",
  },
  {
    id: "investment-quiz",
    slug: "investment-quiz",
    name: "Investment Quiz",
    shortDescription:
      "Discover the best investment options for your profile.",
    description:
      "Answer a few questions and get personalized project recommendations.",
    icon: "quiz",
    href: "/investment-tools/investment-quiz",
  },
];