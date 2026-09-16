import type { NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Company Overview", href: "/about" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Values", href: "/about/our-values" },
      { label: "Registration & Credentials", href: "/about/credentials" },
      { label: "Strategic Partners", href: "/about/partners" },
      { label: "Leadership & Advisors", href: "/about/leadership" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "ParkView City Islamabad", href: "/projects/parkview-city-islamabad" },
      { label: "Blue World City", href: "/projects/blue-world-city" },
      { label: "Hashoo Real Estate", href: "/projects/hashoo-real-estate" },
      { label: "Faisal Town", href: "/projects/faisal-town-islamabad" },
      { label: "Premier Choice International", href: "/projects/premier-choice-international" },
      { label: "Saffron City Islamabad", href: "/projects/saffron-city-islamabad" },
      { label: "Capital Smart City", href: "/projects/capital-smart-city" },
    ],
  },
  {
    label: "Investor Services",
    href: "/investor-services",
    children: [
      { label: "Investment Consultancy", href: "/investor-services/investment-consultancy" },
      { label: "Property Buying", href: "/investor-services/property-buying" },
      { label: "Property Selling", href: "/investor-services/property-selling" },
      { label: "Portfolio Planning", href: "/investor-services/portfolio-planning" },
      { label: "Market Research", href: "/investor-services/market-research" },
      { label: "Project Selection", href: "/investor-services/project-selection" },
      { label: "Resale Assistance", href: "/investor-services/resale-assistance" },
      { label: "Investment Advisory", href: "/investor-services/investment-advisory" },
    ],
  },
  {
    label: "Overseas Pakistanis",
    href: "/overseas-pakistanis",
    children: [
      { label: "Why Invest in Pakistan", href: "/overseas-pakistanis/why-invest" },
      { label: "Overseas Investment Guide", href: "/overseas-pakistanis/investment-guide" },
      { label: "Documentation", href: "/overseas-pakistanis/documentation" },
      { label: "Remote Booking Process", href: "/overseas-pakistanis/remote-booking" },
      { label: "Payment Methods", href: "/overseas-pakistanis/payment-methods" },
      { label: "Power of Attorney Guide", href: "/overseas-pakistanis/power-of-attorney" },
      { label: "Overseas Advisor", href: "/overseas-pakistanis/overseas-advisor" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "News", href: "/media/news" },
      { label: "Blog", href: "/media/blog" },
      { label: "Videos", href: "/media/videos" },
      { label: "Project Gallery", href: "/media/gallery" },
      { label: "Events", href: "/media/events" },
      { label: "Press & PR", href: "/media/press" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    children: [
      { label: "Book a Consultation", href: "/contact" },
      { label: "Call Us", href: "tel:+923231235444" },
      {
        label: "WhatsApp Chat",
        href: "https://wa.me/923231235444?text=Hello%20Legends%20Marketing%2C%20I%20am%20interested%20in%20real%20estate%20investment.",
      },
      { label: "Email Us", href: "mailto:legends.marketing.official@gmail.com" },
    ],
  },
];

export const footerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Investor Services", href: "/investor-services" },
  { label: "Investment Tools", href: "/investment-tools" },
  { label: "Overseas Pakistanis", href: "/overseas-pakistanis" },
  { label: "Market Insights", href: "/market-insights" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];

export function getNavItemByLabel(label: string): NavItem | undefined {
  return navItems.find((item) => item.label === label);
}