"use client";

import AmenityCard from "@/components/shared/Card/AmenityCard";

const amenities = [
  {
    title: "Parks",
    description: "Lush green parks and landscaped gardens designed for relaxation, family gatherings, and evening walks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76" />
        <path d="m21.5 11.5 1.3 1.3a1 1 0 0 1 0 1.4l1.4 1.4a1 1 0 0 1-1.4 1.4l-1.3-1.3" />
        <path d="M17.5 15.5 15 14" /><path d="M12 18a2 2 0 0 0 1.8-1.2l.4-.8a2 2 0 0 1 1.8-1.2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1" />
      </svg>
    ),
  },
  {
    title: "Security",
    description: "Round-the-clock surveillance with trained security personnel and advanced monitoring systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    description: "Integrated commercial hubs with retail outlets, offices, and business centers for convenience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Smart Home",
    description: "Future-ready homes equipped with smart automation, energy-efficient systems, and modern tech.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Masjid",
    description: "Beautifully designed mosques within the community for daily prayers and spiritual gatherings.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Education",
    description: "Top-tier schools and educational institutions providing quality learning environments for children.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function AmenityGrid() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head text-center">
          <span className="kicker">Amenities</span>
          <h2 className="section-head__title">
            World-Class Living Infrastructure
          </h2>
          <p className="section-head__sub">
            Click any card to explore. Every project features premium amenities
            designed for modern, comfortable living.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
        >
          {amenities.map((a) => (
            <AmenityCard key={a.title} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
