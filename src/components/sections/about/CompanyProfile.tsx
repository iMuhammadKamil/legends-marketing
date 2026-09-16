import Container from "@/components/shared/Container/Container";
import { contact } from "@/data/contact";

export default function CompanyProfile() {
  return (
    <section id="company-profile" className="section">
      <Container>
        <div className="section-head text-center">
          <span className="kicker">Corporate Overview</span>
          <h2 className="section-head__title">About Legends Marketing</h2>
          <p className="section-head__sub">
            {contact.company} is a registered real estate sales, marketing, and investment consultancy firm based in {contact.city}, Pakistan.
          </p>
        </div>
        <div className="grid-3" style={{ marginTop: "2rem" }}>
          <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
            <span className="hero-stat__value" style={{ display: "block", marginBottom: "0.5rem", color: "var(--emerald-800)" }}>
              {contact.registration}
            </span>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Institutional Standing</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
              Fully recognized and officially registered corporate entity.
            </p>
          </div>
          <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
            <span className="hero-stat__value" style={{ display: "block", marginBottom: "0.5rem", color: "var(--emerald-800)" }}>
              7+ Mega Projects
            </span>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Authorized Partnerships</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
              Directly partnered with premier developers in Islamabad and Rawalpindi.
            </p>
          </div>
          <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
            <span className="hero-stat__value" style={{ display: "block", marginBottom: "0.5rem", color: "var(--emerald-800)" }}>
              100% Dedicated
            </span>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Investor Advisory</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
              Providing guidance from initial project verification to final file delivery.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}