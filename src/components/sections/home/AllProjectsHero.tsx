"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ProjectCardInfo {
  title: string;
  subtitle: string;
  bgScene: string;
}

const projectCards: ProjectCardInfo[] = [
  {
    title: "PARKVIEW CITY ISLAMABAD",
    subtitle: "Where Nature Meets Modern Living",
    bgScene: "/images/projects/parkview-city/mini-hills.jpg",
  },
  {
    title: "BLUE WORLD CITY",
    subtitle: "Gateway to Tourism & Smart Living",
    bgScene: "/images/projects/blue-world-city/mini-entrance.jpg",
  },
  {
    title: "HASHOO REAL ESTATE",
    subtitle: "Premium Commercial & Luxury Hospitality",
    bgScene: "/images/projects/hashoo-real-estate/mini-tower.jpg",
  },
  {
    title: "FAISAL TOWN",
    subtitle: "Established Residential & Investment Hub",
    bgScene: "/images/projects/faisal-town/mini-boulevard.jpg",
  },
  {
    title: "PREMIER CHOICE INTERNATIONAL",
    subtitle: "Boutique High-Rise & Commercial Spaces",
    bgScene: "/images/projects/premier-choice/mini-facade.jpg",
  },
  {
    title: "SAFFRON CITY ISLAMABAD",
    subtitle: "Eco-Friendly Community on Main G.T. Road",
    bgScene: "/images/projects/saffron-city/mini-fields.jpg",
  },
  {
    title: "CAPITAL SMART CITY",
    subtitle: "Pakistan’s Pioneer Smart Housing Project",
    bgScene: "/images/projects/capital-smart-city/mini-smart.jpg",
  },
];

export default function AllProjectsHero() {
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      if (refs.current.length > 0) {
        refs.current.forEach((card, index) => {
          const delay = index * 0.1;
          const translateY = -progress * 20;
          const opacity = 1 - progress * 0.3;
          if (!card) return;
          card.style.transform = `translateY(${translateY * (index % 2 === 0 ? 1 : -1)}px)`;
          card.style.opacity = String(opacity);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-[url('/images/projects/parkview-city/cover.jpg')] bg-no-repeat bg-center bg-fixed overflow-x-hidden">
      {/* Dark navy blue translucent overlay */}
      <div className="absolute inset-0 backdrop-blur-2xl" style={{ backgroundColor: 'rgba(11, 15, 25, 0.8)' }}></div>

      {/* Top golden accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl border-t border-gold/50"></div>

      {/* Label */}
      <div className="absolute top-6 left-1/2 -translate-x-/2 text-gold text-xs uppercase tracking-widest opacity-100">
        DIVERSIFIED REAL ESTATE PORTFOLIO
      </div>

      {/* Primary headline */}
      <h1 className="absolute top-14 left-1/2 -translate-x-1/2 text-4xl font-serif font-bold text-cream tracking-tighter">
        Our Signature Developments
      </h1>

      {/* Subtitle */}
      <p className="absolute top-28 left-1/2 -translate-x-1/2 text-gold text-base italic leading-relaxed">
        EXPLORING OPPORTUNITIES ACROSS PAKISTAN'S PRIME LOCATIONS
      </p>

      {/* Cards container */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 -bottom-1/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {projectCards.map((card, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 bg-[rgba_255,255,255,0.02] backdrop-filter backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-[rgba_255,255,255,0.05]"
            style={{
              backgroundImage: `url(${card.bgScene})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-cream font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gold text-sm italic">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
        {/* Solid gold button */}
        <Link
          href="/payment-plans"
          className="btn btn--gold rounded-full px-8 py-3 text-black text-sm font-bold transition-all duration-300 hover:scale-[1.05]"
        >
          Request All Payment Plans
        </Link>

        {/* Glassmorphism outline button */}
        <Link
          href="/compare-investments"
          className="btn btn--outline rounded-full px-8 py-3 text-cream text-sm font-medium border-2 border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          Compare Investments
        </Link>
      </div>
    </section>
  );
}