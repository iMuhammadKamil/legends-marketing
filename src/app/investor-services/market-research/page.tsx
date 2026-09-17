import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Market Research & Intelligence | Legends Marketing",
  description:
    "Unbiased property valuation data, price trends, and infrastructure impact analysis.",
};

const benefits = [
  "Quarterly price trend and appreciation reports",
  "Analysis of major road corridors (M-2, CPEC, Ring Road, Malot Road)",
  "Rental yield benchmarks for apartments and commercial plazas",
  "Comparative risk scoring for upcoming housing schemes"
];

const processSteps = [
  {
    "step": "Analyze",
    "title": "Data Gathering",
    "desc": "Tracking on-ground transaction volumes and society balloting."
  },
  {
    "step": "Select",
    "title": "Infrastructure Correlation",
    "desc": "Evaluating government infrastructure timelines on property rates."
  },
  {
    "step": "Book",
    "title": "Insight Formulation",
    "desc": "Publishing actionable intelligence and investment alerts."
  },
  {
    "step": "Complete",
    "title": "Client Advisory Integration",
    "desc": "Applying data models to optimize individual investor decisions."
  }
];

export default function MarketResearchPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Investor Services &middot; Data-Driven Insights
            </span>
            <h1 className="page-hero__title">Market Research & Intelligence</h1>
            <p className="page-hero__sub">
              Unbiased property valuation data, price trends, and infrastructure impact analysis.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Service Overview</span>
              <h2 style={{ marginBottom: "1.2rem" }}>
                Professional Guidance for High-Yield Results
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                Make informed investment decisions backed by empirical data. Our research desk continuously monitors master-plan zoning, infrastructure developments (such as Ring Road and Motorway extensions), and sector price velocity across Rawalpindi and Islamabad.
              </p>
              <p>
                Operating with direct authorization from Pakistan&apos;s leading developers and registered with {contact.registration}, Legends Marketing guarantees full compliance, transparent pricing, and zero middleman markups.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button href="/contact" variant="gold" size="lg">
                  Book a Strategy Call
                </Button>
                <Button href={`https://wa.me/${contact.whatsapp}`} variant="outline" size="lg">
                  WhatsApp Advisory
                </Button>
              </div>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/services/research.jpg"
                alt="Market Research & Intelligence Illustration"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">Key Advantages</span>
            <h2 className="section-head__title">What You Receive</h2>
            <p className="section-head__sub">Tangible benefits tailored for maximum security and capital return.</p>
          </div>
          <SectionGrid columns={2}>
            {benefits.map((b) => (
              <div key={b} className="feature-item">
                <div className="feature-item__icon" aria-hidden="true">✓</div>
                <div>
                  <h3 className="feature-item__title">{b}</h3>
                  <p className="feature-item__desc">Structured and verified under Legends Marketing advisory standards.</p>
                </div>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">How It Works</span>
            <h2 className="section-head__title">Our 4-Step Process</h2>
            <p className="section-head__sub">A clear, step-by-step process from first contact to completed transaction.</p>
          </div>
          <SectionGrid columns={4}>
            {processSteps.map((p) => (
              <div key={p.step} className="card" style={{ padding: "2rem 1.5rem", textAlign: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "48px",
                    height: "48px",
                    lineHeight: "48px",
                    borderRadius: "50%",
                    background: "var(--emerald-900)",
                    color: "var(--gold-light)",
                    fontWeight: "800",
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {p.step}
                </span>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section section--dark">
        <Container>
          <div className="cta-band text-center">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>Ready to Begin?</span>
            <h2 style={{ color: "var(--white)" }}>Get Expert Advisory on Market Research & Intelligence</h2>
            <p style={{ color: "#d8d2c2" }}>Connect with a dedicated property advisor today for tailored advice.</p>
            <div className="hero__cta" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
              <Button href="/contact" variant="gold" size="lg">
                Schedule Consultation
              </Button>
              <Button href="/investor-services" variant="light-outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
