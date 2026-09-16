import Container from "@/components/shared/Container/Container";
import { contact } from "@/data/contact";

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <Container>
        <h2>Contact Information</h2>
        <address>
          <p>{contact.officeAddress}</p>
          <p>{contact.city}, {contact.country}</p>
          <p>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>{contact.hours}</p>
        </address>
      </Container>
    </section>
  );
}