"use client";

import { useState } from "react";
import Button from "@/components/shared/Button/Button";

interface ContactFormProps {
  heading?: string;
  defaultInterest?: string;
}

export default function ContactForm({
  heading,
  defaultInterest,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(false);
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="form">
        <p className="form__success">
          Thank you! Your message has been received. Our investment advisor
          will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {heading && <h3 style={{ marginBottom: "1.4rem" }}>{heading}</h3>}
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="cf-name">Full Name *</label>
          <input id="cf-name" type="text" name="name" required placeholder="Your name" />
        </div>
        <div className="form__field">
          <label htmlFor="cf-phone">Phone / WhatsApp *</label>
          <input id="cf-phone" type="tel" name="phone" required placeholder="03xx xxxxxxx" />
        </div>
      </div>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" type="email" name="email" placeholder="you@example.com" />
        </div>
        <div className="form__field">
          <label htmlFor="cf-interest">I am interested in</label>
          <select id="cf-interest" name="interest" defaultValue={defaultInterest ?? ""}>
            <option value="">Select an option</option>
            <option value="projects">Projects</option>
            <option value="investor-services">Investor Services</option>
            <option value="overseas">Overseas Pakistanis</option>
            <option value="consultation">Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form__field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Tell us about your investment goals..."
        />
      </div>
      {error && (
        <p className="form__note" style={{ color: "#b00020" }}>
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
      <Button type="submit" variant="gold" disabled={sending} className="btn--block">
        {sending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}