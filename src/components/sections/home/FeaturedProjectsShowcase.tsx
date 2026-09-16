import Link from "next/link";
import Image from "next/image";

interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  href: string;
  status: string;
}

const defaultProjects: ShowcaseProject[] = [
  {
    id: "1",
    title: "PARKVIEW CITY",
    subtitle: "Zone IV, Islamabad",
    category: "Luxury Residential & Commercial",
    image: "/images/projects/parkview-city/cover.jpg",
    href: "/projects/parkview-city",
    status: "RDA Approved",
  },
  {
    id: "2",
    title: "CAPITAL SMART CITY",
    subtitle: "M-2 Motorway, Islamabad",
    category: "Smart Urban Community",
    image: "/images/projects/capital-smart-city/cover.jpg",
    href: "/projects/capital-smart-city",
    status: "FDHL & HRL Project",
  },
  {
    id: "3",
    title: "FAISAL TOWN PHASE 2",
    subtitle: "Chakri Road / M-2, Rawalpindi",
    category: "High-Yield Investment",
    image: "/images/projects/faisal-town/cover.jpg",
    href: "/projects/faisal-town",
    status: "Fast-Track Development",
  },
];

interface FeaturedProjectsShowcaseProps {
  projects?: ShowcaseProject[];
}

export default function FeaturedProjectsShowcase({
  projects = defaultProjects,
}: FeaturedProjectsShowcaseProps) {
  return (
    <section className="w-full bg-[#051a14] py-10 px-4 sm:px-6 lg:px-10 text-white">
      {/* 1. Header Bar */}
      <header className="max-w-7xl mx-auto mb-10 flex items-center justify-between gap-6 border-b border-emerald-900/60 pb-6">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl overflow-hidden bg-emerald-950 border border-gold/40 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo/logo.jpg"
              alt="Legends Marketing Logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-tight">
              Legends Marketing
            </span>
            <span className="text-[11px] tracking-widest text-[#c9a24b] uppercase font-semibold">
              Real Estate Advisory
            </span>
          </div>
        </Link>

        {/* Center: Top Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-neutral-300">
          <Link
            href="/about"
            className="hover:text-[#e2c878] transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#e2c878] transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/investor-services"
            className="hover:text-[#e2c878] transition-colors duration-200"
          >
            Services
          </Link>
        </nav>

        {/* Right: CTA & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-[#e2c878] to-[#c9a24b] text-[#1a1a1a] shadow-md hover:shadow-[#c9a24b]/20 hover:scale-[1.02] transition-all duration-300"
          >
            Discuss your project
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            type="button"
            aria-label="Open menu"
            className="p-2.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#c9a24b] text-white transition-all duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* 2. Card Grid: 3 Vertical, Full-Height Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.slice(0, 3).map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group relative h-[80vh] min-h-[520px] max-h-[820px] w-full rounded-2xl sm:rounded-3xl overflow-hidden block bg-[#06231b] border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#c9a24b]/50 hover:shadow-[#06231b]/80"
          >
            {/* Background Image with Custom Cubic-Bezier Hover Scale */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform scale-100 transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
            </div>

            {/* Contrast Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/85 pointer-events-none" />

            {/* 3. Top-Left Content Overlay (High Contrast Title & Subtitle) */}
            <div className="absolute top-6 sm:top-8 left-6 sm:left-8 right-6 sm:right-8 z-10">
              <span className="inline-block px-3 py-1 mb-3 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#e2c878] border border-[#c9a24b]/40">
                {project.status}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-white drop-shadow-md leading-tight mb-1">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base font-medium tracking-wide text-neutral-300 capitalize drop-shadow">
                {project.subtitle}
              </p>
            </div>

            {/* Bottom Meta & Action Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-10 flex items-center justify-between border-t border-white/20 pt-4">
              <span className="text-xs font-semibold text-neutral-300 tracking-wide uppercase">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e2c878] group-hover:translate-x-1 transition-transform duration-300">
                Explore
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
