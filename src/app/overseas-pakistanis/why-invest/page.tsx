import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Why Invest in Pakistan",
  description:
    "Discover why Pakistan is a compelling real estate investment destination for overseas Pakistanis , high returns, affordable prices and government incentives.",
};

const reasons = [
  {
    title: "High ROI Potential",
    desc: "Pakistan's real estate sector consistently delivers 15-25% annual returns in high-growth corridors. Major housing societies on the outskirts of Islamabad and Lahore have seen 3-5x appreciation in under five years.",
  },
  {
    title: "Affordable Entry Points",
    desc: "Compared to property markets in the UK, UAE or US, Pakistani real estate offers dramatically lower entry costs. You can secure a plot in a premium society for a fraction of the cost of a comparable property abroad.",
  },
  {
    title: "Growing Population & Demand",
    desc: "With over 240 million people and rapid urbanisation, demand for quality housing continues to outpace supply , creating sustained upward pressure on property values.",
  },
  {
    title: "Government Incessant Incentives",
    desc: "The Pakistani government offers tax exemptions, simplified transfer processes and dedicated overseas investor facilitation desks to encourage foreign remittances into real estate.",
  },
  {
    title: "NRP-Friendly Banking",
    desc: "Non-resident Pakistanis can open foreign currency accounts, repatriate profits and invest through banking channels with full legal protection under Pakistani law.",
  },
  {
    title: "Emotional & Financial Upside",
    desc: "Investing in Pakistan lets you build generational wealth in your homeland while staying connected to your roots , a rare combination of financial and personal value.",
  },
];

const stats = [
  { value: "240M+", label: "Population" },
  { value: "20%", label: "Average Annual ROI" },
  { value: "$30B+", label: "Annual Remittances" },
  { value: "65%", label: "Population Under 30" },
];

export default function WhyInvestPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Why Invest in Pakistan</h1>
            <p className="page-hero__sub">
              Pakistan offers some of the highest real estate returns in South
              Asia , combined with government incentives designed specifically for
              overseas investors.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-head">
            <span className="kicker">Market Snapshot</span>
            <h2 className="section-head__title">Pakistan at a Glance</h2>
          </div>
          <div className="steps-list">
            {stats.map((stat) => (
              <div key={stat.label} className="step-item">
                <h3 className="step-item__title">{stat.value}</h3>
                <p className="step-item__desc">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--alt" id="reasons">
        <Container>
          <div className="section-head">
            <span className="kicker">Key Reasons</span>
            <h2 className="section-head__title">
              Why Overseas Pakistanis Choose Pakistan
            </h2>
            <p className="section-head__sub">
              The case for investing in Pakistani real estate has never been
              stronger.
            </p>
          </div>
          <SectionGrid columns={3}>
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{reason.title}</h3>
                <p className="feature-item__desc">{reason.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" id="comparison">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
            <div>
              <span className="kicker">Comparative Advantage</span>
              <h2>
                Pakistan vs Global Markets
              </h2>
              <p>
                While property prices in London, Dubai and New York have
                plateaued or declined in recent years, Pakistani real estate
                continues to deliver double-digit growth. The combination of
                low entry costs, high demand and government support creates a
                unique opportunity that mature markets simply cannot match.
              </p>
              <p>
                For overseas Pakistanis, the advantage is even greater , your
                foreign currency income stretches further, returns are
                denominated in a depreciating rupee (meaning higher real
                returns) and you maintain a tangible connection to your
                homeland.
              </p>
            </div>
            <div
              className="card"
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src="/images/overseas/why-invest.jpg"
                alt="Pakistan real estate investment opportunities"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Start Today
            </span>
            <h2>Ready to Invest?</h2>
            <p>
              Book a free consultation with an overseas investment advisor and
              discover the best opportunities for your budget and goals.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Talk to an Advisor
              </Button>
              <Button
                href="/overseas-pakistanis/investment-guide"
                variant="light-outline"
                size="lg"
              >
                Read the Investment Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
