import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Remote Booking Process",
  description:
    "Book your property in Pakistan from anywhere in the world with our streamlined remote booking process — no travel required.",
};

const processSteps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "Speak with an overseas advisor via phone, WhatsApp or video call. Discuss your budget, preferred location and investment goals. We shortlist the best options for you.",
  },
  {
    num: "02",
    title: "Project Selection",
    desc: "Receive detailed project profiles including pricing, payment plans, location maps and developer credentials. We provide honest comparisons so you can make an informed decision.",
  },
  {
    num: "03",
    title: "Document Submission",
    desc: "Submit scanned copies of your CNIC, passport, photographs and any other required documents via email or our secure document portal. Our team verifies everything within 24-48 hours.",
  },
  {
    num: "04",
    title: "Booking Form Completion",
    desc: "We send you the official booking form digitally. Review, fill in your details and sign. You can courier the originals or submit them through your local Pakistani embassy.",
  },
  {
    num: "05",
    title: "Payment Processing",
    desc: "Transfer your down payment through any of our accepted overseas payment methods — wire transfer, bank draft, online banking or app-based transfers. All transactions are documented with official receipts.",
  },
  {
    num: "06",
    title: "Confirmation & Allocation",
    desc: "Once payment clears, you receive your official allocation letter and booking confirmation. Your plot is reserved and registered in your name with the society.",
  },
];

const benefits = [
  {
    title: "No Travel Required",
    desc: "Complete the entire process from your home country. Save time, money and the hassle of international travel just for a property booking.",
  },
  {
    title: "Legal Protection",
    desc: "Every remote booking is backed by the same legal framework as in-person transactions. Your investment is fully protected under Pakistani property law.",
  },
  {
    title: "Transparent Process",
    desc: "Receive real-time updates at every stage — from document verification to payment receipt to allocation confirmation. No hidden steps or surprises.",
  },
  {
    title: "Dedicated Support",
    desc: "Your assigned overseas advisor handles every detail on your behalf, including society liaison, document follow-up and payment tracking.",
  },
  {
    title: "Secure Document Handling",
    desc: "All documents are received, verified and stored securely. Digital copies are backed up and originals are returned or stored as per your preference.",
  },
  {
    title: "Fast Turnaround",
    desc: "Most remote bookings are completed within 5-7 business days from document submission. Urgent bookings can be expedited.",
  },
];

export default function RemoteBookingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Remote Booking Process</h1>
            <p className="page-hero__sub">
              Book your property in Pakistan without leaving your country — our
              streamlined remote process makes it simple, secure and legally
              sound.
            </p>
          </div>
        </Container>
      </section>

      <section className="section" id="process">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/overseas/remote-booking.jpg"
                alt="Remote property booking from anywhere in the world"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <span className="kicker">How It Works</span>
              <h2 className="section-head__title" style={{ textAlign: "left" }}>
                Your Remote Booking in 6 Steps
              </h2>
              <p className="section-head__sub">
                A clear, documented process that protects your investment at every
                stage.
              </p>
            </div>
          </div>
          <div className="steps-list">
            {processSteps.map((step) => (
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
        </Container>
      </section>

      <section className="section section--alt" id="benefits">
        <Container>
          <div className="section-head">
            <span className="kicker">Benefits</span>
            <h2 className="section-head__title">
              Why Remote Booking Works
            </h2>
            <p className="section-head__sub">
              Designed for overseas Pakistanis who want the same quality
              experience without the travel.
            </p>
          </div>
          <SectionGrid columns={3}>
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{benefit.title}</h3>
                <p className="feature-item__desc">{benefit.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" id="related">
        <Container>
          <div className="section-head">
            <span className="kicker">Related</span>
            <h2 className="section-head__title">Also Useful</h2>
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
              href="/overseas-pakistanis/power-of-attorney"
              className="card feature-item"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--emerald-800)" }}>
                Power of Attorney Guide
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
              Book Remotely
            </span>
            <h2>Start Your Remote Booking Today</h2>
            <p>
              Contact an overseas advisor to begin. We handle the entire process
              so you can invest with confidence from anywhere in the world.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Start Remote Booking
              </Button>
              <Button
                href="/overseas-pakistanis/overseas-advisor"
                variant="light-outline"
                size="lg"
              >
                Talk to an Advisor
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
