import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";

export default function ServiceCTA() {
  return (
    <section className="service-cta">
      <Container>
        <h2>Get Started Today</h2>
        <p>Book a free consultation with our investment advisors.</p>
        <Button href="/contact">Book Consultation</Button>
      </Container>
    </section>
  );
}