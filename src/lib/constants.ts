export const SITE = {
  name: "Legends Marketing",
  tagline: "Turning Properties into Profitable Opportunities",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://legendsmarketing.com",
  locale: "en_PK",
} as const;

export const PROJECT_STATUS = {
  active: "Active",
  upcoming: "Upcoming",
  completed: "Completed",
  "sold-out": "Sold Out",
} as const;

export const PROJECT_CATEGORY = {
  residential: "Residential",
  commercial: "Commercial",
  mixed: "Residential & Commercial",
} as const;

export const BUDGET_RANGES = [
  { id: "under-2m", label: "Under PKR 2M", min: 0, max: 2000000 },
  { id: "2m-5m", label: "PKR 2M - 5M", min: 2000000, max: 5000000 },
  { id: "5m-10m", label: "PKR 5M - 10M", min: 5000000, max: 10000000 },
  { id: "10m-plus", label: "PKR 10M+", min: 10000000, max: Infinity },
] as const;

export const TIMELINES = [
  { id: "immediate", label: "Immediate" },
  { id: "3-months", label: "3 Months" },
  { id: "6-months", label: "6 Months" },
  { id: "researching", label: "Researching" },
] as const;