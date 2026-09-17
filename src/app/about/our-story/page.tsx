import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Our Story | Legends Marketing",
  description:
    "Discover the story of Legends Marketing , our heritage, milestones, and how we became a leading real estate marketing and investment advisory firm.",
};

const milestones = [
  {
    year: "Foundation",
    title: "Established with a Clear Purpose",
    desc: "Founded in Rawalpindi with a core mission: replacing real estate speculation with transparent, research-backed advisory.",
  },
  {
    year: "Authorized Alliances",
    title: "Partnering with Top Tier Developers",
    desc: "Became registered sales and marketing partners for premier developments including ParkView City, Blue World City, and Zedem.",
  },
  {
    year: "Chamber Registration",
    title: "Official Institutional Recognition",
    desc: "Formally registered with the Rawalpindi Chamber of Commerce, establishing verifiable institutional standing.",
  },
  {
    year: "Global Reach",
    title: "Dedicated Overseas Pakistani Desk",
    desc: "Launched streamlined remote investment services, empowering expatriates across the UK, Gulf, USA, and Europe to invest securely.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              About Us &middot; Heritage
            </span>
            <h1 className="page-hero__title">Our Story &amp; Journey</h1>
            <p className="page-hero__sub">
              How Legends Marketing grew into a trusted name for property sales, marketing, and investor advisory in Pakistan.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Who We Are</span>
              <h2 style={{ marginBottom: "1.2rem" }}>
                Turning Properties into Profitable Opportunities
              </h2>
              <p>
                <strong>{contact.company}</strong> was founded on a simple yet transformative belief: property investment should be transparent, structured, and genuinely accessible. For too long, investors in Pakistan were exposed to vague promises and speculative hype.
              </p>
              <p>
                We charted a fundamentally different path. Every project we represent is rigorously vetted for legal approvals, developer credibility, and actual ground execution.
              </p>
              <p>
                Today, operating from our headquarters in {contact.city}, we provide a single trusted window for local investors and overseas Pakistanis looking to build long-term property wealth.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Button href="/contact" variant="gold" size="lg">
                  Speak With Our Leadership
                </Button>
              </div>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/about/story.jpg"
                alt="Legends Marketing Story Banner"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">Evolution</span>
            <h2 className="section-head__title">Key Milestones</h2>
            <p className="section-head__sub">
              Our continuous growth in real estate excellence.
            </p>
          </div>
          <SectionGrid columns={4}>
            {milestones.map((item) => (
              <div key={item.title} className="feature-item" style={{ flexDirection: "column", gap: "0.6rem" }}>
                <span
                  style={{
                    color: "var(--gold-dark)",
                    fontSize: "0.85rem",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.year}
                </span>
                <h3 className="feature-item__title">{item.title}</h3>
                <p className="feature-item__desc">{item.desc}</p>
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
            <h2>Be Part of Our Next Chapter</h2>
            <p>
              Connect with our senior property advisors to explore vetted real estate opportunities in Islamabad and Rawalpindi.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Book Consultation
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
