import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Property Selling & Liquidation | Legends Marketing",
  description:
    "Market-driven valuation and rapid liquidation through our active buyer and investor network.",
};

const benefits = [
  "Realistic comparative market valuation (CMA)",
  "Active network of verified local and overseas buyers",
  "Safe escrow and verified banking transfer procedures",
  "Full handling of transfer fees, NDC, and society paperwork"
];

const processSteps = [
  {
    "step": "01",
    "title": "Property Assessment",
    "desc": "Detailed review of file status, paid installments, and premium."
  },
  {
    "step": "02",
    "title": "Marketing & Buyer Matching",
    "desc": "Direct outreach to active investor channels and private clients."
  },
  {
    "step": "03",
    "title": "Offer Negotiation",
    "desc": "Securing the highest net payout with transparent terms."
  },
  {
    "step": "04",
    "title": "Transfer & Payment Clearance",
    "desc": "Execution of society transfer and secure funds disbursement."
  }
];

export default function PropertySellingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Investor Services &middot; Fast Capital Realization
            </span>
            <h1 className="page-hero__title">Property Selling & Liquidation</h1>
            <p className="page-hero__sub">
              Market-driven valuation and rapid liquidation through our active buyer and investor network.
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
                When it is time to exit or realize capital gains, Legends Marketing connects you with qualified, serious cash buyers. We perform accurate comparative market analyses to ensure you receive top market value without lengthy delays.
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
                src="/images/services/selling.jpg"
                alt="Property Selling & Liquidation Illustration"
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
            <span className="kicker">Execution Framework</span>
            <h2 className="section-head__title">Our 4-Step Process</h2>
            <p className="section-head__sub">How we manage your service requirements seamlessly.</p>
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
            <h2 style={{ color: "var(--white)" }}>Get Expert Advisory on Property Selling & Liquidation</h2>
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
