# LEGENDS MARKETING — Complete Website Structure & Sitemap

**Framework:** Next.js 14+ (App Router)
**Architecture:** Static + Dynamic Hybrid (SSG + ISR)
**Language:** TypeScript

---

## 1. COMPLETE FOLDER/FILE TREE

```
legends-marketing/
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo/
│   │   │   │   ├── logo-primary.svg
│   │   │   │   ├── logo-white.svg
│   │   │   │   ├── logo-icon.svg
│   │   │   │   └── favicon.ico
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   │   ├── parkview-city/
│   │   │   │   ├── blue-world-city/
│   │   │   │   ├── hashoo-real-estate/
│   │   │   │   ├── faisal-town/
│   │   │   │   ├── premier-choice/
│   │   │   │   ├── saffron-city/
│   │   │   │   └── capital-smart-city/
│   │   │   ├── about/
│   │   │   ├── team/
│   │   │   ├── partners/
│   │   │   ├── insights/
│   │   │   └── media/
│   │   ├── icons/
│   │   ├── videos/
│   │   └── documents/
│   ├── fonts/
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout (Header + Footer)
│   │   ├── page.tsx                      # Home page
│   │   ├── not-found.tsx                 # 404 page
│   │   ├── loading.tsx                   # Global loading state
│   │   ├── error.tsx                     # Global error boundary
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx                  # About Us page
│   │   │
│   │   ├── projects/
│   │   │   ├── page.tsx                  # All Projects listing
│   │   │   └── [project-slug]/
│   │   │       ├── page.tsx              # Project detail page
│   │   │       ├── layout.tsx            # Project detail layout
│   │   │       ├── loading.tsx           # Project loading state
│   │   │       └── opengraph-image.tsx   # Dynamic OG image
│   │   │
│   │   ├── investor-services/
│   │   │   ├── page.tsx                  # All services listing
│   │   │   ├── investment-consultancy/
│   │   │   │   └── page.tsx
│   │   │   ├── property-buying/
│   │   │   │   └── page.tsx
│   │   │   ├── property-selling/
│   │   │   │   └── page.tsx
│   │   │   ├── portfolio-planning/
│   │   │   │   └── page.tsx
│   │   │   ├── market-research/
│   │   │   │   └── page.tsx
│   │   │   ├── project-selection/
│   │   │   │   └── page.tsx
│   │   │   ├── resale-assistance/
│   │   │   │   └── page.tsx
│   │   │   └── investment-advisory/
│   │   │       └── page.tsx
│   │   │
│   │   ├── investment-tools/
│   │   │   ├── page.tsx                  # Tools hub page
│   │   │   ├── roi-calculator/
│   │   │   │   └── page.tsx
│   │   │   ├── installment-calculator/
│   │   │   │   └── page.tsx
│   │   │   ├── budget-calculator/
│   │   │   │   └── page.tsx
│   │   │   ├── project-comparison/
│   │   │   │   └── page.tsx
│   │   │   ├── property-finder/
│   │   │   │   └── page.tsx
│   │   │   └── investment-quiz/
│   │   │       └── page.tsx
│   │   │
│   │   ├── overseas-pakistanis/
│   │   │   ├── page.tsx                  # Overseas hub page
│   │   │   ├── why-invest/
│   │   │   │   └── page.tsx
│   │   │   ├── investment-guide/
│   │   │   │   └── page.tsx
│   │   │   ├── documentation/
│   │   │   │   └── page.tsx
│   │   │   ├── remote-booking/
│   │   │   │   └── page.tsx
│   │   │   ├── payment-methods/
│   │   │   │   └── page.tsx
│   │   │   ├── power-of-attorney/
│   │   │   │   └── page.tsx
│   │   │   └── overseas-advisor/
│   │   │       └── page.tsx
│   │   │
│   │   ├── market-insights/
│   │   │   ├── page.tsx                  # Insights hub
│   │   │   ├── news/
│   │   │   │   ├── page.tsx              # News listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx          # News article
│   │   │   ├── guides/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── reports/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── price-updates/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   └── development-updates/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── media/
│   │   │   ├── page.tsx                  # Media hub
│   │   │   ├── news/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── videos/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── gallery/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [album-slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── events/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   └── press/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx                  # Contact page
│   │   │
│   │   ├── sitemap.ts                    # Dynamic sitemap generator
│   │   ├── robots.ts                     # Robots.txt generator
│   │   └── api/
│   │       └── lead/
│   │           └── route.ts              # Lead submission API
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   ├── Logo.tsx
│   │   │   │   └── HeaderCTA.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterNav.tsx
│   │   │   │   ├── FooterContact.tsx
│   │   │   │   ├── FooterSocial.tsx
│   │   │   │   └── FooterLegal.tsx
│   │   │   └── Sidebar/
│   │   │       └── Sidebar.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── Button/
│   │   │   │   └── Button.tsx
│   │   │   ├── Card/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── InsightCard.tsx
│   │   │   │   └── ToolCard.tsx
│   │   │   ├── Badge/
│   │   │   │   └── Badge.tsx
│   │   │   ├── Container/
│   │   │   │   └── Container.tsx
│   │   │   ├── Section/
│   │   │   │   ├── Section.tsx
│   │   │   │   ├── SectionHeader.tsx
│   │   │   │   └── SectionGrid.tsx
│   │   │   ├── Grid/
│   │   │   │   └── Grid.tsx
│   │   │   ├── Heading/
│   │   │   │   ├── Heading.tsx
│   │   │   │   └── Subheading.tsx
│   │   │   ├── Text/
│   │   │   │   └── Text.tsx
│   │   │   ├── Image/
│   │   │   │   └── Image.tsx
│   │   │   ├── Icon/
│   │   │   │   └── Icon.tsx
│   │   │   ├── Divider/
│   │   │   │   └── Divider.tsx
│   │   │   ├── Spacer/
│   │   │   │   └── Spacer.tsx
│   │   │   ├── Skeleton/
│   │   │   │   └── Skeleton.tsx
│   │   │   ├── EmptyState/
│   │   │   │   └── EmptyState.tsx
│   │   │   └── Pagination/
│   │   │       └── Pagination.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── FeaturedProjects.tsx
│   │   │   │   ├── WhyInvest.tsx
│   │   │   │   ├── InvestmentOpportunities.tsx
│   │   │   │   ├── MarketInsightsPreview.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── StrategicPartners.tsx
│   │   │   │   └── HomeCTA.tsx
│   │   │   ├── about/
│   │   │   │   ├── CompanyProfile.tsx
│   │   │   │   ├── OurStory.tsx
│   │   │   │   ├── MissionVision.tsx
│   │   │   │   ├── CoreValues.tsx
│   │   │   │   ├── Leadership.tsx
│   │   │   │   ├── WhyLegends.tsx
│   │   │   │   └── Credentials.tsx
│   │   │   ├── projects/
│   │   │   │   ├── ProjectGrid.tsx
│   │   │   │   ├── ProjectFilters.tsx
│   │   │   │   ├── ProjectHero.tsx
│   │   │   │   ├── ProjectOverview.tsx
│   │   │   │   ├── ProjectLocation.tsx
│   │   │   │   ├── ProjectMasterPlan.tsx
│   │   │   │   ├── ProjectBlocks.tsx
│   │   │   │   ├── ProjectDevelopment.tsx
│   │   │   │   ├── ProjectPaymentPlan.tsx
│   │   │   │   ├── ProjectPricing.tsx
│   │   │   │   ├── ProjectHighlights.tsx
│   │   │   │   ├── ProjectAmenities.tsx
│   │   │   │   ├── ProjectGallery.tsx
│   │   │   │   ├── ProjectFAQs.tsx
│   │   │   │   ├── ProjectLegal.tsx
│   │   │   │   ├── ProjectAdvisor.tsx
│   │   │   │   ├── ProjectCTA.tsx
│   │   │   │   └── ProjectEnquiryForm.tsx
│   │   │   ├── services/
│   │   │   │   ├── ServiceHero.tsx
│   │   │   │   ├── ServiceDetails.tsx
│   │   │   │   └── ServiceCTA.tsx
│   │   │   ├── overseas/
│   │   │   │   ├── OverseasHero.tsx
│   │   │   │   ├── OverseasGuide.tsx
│   │   │   │   ├── OverseasSteps.tsx
│   │   │   │   └── OverseasCTA.tsx
│   │   │   └── contact/
│   │   │       ├── ContactHero.tsx
│   │   │       ├── ContactForm.tsx
│   │   │       ├── ContactInfo.tsx
│   │   │       ├── ContactMap.tsx
│   │   │       └── ContactCTA.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── EnquiryForm.tsx
│   │   │   ├── ConsultationForm.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   ├── PaymentPlanRequest.tsx
│   │   │   └── LeadForm.tsx
│   │   │
│   │   ├── tools/
│   │   │   ├── ROICalculator.tsx
│   │   │   ├── InstallmentCalculator.tsx
│   │   │   ├── BudgetCalculator.tsx
│   │   │   ├── ProjectComparison.tsx
│   │   │   ├── PropertyFinder.tsx
│   │   │   ├── InvestmentQuiz.tsx
│   │   │   └── ToolDisclaimer.tsx
│   │   │
│   │   └── cta/
│   │       ├── WhatsAppCTA.tsx
│   │       ├── CallCTA.tsx
│   │       ├── StickyMobileCTA.tsx
│   │       └── BookConsultation.tsx
│   │
│   ├── data/
│   │   ├── projects/
│   │   │   ├── index.ts                   # Project registry
│   │   │   ├── parkview-city.ts
│   │   │   ├── blue-world-city.ts
│   │   │   ├── hashoo-real-estate.ts
│   │   │   ├── faisal-town.ts
│   │   │   ├── premier-choice.ts
│   │   │   ├── saffron-city.ts
│   │   │   └── capital-smart-city.ts
│   │   ├── navigation.ts
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   ├── partners.ts
│   │   ├── faqs.ts
│   │   ├── team.ts
│   │   └── contact.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   ├── types.ts
│   │   └── seo.ts
│   │
│   └── types/
│       ├── project.ts
│       ├── service.ts
│       ├── article.ts
│       ├── lead.ts
│       └── navigation.ts
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

---

## 2. COMPLETE ROUTE LIST

### Primary Routes (Main Navigation)

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, featured projects, CTAs |
| `/about` | About Us | Company profile, story, team, credentials |
| `/projects` | All Projects | Project listing with filters |
| `/investor-services` | Investor Services | Services hub page |
| `/investment-tools` | Investment Tools | Tools hub page |
| `/overseas-pakistanis` | Overseas Pakistanis | Overseas investor portal |
| `/market-insights` | Market Insights | Content hub for news/guides |
| `/media` | Media | News, blog, videos, gallery |
| `/contact` | Contact | Contact form, map, details |

### Project Routes (Dynamic)

| Route | Page |
|-------|------|
| `/projects/parkview-city-islamabad` | ParkView City Detail |
| `/projects/blue-world-city` | Blue World City Detail |
| `/projects/hashoo-real-estate` | Hashoo Real Estate Detail |
| `/projects/faisal-town-islamabad` | Faisal Town Detail |
| `/projects/premier-choice-international` | Premier Choice Detail |
| `/projects/saffron-city-islamabad` | Saffron City Detail |
| `/projects/capital-smart-city` | Capital Smart City Detail |

### Investor Services Routes

| Route | Page |
|-------|------|
| `/investor-services/investment-consultancy` | Investment Consultancy |
| `/investor-services/property-buying` | Property Buying |
| `/investor-services/property-selling` | Property Selling |
| `/investor-services/portfolio-planning` | Portfolio Planning |
| `/investor-services/market-research` | Market Research |
| `/investor-services/project-selection` | Project Selection |
| `/investor-services/resale-assistance` | Resale Assistance |
| `/investor-services/investment-advisory` | Investment Advisory |

### Investment Tools Routes

| Route | Page |
|-------|------|
| `/investment-tools/roi-calculator` | ROI Calculator |
| `/investment-tools/installment-calculator` | Installment Calculator |
| `/investment-tools/budget-calculator` | Budget Calculator |
| `/investment-tools/project-comparison` | Project Comparison |
| `/investment-tools/property-finder` | Property Finder |
| `/investment-tools/investment-quiz` | Investment Quiz |

### Overseas Pakistanis Routes

| Route | Page |
|-------|------|
| `/overseas-pakistanis/why-invest` | Why Invest in Pakistan |
| `/overseas-pakistanis/investment-guide` | Investment Guide |
| `/overseas-pakistanis/documentation` | Documentation |
| `/overseas-pakistanis/remote-booking` | Remote Booking Process |
| `/overseas-pakistanis/payment-methods` | Payment Methods |
| `/overseas-pakistanis/power-of-attorney` | Power of Attorney Guide |
| `/overseas-pakistanis/overseas-advisor` | Overseas Advisor |

### Market Insights Routes

| Route | Page |
|-------|------|
| `/market-insights/news` | News Listing |
| `/market-insights/news/[slug]` | News Article |
| `/market-insights/guides` | Guides Listing |
| `/market-insights/guides/[slug]` | Guide Article |
| `/market-insights/reports` | Reports Listing |
| `/market-insights/reports/[slug]` | Report Article |
| `/market-insights/price-updates` | Price Updates |
| `/market-insights/price-updates/[slug]` | Price Update Article |
| `/market-insights/development-updates` | Development Updates |
| `/market-insights/development-updates/[slug]` | Development Article |

### Media Routes

| Route | Page |
|-------|------|
| `/media/news` | News Listing |
| `/media/news/[slug]` | News Article |
| `/media/blog` | Blog Listing |
| `/media/blog/[slug]` | Blog Article |
| `/media/videos` | Videos Listing |
| `/media/videos/[slug]` | Video Detail |
| `/media/gallery` | Gallery Albums |
| `/media/gallery/[album-slug]` | Album Detail |
| `/media/events` | Events Listing |
| `/media/events/[slug]` | Event Detail |
| `/media/press` | Press & PR |
| `/media/press/[slug]` | Press Release |

### System Routes

| Route | Page |
|-------|------|
| `/not-found` | 404 Page |
| `/sitemap.xml` | Dynamic Sitemap |
| `/robots.txt` | Robots File |
| `/api/lead` | Lead Submission API |

**Total Routes:** 70+

---

## 3. REUSABLE COMPONENT LIST

### Layout Components

| Component | Purpose | Used In |
|-----------|---------|---------|
| `Header` | Site header with navigation | All pages |
| `Navigation` | Main nav menu | Header |
| `MobileMenu` | Mobile hamburger menu | Header (mobile) |
| `Logo` | Brand logo | Header, Footer |
| `HeaderCTA` | Header action buttons | Header |
| `Footer` | Site footer | All pages |
| `FooterNav` | Footer navigation links | Footer |
| `FooterContact` | Footer contact info | Footer |
| `FooterSocial` | Social media links | Footer |
| `FooterLegal` | Legal links | Footer |
| `Sidebar` | Sidebar navigation | Project pages |

### Shared UI Components

| Component | Purpose | Reusability |
|-----------|---------|-------------|
| `Button` | CTA buttons, link buttons | Universal |
| `Card` | Content cards (4 variants) | Listings, grids |
| `Badge` | Status/category tags | Projects, articles |
| `Container` | Page width wrapper | All sections |
| `Section` | Section wrapper | All pages |
| `SectionHeader` | Section title + subtitle | All sections |
| `SectionGrid` | Grid layout for sections | Listings |
| `Grid` | Responsive grid | Universal |
| `Heading` | Page/section headings | All pages |
| `Text` | Body text | All pages |
| `Image` | Optimized image wrapper | All pages |
| `Icon` | Icon wrapper | Universal |
| `Divider` | Visual separator | Layouts |
| `Spacer` | Vertical spacing | Layouts |
| `Skeleton` | Loading placeholder | Dynamic content |
| `EmptyState` | No content state | Listings |
| `Pagination` | Page navigation | Listings |

### Page Section Components

**Home Sections:**
| Component | Section |
|-----------|---------|
| `Hero` | Hero banner |
| `FeaturedProjects` | Featured projects carousel |
| `WhyInvest` | Why invest with Legends |
| `InvestmentOpportunities` | Investment opportunities |
| `MarketInsightsPreview` | Latest insights |
| `Testimonials` | Client testimonials |
| `StrategicPartners` | Partner logos |
| `HomeCTA` | Final call to action |

**Project Sections:**
| Component | Section |
|-----------|---------|
| `ProjectHero` | Project hero banner |
| `ProjectOverview` | Project overview |
| `ProjectLocation` | Location details + map |
| `ProjectMasterPlan` | Master plan display |
| `ProjectBlocks` | Blocks/sectors listing |
| `ProjectDevelopment` | Development updates |
| `ProjectPaymentPlan` | Payment plan table |
| `ProjectPricing` | Current pricing |
| `ProjectHighlights` | Investment highlights |
| `ProjectAmenities` | Amenities grid |
| `ProjectGallery` | Image gallery |
| `ProjectFAQs` | Frequently asked questions |
| `ProjectLegal` | Legal/approval info |
| `ProjectAdvisor` | Advisor details |
| `ProjectCTA` | Call to action |
| `ProjectEnquiryForm` | Enquiry form |

### Form Components

| Component | Purpose |
|-----------|---------|
| `ContactForm` | General contact form |
| `EnquiryForm` | Project enquiry form |
| `ConsultationForm` | Consultation booking |
| `BookingForm` | Property booking form |
| `PaymentPlanRequest` | Payment plan request |
| `LeadForm` | Smart lead capture form |

### Tool Components

| Component | Purpose |
|-----------|---------|
| `ROICalculator` | Return on investment calculator |
| `InstallmentCalculator` | Monthly installment calculator |
| `BudgetCalculator` | Budget planning calculator |
| `ProjectComparison` | Side-by-side project comparison |
| `PropertyFinder` | Interactive property finder |
| `InvestmentQuiz` | Investment readiness quiz |
| `ToolDisclaimer` | Calculator disclaimer |

### CTA Components

| Component | Purpose |
|-----------|---------|
| `WhatsAppCTA` | WhatsApp chat button |
| `CallCTA` | Phone call button |
| `StickyMobileCTA` | Sticky mobile actions |
| `BookConsultation` | Consultation booking CTA |

---

## 4. DYNAMIC PROJECT DATA STRUCTURE

### TypeScript Type Definition

```typescript
// src/types/project.ts

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: 'active' | 'upcoming' | 'completed' | 'sold-out';
  category: 'residential' | 'commercial' | 'mixed';
  location: {
    area: string;
    city: string;
    province: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsUrl: string;
    nearby: NearbyPlace[];
  };
  overview: {
    description: string;
    highlights: string[];
    totalArea: string;
    plotSizes: string[];
    possessionStatus: string;
  };
  masterPlan: {
    description: string;
    imageUrl: string;
    totalPlots: number;
  };
  blocks: Block[];
  development: DevelopmentUpdate[];
  paymentPlan: PaymentPlan;
  pricing: PricingInfo;
  amenities: Amenity[];
  gallery: GalleryItem[];
  faqs: FAQ[];
  legal: LegalInfo;
  advisor: AdvisorInfo;
  seo: SEOData;
  createdAt: string;
  updatedAt: string;
}

export interface Block {
  id: string;
  name: string;
  status: 'available' | 'sold-out' | 'coming-soon';
  plotSizes: string[];
  prices: {
    plotSize: string;
    totalPrice: number;
    bookingAmount: number;
    monthlyInstallment: number;
    totalInstallments: number;
  }[];
}

export interface DevelopmentUpdate {
  id: string;
  date: string;
  title: string;
  description: string;
  images: string[];
  percentage?: number;
}

export interface PaymentPlan {
  description: string;
  plans: {
    id: string;
    name: string;
    duration: string;
    downPayment: string;
    installments: string;
    balloonPayment?: string;
    details: string[];
  }[];
  notes: string[];
}

export interface PricingInfo {
  currency: string;
  minPrice: number;
  maxPrice: number;
  pricePerMarla?: number;
  pricePerSqft?: number;
  lastUpdated: string;
  disclaimer: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LegalInfo {
  nocStatus: string;
  approvalAuthority: string;
  registrationNumber?: string;
  documents: {
    name: string;
    url: string;
  }[];
  disclaimer: string;
}

export interface AdvisorInfo {
  name: string;
  designation: string;
  phone: string;
  whatsapp: string;
  email: string;
  image?: string;
  experience?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  type: string;
}
```

### Project Data File Structure

```typescript
// src/data/projects/parkview-city.ts

import { Project } from '@/types/project';

export const parkviewCity: Project = {
  id: 'parkview-city-001',
  slug: 'parkview-city-islamabad',
  name: 'ParkView City Islamabad',
  tagline: 'Where Nature Meets Modern Living',
  status: 'active',
  category: 'residential',
  location: {
    area: 'Malot Road',
    city: 'Islamabad',
    province: 'ICT',
    address: 'ParkView City, Malot Road, Islamabad',
    coordinates: { lat: 33.7, lng: 73.1 },
    googleMapsUrl: 'https://maps.google.com/...',
    nearby: [
      { name: 'Islamabad International Airport', distance: '25 min', type: 'transport' },
      { name: 'Centaurus Mall', distance: '20 min', type: 'shopping' },
    ],
  },
  overview: {
    description: 'ParkView City is a premium housing society...',
    highlights: [
      'CDA Approved',
      'Prime Location',
      'Gated Community',
    ],
    totalArea: '7000+ Kanals',
    plotSizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
    possessionStatus: 'Immediate Possession Available',
  },
  masterPlan: {
    description: '...',
    imageUrl: '/assets/images/projects/parkview-city/master-plan.jpg',
    totalPlots: 5000,
  },
  blocks: [
    {
      id: 'block-a',
      name: 'Block A',
      status: 'available',
      plotSizes: ['5 Marla', '10 Marla'],
      prices: [],
    },
  ],
  development: [],
  paymentPlan: {
    description: '...',
    plans: [],
    notes: [],
  },
  pricing: {
    currency: 'PKR',
    minPrice: 5000000,
    maxPrice: 50000000,
    lastUpdated: '2024-01-15',
    disclaimer: 'Prices are subject to change...',
  },
  amenities: [],
  gallery: [],
  faqs: [],
  legal: {
    nocStatus: 'Approved',
    approvalAuthority: 'CDA',
    documents: [],
    disclaimer: '',
  },
  advisor: {
    name: '',
    designation: 'Senior Investment Advisor',
    phone: '+92-300-1234567',
    whatsapp: '+92-300-1234567',
    email: 'advisor@legendsmarketing.com',
  },
  seo: {
    title: 'ParkView City Islamabad - Investment Guide | Legends Marketing',
    description: 'Explore ParkView City Islamabad...',
    keywords: ['parkview city', 'islamabad real estate'],
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-15',
};
```

### Project Registry

```typescript
// src/data/projects/index.ts

import { Project } from '@/types/project';
import { parkviewCity } from './parkview-city';
import { blueWorldCity } from './blue-world-city';
// ... other imports

export const projects: Project[] = [
  parkviewCity,
  blueWorldCity,
  hashooRealEstate,
  faisalTown,
  premierChoice,
  saffronCity,
  capitalSmartCity,
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getActiveProjects = (): Project[] =>
  projects.filter((p) => p.status === 'active');

export const getProjectsByCategory = (category: string): Project[] =>
  projects.filter((p) => p.category === category);
```

---

## 5. SCALING EXPLANATION

### How This Structure Scales

**1. Adding New Projects**
- Add a new `.ts` file in `src/data/projects/`
- Register it in `src/data/projects/index.ts`
- The dynamic route `[project-slug]` automatically handles the new page
- No code changes needed in components

**2. Adding New Pages**
- Each main nav item has its own folder in `src/app/`
- Sub-pages are nested folders with their own `page.tsx`
- Layout files (`layout.tsx`) provide shared structure per section

**3. Adding New Services**
- Add entry in `src/data/services.ts`
- Create new folder in `src/app/investor-services/`
- Reuse `ServiceHero`, `ServiceDetails`, `ServiceCTA` components

**4. Adding New Investment Tools**
- Create new folder in `src/app/investment-tools/`
- Build tool component in `src/components/tools/`
- Register in tool hub page

**5. Content Scaling (Market Insights/Media)**
- Dynamic routes with `[slug]` handle unlimited articles
- Content can be stored in:
  - Local data files (current)
  - Headless CMS (future)
  - Database (future)
- Components are content-type agnostic

**6. Feature Scaling**
- Forms → Add to `src/components/forms/`
- Calculators → Add to `src/components/tools/`
- API routes → Add to `src/app/api/`
- New sections → Add to `src/components/sections/[page]/`

**7. Team/Role Scaling**
- Components are atomic and reusable
- New team members can work on isolated features
- Clear separation of concerns

**8. Technology Scaling**
- Can migrate from static data to CMS without restructuring
- Can add backend APIs incrementally
- Can integrate third-party services via `src/lib/`
- Type-safe contracts via `src/types/`

**9. Performance Scaling**
- Static pages generated at build time
- Dynamic pages use ISR (Incremental Static Regeneration)
- Images optimized via Next.js Image component
- Code splitting per route

**10. SEO Scaling**
- Dynamic sitemap generation
- Per-page metadata via `generateMetadata()`
- Structured data can be added per page
- Clean URL architecture maintained

---

## SUMMARY

| Metric | Count |
|--------|-------|
| Total Routes | 70+ |
| Reusable Components | 50+ |
| Project Data Fields | 100+ per project |
| Main Navigation Items | 9 |
| Dynamic Route Segments | 3 (projects, articles, events) |
| Form Types | 6 |
| Calculator Types | 3 |
| CTA Components | 4 |

**Structure Status:** Production-ready, scalable, CMS-agnostic
**Next Phase:** UI design + component implementation
