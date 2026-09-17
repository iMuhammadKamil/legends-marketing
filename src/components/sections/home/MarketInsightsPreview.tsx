"use client";

import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/Section/SectionHeader";
import { ScrollReveal, StaggerReveal } from "@/components/shared/ScrollReveal/ScrollRevealComponents";

const insightLinks = [
  { label: "News & Updates", href: "/market-insights/news" },
  { label: "Investment Guides", href: "/market-insights/guides" },
  { label: "Market Reports", href: "/market-insights/reports" },
  { label: "Price Updates", href: "/market-insights/price-updates" },
];

export default function MarketInsightsPreview() {
  return (
    <section className="section section--alt">
      <Container>
        <ScrollReveal>
          <SectionHeader
            kicker="Knowledge Hub"
            title="Market Insights"
            subtitle="Stay informed with news, guides, reports and price updates from the Pakistan property market."
          />
        </ScrollReveal>
        <StaggerReveal
          childSelector=".feature-item"
          stagger={0.08}
          start="top 80%"
        >
          <div className="grid-4" style={{ gap: "1.2rem" }}>
            {insightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="feature-item"
                style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "var(--emerald-800)",
                    fontSize: "1rem",
                  }}
                >
                  {link.label}
                </span>
                <span aria-hidden="true" style={{ color: "var(--gold-dark)" }}>
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </StaggerReveal>
        <ScrollReveal delay={0.3}>
          <p className="section-head__sub" style={{ textAlign: "center", marginTop: "2rem" }}>
            Explore more on the{" "}
            <Link href="/market-insights" style={{ fontWeight: 700 }}>
              Market Insights hub
            </Link>
            .
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
