import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { contact } from "@/data/contact";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Registration & Credentials | Legends Marketing",
  description:
    "Review the official registration, chamber credentials, and authorized developer partnerships of Legends Marketing.",
};

const verificationSteps = [
  {
    title: "Chamber of Commerce Registration",
    desc: "Officially registered with the Rawalpindi Chamber of Commerce & Industry (RCCI), ensuring strict compliance with commercial and ethical trading laws.",
  },
  {
    title: "Direct Developer Authorization",
    desc: "Authorized sales & marketing agreements with ParkView City, Blue World City, Hashoo Group, Zedem International, and Premier Choice.",
  },
  {
    title: "Verified Documentation & Receipts",
    desc: "All client payments are made directly to official developer corporate bank accounts with instantaneous, verifiable ledger receipts.",
  },
  {
    title: "Overseas Expatriate Verification",
    desc: "Complete facilitation for Power of Attorney (POA) attestation, digital NICOP processing, and consular paperwork validation.",
  },
];

export default function CredentialsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              About Us &middot; Compliance
            </span>
            <h1 className="page-hero__title">Registration &amp; Credentials</h1>
            <p className="page-hero__sub">
              Your security is our priority. Explore our institutional registrations, developer authorizations, and compliance standards.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Institutional Recognition</span>
              <h2 style={{ marginBottom: "1.2rem" }}>
                {contact.registration}
              </h2>
              <p>
                Legends Marketing is a legally recognized, fully registered real estate firm headquartered in Rawalpindi, Pakistan. We operate under strict corporate governance and consumer protection codes.
              </p>
              <p>
                When you partner with us, you deal directly with licensed professionals who handle legitimate developer allocations, verified NOC projects, and transparent bank transfers.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Button href="/contact" variant="gold" size="lg">
                  Request Verification Documents
                </Button>
              </div>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/about/credentials.jpg"
                alt="Legends Marketing Credentials Banner"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">Verification Protocol</span>
            <h2 className="section-head__title">How We Guarantee Safe Transactions</h2>
          </div>
          <SectionGrid columns={2}>
            {verificationSteps.map((step) => (
              <div key={step.title} className="card" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.6rem", color: "var(--emerald-900)" }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--muted)" }}>{step.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">Authorized Alliances</span>
            <h2 className="section-head__title">Developer Partnerships</h2>
            <p className="section-head__sub">Direct sales & marketing authorizations.</p>
          </div>
          <SectionGrid columns={3}>
            {partners.map((p) => (
              <div key={p.id} className="card partner-card">
                <span className="partner-card__monogram" aria-hidden="true">
                  {p.name.split(" ").filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
                </span>
                <h3 className="partner-card__name">{p.name}</h3>
                <span className="partner-card__cat">{p.category}</span>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>
    </>
  );
}
