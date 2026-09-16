"use client";

import { useState } from "react";

interface Amenity {
  label: string;
  icon: JSX.Element;
}

const amenities: Amenity[] = [
  {
    label: "Parks & Green Spaces",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76" />
        <path d="m21.5 11.5 1.3 1.3a1 1 0 0 1 0 1.4l1.4 1.4a1 1 0 0 1-1.4 1.4l-1.3-1.3" />
        <path d="M17.5 15.5 15 14" /><path d="M12 18a2 2 0 0 0 1.8-1.2l.4-.8a2 2 0 0 1 1.8-1.2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1" />
      </svg>
    ),
  },
  {
    label: "24/7 Security",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Commercial Hubs",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    label: "Smart Housing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Masjids & Community",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "Schools & Education",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: "Healthcare Facilities",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4" /><path d="M16 2v4" /><rect width="16" height="18" x="4" y="6" rx="2" /><path d="M12 12h4" /><path d="M12 16h4" />
      </svg>
    ),
  },
  {
    label: "Sports & Recreation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: "Gated Community",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function AmenitiesToggle() {
  const [active, setActive] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="section-head text-center">
          <span className="kicker">Our Services</span>
          <h2 className="section-head__title">
            World-Class Amenities & Infrastructure
          </h2>
          <p className="section-head__sub">
            Every project we represent is designed with premium amenities and
            modern infrastructure for comfortable living.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {amenities.map((a, i) => {
            const isActive = active.has(i);
            return (
              <button
                key={a.label}
                onClick={() => toggle(i)}
                style={{
                  background: isActive ? "#3A4147" : "#ffffff",
                  border: `1px solid ${isActive ? "#3A4147" : "#E2DDD5"}`,
                  borderRadius: "12px",
                  padding: "1.8rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "0.8rem",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                className="mp-reveal"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: isActive ? "rgba(255,255,255,0.12)" : "#EAE6E1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    color: isActive ? "#ffffff" : "#1A1A1A",
                  }}
                >
                  {a.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: isActive ? "#ffffff" : "#1A1A1A",
                    transition: "color 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {a.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
