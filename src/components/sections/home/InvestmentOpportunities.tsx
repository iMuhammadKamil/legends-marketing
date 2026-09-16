import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/Section/SectionHeader";

const opportunities = [
  {
    icon: "&#127968;",
    title: "Residential Plots",
    desc: "Prime residential plots in Islamabad and Rawalpindi's fastest-growing societies.",
  },
  {
    icon: "&#127963;",
    title: "Commercial Plots",
    desc: "High-visibility commercial positions for long-term rental and resale value.",
  },
  {
    icon: "&#128203;",
    title: "Files & Installments",
    desc: "Flexible file-based purchases with manageable installment structures.",
  },
  {
    icon: "&#9992;",
    title: "Overseas Investment",
    desc: "Dedicated guidance for overseas Pakistanis — fully remote from booking to documentation.",
  },
];

export default function InvestmentOpportunities() {
  return (
    <section className="section section--dark">
      <Container>
        <SectionHeader
          kicker="Opportunities"
          title="Investment Opportunities"
          subtitle="Whatever your goals — capital growth, rental income, or a future home — we find the project that fits."
        />
        <div className="grid-4">
          {opportunities.map((opp) => (
            <div key={opp.title} className="opp-card">
              <div
                className="opp-card__icon"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: opp.icon }}
              />
              <h3 className="opp-card__title">{opp.title}</h3>
              <p className="opp-card__desc">{opp.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Button href="/projects" variant="gold" size="lg">
            Find Your Investment
          </Button>
        </div>
      </Container>
    </section>
  );
}