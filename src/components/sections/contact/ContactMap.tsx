import Container from "@/components/shared/Container/Container";
import { contact } from "@/data/contact";

export default function ContactMap() {
  return (
    <section className="contact-map">
      <Container>
        <h2>Office Location</h2>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            contact.officeAddress
          )}&output=embed`}
          title="Legends Marketing office location"
          width="100%"
          height="400"
          loading="lazy"
        />
      </Container>
    </section>
  );
}