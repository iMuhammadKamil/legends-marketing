import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export default function MissionVision() {
  return (
    <section id="mission-vision" className="section section--alt">
      <Container>
        <div className="section-head">
          <span className="kicker">Purpose & Direction</span>
          <h2 className="section-head__title">Our Mission &amp; Vision</h2>
        </div>
        <SectionGrid columns={2}>
          <div className="card" style={{ padding: "2.5rem 2rem" }}>
            <span className="kicker">Our Mission</span>
            <h3 style={{ marginBottom: "1rem" }}>Democratizing Smart Property Investment</h3>
            <p style={{ color: "var(--muted)" }}>
              To empower investors with genuine market insights, vetted project selections,
              and transparent end-to-end guidance that turns property acquisitions into reliable,
              long-term wealth generators.
            </p>
          </div>
          <div className="card" style={{ padding: "2.5rem 2rem" }}>
            <span className="kicker">Our Vision</span>
            <h3 style={{ marginBottom: "1rem" }}>Pakistan&apos;s Most Trusted Advisory Platform</h3>
            <p style={{ color: "var(--muted)" }}>
              To establish Legends Marketing as the premier standard of trust, institutional integrity,
              and tech-enabled property advisory for local and overseas Pakistanis worldwide.
            </p>
          </div>
        </SectionGrid>
      </Container>
    </section>
  );
}