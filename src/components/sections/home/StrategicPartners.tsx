import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/Section/SectionHeader";
import { partners } from "@/data/partners";

function monogram(name: string) {
  return name
    .split(" ")
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function StrategicPartners() {
  return (
    <section className="section section--alt">
      <Container>
        <SectionHeader
          kicker="Authorized Partnerships"
          title="Our Strategic Partners"
          subtitle="We are an authorized sales and marketing partner for leading developers."
        />
        <div className="grid-3">
          {partners.map((partner) => (
            <div key={partner.id} className="card partner-card">
              <span className="partner-card__monogram" aria-hidden="true">
                {monogram(partner.name)}
              </span>
              <h3 className="partner-card__name">{partner.name}</h3>
              <span className="partner-card__cat">{partner.category}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}