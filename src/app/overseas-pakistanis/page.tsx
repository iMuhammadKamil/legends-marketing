import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Overseas Pakistanis",
  description:
    "Invest in Pakistan from anywhere in the world. Remote booking, documentation, payment methods, power of attorney and dedicated overseas advisor.",
};

const guideLinks = [
  { label: "Why Invest in Pakistan", href: "/overseas-pakistanis/why-invest" },
  { label: "Overseas Investment Guide", href: "/overseas-pakistanis/investment-guide" },
  { label: "Documentation", href: "/overseas-pakistanis/documentation" },
  { label: "Remote Booking Process", href: "/overseas-pakistanis/remote-booking" },
  { label: "Payment Methods", href: "/overseas-pakistanis/payment-methods" },
  { label: "Power of Attorney Guide", href: "/overseas-pakistanis/power-of-attorney" },
  { label: "Overseas Advisor", href: "/overseas-pakistanis/overseas-advisor" },
];

const steps = [
  {
    title: "Choose Your Project",
    desc: "Review our authorized projects and shortlist the ones that match your goals.",
  },
  {
    title: "Verify & Document",
    desc: "Our advisors guide you through documentation and verification, fully remote.",
  },
  {
    title: "Book & Pay Securely",
    desc: "Complete booking through official channels with flexible overseas payment methods.",
  },
  {
    title: "Ongoing Support",
    desc: "Stay updated on project progress with dedicated after-sales support.",
  },
];

export default function OverseasPakistanisPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Invest in Pakistan, From Anywhere</h1>
            <p className="page-hero__sub">
              Buy property in Pakistan without being there — dedicated overseas
              advisors, remote booking and complete documentation support.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">How It Works</span>
              <h2 className="section-head__title" style={{ textAlign: "left" }}>Your Remote Investment Journey</h2>
              <div className="steps-list">
                {steps.map((step) => (
                  <div key={step.title} className="step-item">
                    <h3 className="step-item__title">{step.title}</h3>
                    <p className="step-item__desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/overseas/hub.jpg"
                alt="Invest in Pakistan from anywhere in the world"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="section-head">
            <span className="kicker">Guides</span>
            <h2 className="section-head__title">Everything You Need to Know</h2>
          </div>
          <SectionGrid columns={3}>
            {guideLinks.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card feature-item"
                style={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <span style={{ fontWeight: 700, color: "var(--emerald-800)" }}>
                  {guide.label}
                </span>
                <span aria-hidden="true" style={{ color: "var(--gold-dark)" }}>
                  &rarr;
                </span>
              </Link>
            ))}
          </SectionGrid>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Button href="/contact" variant="gold" size="lg">
              Talk to an Overseas Advisor
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}