"use client";

import { useState } from "react";

export default function FloatingLeadCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 140,
      }}
    >
      {expanded && (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 20px 50px rgba(26, 26, 26, 0.15)",
            border: "1px solid #E2DDD5",
            padding: "1.5rem",
            width: "300px",
            marginBottom: "12px",
            animation: "mpFadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--charcoal)",
                margin: 0,
              }}
            >
              Book a Consultation
            </h4>
            <button
              onClick={() => setExpanded(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--muted)",
                padding: "4px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--muted)",
              margin: "0 0 1rem",
              lineHeight: 1.5,
            }}
          >
            Get expert guidance on your real estate investment. Fill out the form below.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setExpanded(false);
            }}
            style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: "0.65rem 0.9rem",
                border: "1px solid #E2DDD5",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontFamily: "var(--font-sans)",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#B89348")}
              onBlur={(e) => (e.target.style.borderColor = "#E2DDD5")}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              style={{
                padding: "0.65rem 0.9rem",
                border: "1px solid #E2DDD5",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontFamily: "var(--font-sans)",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#B89348")}
              onBlur={(e) => (e.target.style.borderColor = "#E2DDD5")}
            />
            <button
              type="submit"
              style={{
                padding: "0.7rem",
                background: "#B89348",
                color: "#1A1A1A",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.88rem",
                fontWeight: 700,
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Get Started
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: expanded ? "var(--charcoal)" : "var(--gold)",
          color: expanded ? "var(--white)" : "var(--charcoal)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(184, 147, 72, 0.3)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          marginLeft: "auto",
        }}
      >
        {expanded ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
