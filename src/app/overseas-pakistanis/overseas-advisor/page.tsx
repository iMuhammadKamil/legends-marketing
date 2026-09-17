import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Overseas Investment Advisor",
  description:
    "Get a dedicated overseas investment advisor from Legends Marketing , personalised guidance for overseas Pakistanis investing in property remotely.",
};

const advisorServices = [
  {
    title: "Market Research & Analysis",
    desc: "Your advisor provides detailed market insights, price trends and growth projections for projects relevant to your budget and goals. Stay informed with data-driven recommendations.",
  },
  {
    title: "Project Shortlisting",
    desc: "Based on your investment criteria , budget, location preference, risk tolerance and timeline , your advisor curates a shortlist of the best-matching projects from our authorized portfolio.",
  },
  {
    title: "Documentation Support",
    desc: "From CNIC renewal guidance to POA drafting, your advisor ensures every document is prepared correctly and submitted on time. No more guesswork or delays.",
  },
  {
    title: "Remote Booking Management",
    desc: "Your advisor handles the entire booking process , form completion, payment coordination, society liaison and allocation confirmation , all done remotely on your behalf.",
  },
  {
    title: "Payment Tracking",
    desc: "Receive regular payment reminders, updated ledgers and receipt confirmations. Your advisor maintains a complete financial record of your investment.",
  },
  {
    title: "After-Sales Support",
    desc: "The relationship doesn't end at booking. Your advisor stays with you through construction updates, possession handover, transfer processing and resale support.",
  },
];

const advantages = [
  {
    title: "Single Point of Contact",
    desc: "One dedicated advisor who knows your investment inside out. No repeating your story to different people , your advisor handles everything.",
  },
  {
    title: "Local Expertise, Global Access",
    desc: "Our advisors are based in Pakistan with deep local market knowledge, but they serve you through digital channels accessible from anywhere in the world.",
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates, honest assessments and no hidden agendas. Your advisor's goal is the same as yours , maximising your return on investment.",
  },
  {
    title: "Multi-Project Management",
    desc: "Investing in more than one project? Your advisor manages all your investments through a single relationship, with consolidated reporting and coordination.",
  },
];

const process = [
  {
    title: "Initial Contact",
    desc: "Reach out via phone, WhatsApp or our contact form. Share your basic investment criteria , budget, preferred city and timeline.",
  },
  {
    title: "Advisor Assignment",
    desc: "We assign a dedicated overseas advisor based on your needs. You receive their direct contact details and can begin communicating immediately.",
  },
  {
    title: "Strategy Session",
    desc: "Your advisor schedules a detailed consultation , via call or video , to understand your goals, risk profile and preferred investment approach.",
  },
  {
    title: "Ongoing Partnership",
    desc: "Your advisor remains your single point of contact for all property matters , from the first inquiry to long-term portfolio management.",
  },
];

export default function OverseasAdvisorPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Your Overseas Investment Advisor</h1>
            <p className="page-hero__sub">
              A dedicated advisor who understands the unique challenges of
              investing from abroad , and handles everything so you don&apos;t
              have to.
            </p>
          </div>
        </Container>
      </section>

      <section className="section" id="services">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">What We Do</span>
              <h2 className="section-head__title" style={{ textAlign: "left" }}>
                Your Advisor Handles It All
              </h2>
              <p className="section-head__sub">
                From market research to after-sales support, your dedicated
                advisor covers every aspect of your investment journey.
              </p>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/overseas/overseas-advisor.jpg"
                alt="Dedicated overseas investment advisor"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <SectionGrid columns={3}>
            {advisorServices.map((service) => (
              <div
                key={service.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{service.title}</h3>
                <p className="feature-item__desc">{service.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section section--alt" id="advantages">
        <Container>
          <div className="section-head">
            <span className="kicker">Why Choose Us</span>
            <h2 className="section-head__title">
              The Legends Marketing Advantage
            </h2>
          </div>
          <SectionGrid columns={2}>
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{adv.title}</h3>
                <p className="feature-item__desc">{adv.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" id="process">
        <Container>
          <div className="section-head">
            <span className="kicker">Getting Started</span>
            <h2 className="section-head__title">
              How to Get Your Dedicated Advisor
            </h2>
          </div>
          <div className="steps-list">
            {process.map((step) => (
              <div key={step.title} className="step-item">
                <h3 className="step-item__title">{step.title}</h3>
                <p className="step-item__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Get Started
            </span>
            <h2>Connect With an Overseas Advisor Today</h2>
            <p>
              Tell us about your investment goals and we&apos;ll match you
              with a dedicated advisor who specialises in your target market.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Get Your Advisor
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
