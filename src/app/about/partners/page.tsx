import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Strategic Partners | Legends Marketing",
  description:
    "Meet the premier real estate developers and institutional partners working with Legends Marketing across Pakistan.",
};

export default function StrategicPartnersPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              About Us &middot; Alliances
            </span>
            <h1 className="page-hero__title">Strategic Partners &amp; Developers</h1>
            <p className="page-hero__sub">
              Direct authorized marketing and sales partnerships with Pakistan's most respected real estate developers.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Vetted Portfolio</span>
              <h2 style={{ marginBottom: "1.2rem" }}>
                Collaborating with Industry Leaders
              </h2>
              <p>
                At Legends Marketing, we maintain rigorous criteria before partnering with any developer. We evaluate legal NOC status, on-ground machinery deployment, land acquisition records, and past delivery track records.
              </p>
              <p>
                Our authorized partner network spans premier residential housing societies, mixed-use commercial towers, and smart city developments in Islamabad and Rawalpindi.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Button href="/projects" variant="gold" size="lg">
                  Explore Partner Projects
                </Button>
              </div>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/about/partners.jpg"
                alt="Legends Marketing Strategic Partners"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="section-head text-center">
            <span className="kicker">Authorized Portfolio</span>
            <h2 className="section-head__title">Our Developer Network</h2>
          </div>
          <SectionGrid columns={3}>
            {partners.map((p) => (
              <div key={p.id} className="card" style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    border: "2px solid var(--gold)",
                    background: "var(--emerald-900)",
                    color: "var(--gold-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    margin: "0 auto 1.2rem",
                  }}
                >
                  {p.name.split(" ").filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
                </div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>{p.name}</h3>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: "700",
                    color: "var(--gold-dark)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  {p.category}
                </span>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{p.description}</p>
                <div style={{ marginTop: "1.2rem" }}>
                  <Button href={`/projects/${p.slug}`} variant="outline" size="sm">
                    View Project Details &rarr;
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
