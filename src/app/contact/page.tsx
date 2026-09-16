import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import ContactForm from "@/components/forms/ContactForm";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Legends Marketing. Office location, contact form, WhatsApp, call or book a consultation.",
};

const channels = [
  {
    title: "Call Us",
    value: contact.phone,
    href: `tel:${contact.phoneTel}`,
    icon: "&#128222;",
  },
  {
    title: "Email Us",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: "&#9993;",
  },
  {
    title: "WhatsApp",
    value: "Chat with an advisor",
    href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      "Hello Legends Marketing, I am interested in real estate investment."
    )}`,
    icon: "&#128172;",
  },
  {
    title: "Office",
    value: `${contact.officeAddress}, ${contact.city}, ${contact.country}`,
    href: contact.mapUrl,
    icon: "&#128205;",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Get in Touch
            </span>
            <h1 className="page-hero__title">Contact Legends Marketing</h1>
            <p className="page-hero__sub">
              Speak with an investment advisor about projects, payment plans or
              booking your consultation.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid-4">
            {channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="card feature-item"
                style={{ flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}
              >
                <div
                  className="feature-item__icon"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: channel.icon }}
                />
                <h3 className="feature-item__title">{channel.title}</h3>
                <p className="feature-item__desc" style={{ wordBreak: "break-word" }}>
                  {channel.value}
                </p>
              </a>
            ))}
          </div>

          <div className="grid-2" style={{ marginTop: "3.5rem", alignItems: "stretch" }}>
            <div
              className="card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="kicker">Send a Message</span>
              <h2 style={{ marginBottom: "0.75rem" }}>Book Your Consultation</h2>
              <p
                className="section-head__sub"
                style={{ marginBottom: "1.5rem" }}
              >
                Fill in the form and our investment advisor will get back to you
                within one business day.
              </p>
              <ContactForm heading="Tell us about your goals" />
            </div>

            <div
              className="card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="kicker">Find Us</span>
              <h2 style={{ marginBottom: "0.75rem" }}>Head Office</h2>
              <p
                className="section-head__sub"
                style={{ marginBottom: "1.25rem" }}
              >
                Premier Choice, Bahria Food Street, Phase 7, Bahria Town,
                Islamabad. Opening hours: {contact.hours}.
              </p>
              <iframe
                title="Legends Marketing head office — Premier Choice, Bahria Food Street, Phase 7"
                src="https://maps.google.com/maps?ll=33.525614,73.096629&q=Premier%20Choice%20Food%20Street%20Phase%207%20Bahria%20Town%20Islamabad&z=17&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "var(--radius)",
                  flex: 1,
                  minHeight: "420px",
                  width: "100%",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}