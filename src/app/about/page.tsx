import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { contact } from "@/data/contact";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Legends Marketing - our story, mission, values and credentials as a registered real estate investment firm.",
};

const values = [
  {
    title: "Transparency",
    desc: "Honest guidance grounded in verified facts — we never promise what we cannot substantiate.",
  },
  {
    title: "Integrity",
    desc: "Investor-first advice across every stage, from project selection to after-sales support.",
  },
  {
    title: "Expertise",
    desc: "Deep knowledge of the Pakistan property market, delivered through research-led advisory.",
  },
  {
    title: "Commitment",
    desc: "Dedicated advisors who stay with you long after the booking is complete.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              About Legends Marketing
            </span>
            <h1 className="page-hero__title">Your Trusted Partner in Real Estate Investment</h1>
            <p className="page-hero__sub">
              {contact.company} is a professional real estate sales, marketing
              and investment consultancy firm — {contact.registration.toLowerCase()}.
            </p>
          </div>
        </Container>
      </section>

      <section className="section" id="story">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
            <div>
              <span className="kicker">Our Story</span>
              <h2>Turning Properties into Profitable Opportunities</h2>
              <p>
                {contact.company} was founded on a simple belief: property
                investment should be transparent, structured and accessible.
                We connect investors — locally and overseas — with
                Pakistan&rsquo;s most promising real estate projects through
                authorized partnerships with leading developers.
              </p>
              <p>
                Our business spans {contact.business.join(", ").toLowerCase()},
                giving investors a single trusted window into the market.
              </p>
              <p>
                Today, we serve investors through {contact.phone} and{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a> — and we
                are proud to be {contact.registration.toLowerCase()}.
              </p>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/about/overview.jpg"
                alt="Legends Marketing team — professional real estate consultancy"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt" id="values">
        <Container>
          <div className="section-head">
            <span className="kicker">Our Values</span>
            <h2 className="section-head__title">What We Stand For</h2>
          </div>
          <SectionGrid columns={4}>
            {values.map((value) => (
              <div key={value.title} className="feature-item" style={{ flexDirection: "column", gap: "0.5rem" }}>
                <h3 className="feature-item__title">{value.title}</h3>
                <p className="feature-item__desc">{value.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" id="credentials">
        <Container>
          <div className="section-head">
            <span className="kicker">Credentials</span>
            <h2 className="section-head__title">Registered & Authorized</h2>
            <p className="section-head__sub">{contact.registration}.</p>
          </div>
          <SectionGrid columns={3}>
            {partners.map((partner) => (
              <div key={partner.id} className="card partner-card">
                <span className="partner-card__monogram" aria-hidden="true">
                  {partner.name
                    .split(" ")
                    .filter((w) => w.length > 2)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </span>
                <h3 className="partner-card__name">{partner.name}</h3>
                <span className="partner-card__cat">{partner.category}</span>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Work With Us
            </span>
            <h2>Let&rsquo;s Plan Your Investment Together</h2>
            <p>
              Book a free consultation with an investment advisor and get
              clarity on your next property decision.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Book a Consultation
              </Button>
              <Button href="/projects" variant="light-outline" size="lg">
                Explore Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}