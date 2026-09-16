"use client";

import { useState } from "react";

interface AmenityCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function AmenityCard({ icon, title, description }: AmenityCardProps) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
        padding: "32px",
        background: active ? "#3A4147" : "#FFFFFF",
        border: `1px solid ${active ? "#3A4147" : "#E2DDD5"}`,
        borderRadius: "16px",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.3s ease-in-out",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
        width: "100%",
        fontFamily: "inherit",
      }}
      className={`amenity-card${active ? " amenity-card--active" : ""}`}
    >
      {/* Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: active ? "rgba(255,255,255,0.1)" : "#F1F5F9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: active ? "#FFFFFF" : "#0F172A",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {icon}
      </div>

      {/* Category Title */}
      <h3
        style={{
          margin: 0,
          fontSize: "0.75rem",
          fontFamily: "var(--font-serif), Georgia, serif",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
          color: active ? "#FFFFFF" : "#0F172A",
          transition: "color 0.3s ease-in-out",
        }}
      >
        {title}
      </h3>

      {/* Body Copy */}
      <p
        style={{
          margin: 0,
          fontSize: "0.9rem",
          lineHeight: 1.6,
          color: active ? "#D1D5DB" : "#64748B",
          transition: "color 0.3s ease-in-out",
        }}
      >
        {description}
      </p>
    </button>
  );
}
