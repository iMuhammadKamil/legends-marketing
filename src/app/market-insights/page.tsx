import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Market Insights",
  description:
    "Islamabad and Rawalpindi real estate market intelligence - news, investment guides, market reports, price updates and development updates.",
};

const categories = [
  {
    title: "News",
    desc: "Timely updates on the Pakistan real estate market.",
    href: "/market-insights/news",
  },
  {
    title: "Investment Guides",
    desc: "Step-by-step guidance for confident property investing.",
    href: "/market-insights/guides",
  },
  {
    title: "Market Reports",
    desc: "Structured analysis and market intelligence.",
    href: "/market-insights/reports",
  },
  {
    title: "Price Updates",
    desc: "Verified price information as it becomes available.",
    href: "/market-insights/price-updates",
  },
  {
    title: "Development Updates",
    desc: "Progress reports on the projects we represent.",
    href: "/market-insights/development-updates",
  },
];

export default function MarketInsightsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Knowledge Hub
            </span>
            <h1 className="page-hero__title">Market Insights</h1>
            <p className="page-hero__sub">
              Stay informed with news, guides, reports and verified updates from
              the Islamabad and Rawalpindi property market.
            </p>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="card feature-item"
                style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{category.title}</h3>
                <p className="feature-item__desc">{category.desc}</p>
                <span className="card-link">
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>
    </>
  );
}