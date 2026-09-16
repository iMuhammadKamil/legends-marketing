import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { contact } from "@/data/contact";
import { partners } from "@/data/partners";

export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <Container>
        <div className="section-head text-center">
          <span className="kicker">Trust & Authorization</span>
          <h2 className="section-head__title">Registration &amp; Credentials</h2>
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
  );
}