import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { team } from "@/data/team";

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <Container>
        <div className="section-head text-center">
          <span className="kicker">Our Experts</span>
          <h2 className="section-head__title">Leadership &amp; Advisors</h2>
          <p className="section-head__sub">
            Experienced real estate professionals dedicated to guiding your investment journey.
          </p>
        </div>
        <SectionGrid columns={3}>
          {team.map((member) => (
            <div key={member.id} className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--emerald-800), var(--emerald-950))",
                  color: "var(--gold-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  margin: "0 auto 1rem",
                }}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.25rem" }}>{member.name}</h3>
              <p style={{ color: "var(--gold-dark)", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                {member.role}
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{member.bio}</p>
            </div>
          ))}
        </SectionGrid>
      </Container>
    </section>
  );
}