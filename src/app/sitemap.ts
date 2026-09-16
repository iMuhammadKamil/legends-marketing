import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url).replace(/\/$/, "");

  // Core & Submenu Static Routes
  const internalPaths: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    // Home & Main Sections
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/about", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about/our-story", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/our-values", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/credentials", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/partners", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/leadership", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.9, changeFrequency: "daily" },
    { path: "/investor-services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/investment-tools", priority: 0.9, changeFrequency: "weekly" },
    { path: "/overseas-pakistanis", priority: 0.9, changeFrequency: "weekly" },
    { path: "/market-insights", priority: 0.8, changeFrequency: "daily" },
    { path: "/media", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },

    // Investor Services
    { path: "/investor-services/investment-consultancy", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investor-services/property-buying", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investor-services/property-selling", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investor-services/portfolio-planning", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investor-services/market-research", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investor-services/project-selection", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investor-services/resale-assistance", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investor-services/investment-advisory", priority: 0.8, changeFrequency: "weekly" },

    // Investment Tools
    { path: "/investment-tools/roi-calculator", priority: 0.85, changeFrequency: "weekly" },
    { path: "/investment-tools/installment-calculator", priority: 0.85, changeFrequency: "weekly" },
    { path: "/investment-tools/budget-calculator", priority: 0.85, changeFrequency: "weekly" },
    { path: "/investment-tools/project-comparison", priority: 0.85, changeFrequency: "weekly" },
    { path: "/investment-tools/property-finder", priority: 0.85, changeFrequency: "weekly" },
    { path: "/investment-tools/investment-quiz", priority: 0.8, changeFrequency: "monthly" },

    // Overseas Pakistanis
    { path: "/overseas-pakistanis/why-invest", priority: 0.85, changeFrequency: "weekly" },
    { path: "/overseas-pakistanis/investment-guide", priority: 0.85, changeFrequency: "weekly" },
    { path: "/overseas-pakistanis/documentation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/overseas-pakistanis/remote-booking", priority: 0.85, changeFrequency: "weekly" },
    { path: "/overseas-pakistanis/payment-methods", priority: 0.8, changeFrequency: "monthly" },
    { path: "/overseas-pakistanis/power-of-attorney", priority: 0.8, changeFrequency: "monthly" },
    { path: "/overseas-pakistanis/overseas-advisor", priority: 0.85, changeFrequency: "weekly" },

    // Market Insights
    { path: "/market-insights/development-updates", priority: 0.8, changeFrequency: "daily" },
    { path: "/market-insights/price-updates", priority: 0.8, changeFrequency: "daily" },
    { path: "/market-insights/reports", priority: 0.8, changeFrequency: "weekly" },
    { path: "/market-insights/guides", priority: 0.8, changeFrequency: "weekly" },
    { path: "/market-insights/news", priority: 0.8, changeFrequency: "daily" },

    // Media
    { path: "/media/news", priority: 0.75, changeFrequency: "daily" },
    { path: "/media/blog", priority: 0.75, changeFrequency: "weekly" },
    { path: "/media/videos", priority: 0.75, changeFrequency: "weekly" },
    { path: "/media/gallery", priority: 0.75, changeFrequency: "weekly" },
    { path: "/media/events", priority: 0.7, changeFrequency: "monthly" },
    { path: "/media/press", priority: 0.7, changeFrequency: "monthly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = internalPaths.map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.updatedAt || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  return [...staticEntries, ...projectEntries];
}

