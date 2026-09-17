import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Our Values | Legends Marketing",
  description:
    "Explore the core values and guiding principles of Legends Marketing , Integrity, Transparency, Expertise, and Unwavering Commitment to our investors.",
};

const coreValues = [
  {
    title: "1. Radical Transparency",
    desc: "We provide verified facts, direct developer payment plans, and legal clearance statuses. We never promise inflated returns that cannot be substantiated by market data.",
    badge: "Truth in Advisory",
  },
  {
    title: "2. Uncompromising Integrity",
    desc: "Our advisors work strictly in your best financial interest. If a project does not match your risk profile or timeline, we tell you openly.",
    badge: "Investor First",
  },
  {
    title: "3. Rigorous Market Expertise",
    desc: "Every recommendation is backed by ground inspections, master-plan analysis, municipal verification, and historical appreciation metrics.",
    badge: "Research Driven",
  },
  {
    title: "4. End-to-End Commitment",
    desc: "Our relationship begins at booking and extends through quarterly payment tracking, balloting, transfer, possession, and eventual profitable resale.",
    badge: "Lifelong Partnership",
  },
];

export default function OurValuesPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              About Us &middot; Culture
            </span>
            <h1 className="page-hero__title">Our Core Values</h1>
            <p className="page-hero__sub">
              The foundational pillars that guide every client interaction, project selection, and investment recommendation.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Guiding Principles</span>
              <h2 style={{ marginBottom: "1.2rem" }}>
                Built on Trust, Backed by Proven Execution
              </h2>
              <p>
                In an industry where marketing claims often exceed reality, Legends Marketing was built on the principle of institutional discipline. We believe sustainable wealth is created through disciplined, honest property decisions.
              </p>
              <p>
                Whether you are an overseas Pakistani investing your lifetime savings or an institutional fund diversifying assets, our values ensure your capital is protected and positioned for long-term growth.
              </p>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/about/values.jpg"
                alt="Legends Marketing Core Values"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">The 4 Pillars</span>
            <h2 className="section-head__title">What Defines Our Standards</h2>
          </div>
          <SectionGrid columns={2}>
            {coreValues.map((v) => (
              <div key={v.title} className="card" style={{ padding: "2.5rem 2rem" }}>
                <span
                  style={{
                    color: "var(--gold-dark)",
                    fontSize: "0.8rem",
                    fontWeight: "800",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {v.badge}
                </span>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.8rem", color: "var(--emerald-900)" }}>
                  {v.title}
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Experience the Difference
            </span>
            <h2>Consult with an Ethical Advisory Partner</h2>
            <p>Schedule a no-obligation strategy session with our senior investment advisors.</p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Book Consultation
              </Button>
              <Button href="/about/credentials" variant="light-outline" size="lg">
                View Our Credentials
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
