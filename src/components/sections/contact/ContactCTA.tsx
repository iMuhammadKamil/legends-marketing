import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import CallCTA from "@/components/cta/CallCTA";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <Container>
        <h2>Prefer to Talk?</h2>
        <div>
          <WhatsAppCTA />
          <CallCTA />
          <Button href="/investment-tools/property-finder">
            Try the Property Finder
          </Button>
        </div>
      </Container>
    </section>
  );
}