import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

const pillars = [
  {
    title: "Authorized Direct Partners",
    desc: "Official sales & marketing partners for premier housing projects with verified developer credentials.",
  },
  {
    title: "Market-Driven Advisory",
    desc: "Objective, data-backed guidance that protects your capital and aligns with your real estate goals.",
  },
  {
    title: "End-to-End Support",
    desc: "Complete documentation, verification, remote booking for overseas Pakistanis, and after-sales assistance.",
  },
];

export default function WhyLegends() {
  return (
    <section id="why-legends" className="section section--dark">
      <Container>
        <div className="section-head text-center">
          <span className="kicker" style={{ color: "var(--gold-light)" }}>The Legends Advantage</span>
          <h2 className="section-head__title" style={{ color: "var(--white)" }}>Why Invest With Legends Marketing</h2>
          <p className="section-head__sub">
            Built on integrity, certified credentials, and decades of market insight.
          </p>
        </div>
        <SectionGrid columns={3}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className="opp-card">
              <h3 className="opp-card__title" style={{ marginBottom: "0.5rem" }}>{pillar.title}</h3>
              <p className="opp-card__desc">{pillar.desc}</p>
            </div>
          ))}
        </SectionGrid>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button href="/contact" variant="gold" size="lg">
            Talk to an Investment Advisor
          </Button>
        </div>
      </Container>
    </section>
  );
}