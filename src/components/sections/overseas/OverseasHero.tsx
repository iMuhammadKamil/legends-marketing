import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";

export default function OverseasHero() {
  return (
    <section className="overseas-hero">
      <Container>
        <h1>Invest in Pakistan - From Anywhere in the World</h1>
        <p>
          Complete remote booking, documentation and payment support for
          overseas Pakistanis.
        </p>
        <Button href="/overseas-pakistanis/overseas-advisor">
          Book a Video Consultation
        </Button>
      </Container>
    </section>
  );
}