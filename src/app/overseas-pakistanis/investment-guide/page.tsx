import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Overseas Investment Guide",
  description:
    "A comprehensive step-by-step guide for overseas Pakistanis to invest in real estate remotely — from research to booking and beyond.",
};

const steps = [
  {
    num: "01",
    title: "Research the Market",
    desc: "Understand Pakistan's real estate landscape. Focus on CDA-approved societies, RDA-registered projects and developers with a proven track record. Legends Marketing provides detailed market reports to help you make informed decisions.",
  },
  {
    num: "02",
    title: "Select Your Project",
    desc: "Browse our curated portfolio of authorized projects across Islamabad, Lahore and other major cities. Each project is vetted for legal compliance, developer credibility and growth potential. Our overseas advisors can shortlist options based on your budget and goals.",
  },
  {
    num: "03",
    title: "Arrange Documentation",
    desc: "Prepare essential documents: CNIC, passport copy, NICOP, passport-size photographs and any applicable power of attorney. Our team guides you through every requirement and helps you get documents attested remotely.",
  },
  {
    num: "04",
    title: "Choose a Payment Plan",
    desc: "Select from flexible instalment plans or full-payment options. We accept overseas payments through bank drafts, wire transfers, online banking and other secure channels. All transactions are documented and receipted.",
  },
  {
    num: "05",
    title: "Complete the Booking",
    desc: "Sign the booking form, submit your down payment and receive your official allocation letter. The entire process can be completed remotely — no need to visit Pakistan.",
  },
  {
    num: "06",
    title: "Track & Manage",
    desc: "Stay updated on construction progress, payment schedules and plot allocation through your dedicated overseas advisor. We handle follow-ups, site visits on your behalf and any documentation renewals.",
  },
];

const tips = [
  {
    title: "Verify the Developer",
    desc: "Always invest with RDA/CDA-approved developers. Legends Marketing only partners with verified, reputable companies.",
  },
  {
    title: "Understand the Location",
    desc: "Proximity to motorways, airports and commercial hubs drives appreciation. Focus on emerging corridors, not just established areas.",
  },
  {
    title: "Review the Payment Plan",
    desc: "Compare instalment schedules, hidden charges and possession timelines before committing. Our advisors break down every detail.",
  },
  {
    title: "Keep Documents Ready",
    desc: "Have your CNIC, passport, NICOP and photographs attested and ready. Delays in documentation are the most common cause of booking delays.",
  },
];

export default function InvestmentGuidePage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Overseas Investment Guide</h1>
            <p className="page-hero__sub">
              A complete roadmap for overseas Pakistanis to invest in real
              estate remotely — from market research to booking and beyond.
            </p>
          </div>
        </Container>
      </section>

      <section className="section" id="process">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/overseas/investment-guide.jpg"
                alt="Investment planning and financial analysis"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <span className="kicker">Step-by-Step</span>
              <h2 className="section-head__title" style={{ textAlign: "left" }}>
                Your Investment Journey in 6 Steps
              </h2>
              <p className="section-head__sub">
                Follow this proven process to invest confidently from anywhere in
                the world.
              </p>
              <div className="steps-list">
                {steps.map((step) => (
                  <div key={step.num} className="step-item">
                    <span
                      className="kicker"
                      style={{ fontSize: "2rem", fontWeight: 800 }}
                    >
                      {step.num}
                    </span>
                    <h3 className="step-item__title">{step.title}</h3>
                    <p className="step-item__desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt" id="tips">
        <Container>
          <div className="section-head">
            <span className="kicker">Expert Tips</span>
            <h2 className="section-head__title">Smart Investor Checklist</h2>
            <p className="section-head__sub">
              Follow these guidelines to maximise your returns and avoid common
              pitfalls.
            </p>
          </div>
          <SectionGrid columns={2}>
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{tip.title}</h3>
                <p className="feature-item__desc">{tip.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" id="related">
        <Container>
          <div className="section-head">
            <span className="kicker">Related Guides</span>
            <h2 className="section-head__title">Continue Learning</h2>
          </div>
          <div className="steps-list">
            <Link
              href="/overseas-pakistanis/documentation"
              className="card feature-item"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--emerald-800)" }}>
                Documentation Requirements
              </span>
              <span aria-hidden="true" style={{ color: "var(--gold-dark)" }}>
                &rarr;
              </span>
            </Link>
            <Link
              href="/overseas-pakistanis/payment-methods"
              className="card feature-item"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--emerald-800)" }}>
                Payment Methods
              </span>
              <span aria-hidden="true" style={{ color: "var(--gold-dark)" }}>
                &rarr;
              </span>
            </Link>
            <Link
              href="/overseas-pakistanis/remote-booking"
              className="card feature-item"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--emerald-800)" }}>
                Remote Booking Process
              </span>
              <span aria-hidden="true" style={{ color: "var(--gold-dark)" }}>
                &rarr;
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Need Help?
            </span>
            <h2>Let Our Advisors Guide You</h2>
            <p>
              Every investor&apos;s situation is different. Speak with a
              dedicated overseas advisor who can tailor a plan to your specific
              needs and budget.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Get Free Advice
              </Button>
              <Button
                href="/overseas-pakistanis/overseas-advisor"
                variant="light-outline"
                size="lg"
              >
                Meet Your Advisor
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
