import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

const values = [
  {
    title: "Transparency",
    desc: "Honest guidance grounded in verified facts — we never promise what we cannot substantiate.",
  },
  {
    title: "Integrity",
    desc: "Investor-first advice across every stage, from project selection to after-sales support.",
  },
  {
    title: "Expertise",
    desc: "Deep knowledge of the Pakistan property market, delivered through research-led advisory.",
  },
  {
    title: "Commitment",
    desc: "Dedicated advisors who stay with you long after the booking is complete.",
  },
];

export default function CoreValues() {
  return (
    <section id="core-values" className="section section--alt">
      <Container>
        <div className="section-head text-center">
          <span className="kicker">Guiding Principles</span>
          <h2 className="section-head__title">What We Stand For</h2>
        </div>
        <SectionGrid columns={4}>
          {values.map((value) => (
            <div key={value.title} className="feature-item" style={{ flexDirection: "column", gap: "0.5rem" }}>
              <h3 className="feature-item__title">{value.title}</h3>
              <p className="feature-item__desc">{value.desc}</p>
            </div>
          ))}
        </SectionGrid>
      </Container>
    </section>
  );
}