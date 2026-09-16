import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Leadership & Advisory Team | Legends Marketing",
  description:
    "Meet the experienced property consultants, investment advisors, and leadership team behind Legends Marketing.",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              About Us &middot; Team
            </span>
            <h1 className="page-hero__title">Leadership &amp; Advisory Team</h1>
            <p className="page-hero__sub">
              Seasoned real estate advisors dedicated to maximizing your capital returns with integrity and deep market knowledge.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Expert Guidance</span>
              <h2 style={{ marginBottom: "1.2rem" }}>
                Experienced Minds in Property Advisory
              </h2>
              <p>
                Our leadership team brings together decades of hands-on experience in property sales, land acquisition, legal due diligence, and portfolio structuring across Rawalpindi and Islamabad.
              </p>
              <p>
                Every advisor at Legends Marketing is trained to deliver personalized, goal-oriented solutions tailored to local investors and overseas Pakistanis.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Button href="/contact" variant="gold" size="lg">
                  Book a Strategy Call
                </Button>
              </div>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/about/leadership.jpg"
                alt="Legends Marketing Leadership Banner"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">Our Consultants</span>
            <h2 className="section-head__title">Senior Investment Advisors</h2>
          </div>
          <SectionGrid columns={3}>
            {team.map((m) => (
              <div key={m.id} className="card" style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--emerald-800), var(--emerald-950))",
                    color: "var(--gold-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    margin: "0 auto 1.2rem",
                  }}
                >
                  {m.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.3rem" }}>{m.name}</h3>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    color: "var(--gold-dark)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  {m.role}
                </span>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>{m.bio}</p>
                <div style={{ marginTop: "1.2rem" }}>
                  <Button href="/contact" variant="outline" size="sm">
                    Contact Advisor &rarr;
                  </Button>
                </div>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>
    </>
  );
}
