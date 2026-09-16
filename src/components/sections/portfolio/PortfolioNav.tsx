"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Over ons", href: "#about" },
  { label: "Projecten", href: "#projects" },
  { label: "Diensten", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`mp-nav${scrolled ? " mp-nav--scrolled" : ""}`}>
      <div className="mp-nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="mp-nav__link">
            {l.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="mp-nav__logo">
        Legends Marketing
      </a>
      <a href="#contact" className="mp-nav__cta">
        Discuss your project
      </a>
    </nav>
  );
}
