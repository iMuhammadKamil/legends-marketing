import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Documentation Requirements",
  description:
    "Complete list of documents required for overseas Pakistanis to invest in property in Pakistan , CNIC, passport, NICOP, power of attorney and more.",
};

const requiredDocs = [
  {
    title: "CNIC / NICOP",
    desc: "A valid Computerised National Identity Card or National Identity Card for Overseas Pakistanis. This is the primary identification document for all property transactions in Pakistan. If your CNIC has expired, renew it before initiating any booking.",
  },
  {
    title: "Passport Copy",
    desc: "A clear scanned copy of your current passport , bio-data page. This is required for identity verification and for remittance documentation when transferring funds from abroad.",
  },
  {
    title: "Passport-Size Photographs",
    desc: "Recent passport-size photographs with a white background. Most developers require 4-6 photographs per booking. Ensure they are recent and match your CNIC/passport appearance.",
  },
  {
    title: "Power of Attorney (if applicable)",
    desc: "If you are authorising a family member or representative in Pakistan to act on your behalf, you will need a registered Power of Attorney. This must be attested by the Pakistani embassy or consulate in your country of residence.",
  },
  {
    title: "NADRA Birth Certificate",
    desc: "In some cases, particularly for inheritance or succession matters, a NADRA-issued birth certificate may be required to establish legal heirship.",
  },
  {
    title: "Bank Statement / Proof of Funds",
    desc: "A recent bank statement (last 3-6 months) demonstrating the source of funds. This is increasingly required under anti-money laundering regulations and helps establish the legitimate origin of your investment capital.",
  },
];

const attestationSteps = [
  {
    title: "Prepare Documents",
    desc: "Gather all required documents and ensure they are clear, legible and up to date.",
  },
  {
    title: "Visit Pakistani Embassy",
    desc: "Take your documents to the nearest Pakistani embassy or consulate for attestation. Some countries also accept notarised copies.",
  },
  {
    title: "Send to Pakistan",
    desc: "Courier attested documents to your representative or directly to Legends Marketing. We handle secure document receipt and verification.",
  },
  {
    title: "Verification Complete",
    desc: "Our team verifies all documents and confirms readiness for booking. You receive a confirmation before proceeding.",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Documentation Requirements</h1>
            <p className="page-hero__sub">
              Everything you need to prepare before investing in Pakistani real
              estate , a complete checklist for overseas investors.
            </p>
          </div>
        </Container>
      </section>

      <section className="section" id="required">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Essential Documents</span>
              <h2 className="section-head__title" style={{ textAlign: "left" }}>
                What You Need for Property Investment
              </h2>
              <p className="section-head__sub">
                Having these documents ready in advance will speed up your booking
                process significantly.
              </p>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/overseas/documentation.jpg"
                alt="Legal documentation for overseas property investment"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <SectionGrid columns={3}>
            {requiredDocs.map((doc) => (
              <div
                key={doc.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{doc.title}</h3>
                <p className="feature-item__desc">{doc.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section section--alt" id="attestation">
        <Container>
          <div className="section-head">
            <span className="kicker">Attestation Process</span>
            <h2 className="section-head__title">
              How to Get Documents Attested Abroad
            </h2>
            <p className="section-head__sub">
              Follow these steps to have your documents legally verified from
              outside Pakistan.
            </p>
          </div>
          <div className="steps-list">
            {attestationSteps.map((step) => (
              <div key={step.title} className="step-item">
                <h3 className="step-item__title">{step.title}</h3>
                <p className="step-item__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="tips">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
            <div>
              <span className="kicker">Important Notes</span>
              <h2>Document Tips for Overseas Investors</h2>
              <p>
                <strong>Expiry dates matter.</strong> Ensure your CNIC and
                passport are valid for at least 6 months beyond your intended
                transaction date. Expired documents will delay or void your
                booking.
              </p>
              <p>
                <strong>Keep digital copies.</strong> Maintain scanned copies
                (PDF and JPEG) of all documents on your phone and in cloud
                storage. You may need to submit them multiple times during the
                process.
              </p>
              <p>
                <strong>Use Legends Marketing as your document hub.</strong> We
                can receive, verify and store your documents securely, ensuring
                they are ready when needed.
              </p>
            </div>
            <div
              className="card"
              style={{
                aspectRatio: "4 / 3",
                background:
                  "linear-gradient(135deg, var(--emerald-800), var(--emerald-950))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                textAlign: "center",
                color: "var(--white)",
              }}
            >
              <span
                style={{ fontSize: "3rem", color: "var(--gold-light)" }}
                aria-hidden="true"
              >
                LM
              </span>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  color: "var(--white)",
                  maxWidth: "20rem",
                }}
              >
                We handle your documents with the highest security and
                confidentiality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Ready to Start?
            </span>
            <h2>Need Help With Documentation?</h2>
            <p>
              Our overseas advisors will walk you through every document
              requirement and handle the process on your behalf.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Get Document Assistance
              </Button>
              <Button
                href="/overseas-pakistanis/power-of-attorney"
                variant="light-outline"
                size="lg"
              >
                Power of Attorney Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
