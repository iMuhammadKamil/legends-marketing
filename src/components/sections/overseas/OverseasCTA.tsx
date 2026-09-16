import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";

export default function OverseasCTA() {
  return (
    <section className="overseas-cta">
      <Container>
        <h2>Talk to an Overseas Advisor</h2>
        <p>Get a free video consultation from anywhere in the world.</p>
        <div>
          <Button href="/overseas-pakistanis/overseas-advisor">
            Book Consultation
          </Button>
          <WhatsAppCTA />
        </div>
      </Container>
    </section>
  );
}