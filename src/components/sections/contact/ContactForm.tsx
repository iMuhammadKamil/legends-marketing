import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/shared/Container/Container";

export default function ContactFormSection() {
  return (
    <section className="contact-form-section">
      <Container>
        <h2>Send Us a Message</h2>
        <ContactForm />
      </Container>
    </section>
  );
}