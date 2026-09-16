import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";

export default function HomeCTA() {
  return (
    <section className="section">
      <Container>
        <div className="cta-band">
          <span className="kicker" style={{ color: "var(--gold-light)" }}>
            Ready to Invest?
          </span>
          <h2>Find Your Investment Today</h2>
          <p>
            Speak with an investment advisor and discover the right opportunity
            for your goals — with complete transparency and dedicated support.
          </p>
          <div className="hero__cta" style={{ justifyContent: "center" }}>
            <Button href="/contact" variant="gold" size="lg">
              Book a Consultation
            </Button>
            <Button href="/projects" variant="light-outline" size="lg">
              Browse Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}