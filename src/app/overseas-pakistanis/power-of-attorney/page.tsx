import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Power of Attorney Guide for Overseas Pakistanis",
  description:
    "How overseas Pakistanis can use a Power of Attorney to manage property investments remotely — types, process, attestation and legal requirements.",
};

const poaTypes = [
  {
    title: "General Power of Attorney (GPA)",
    desc: "Grants broad authority to your representative to act on your behalf in property matters — including buying, selling, transferring and managing assets. Suitable for investors who want comprehensive remote management.",
  },
  {
    title: "Special Power of Attorney (SPA)",
    desc: "Grants specific, limited authority for a defined task — such as signing a single booking form or collecting documents. Ideal for one-time transactions where you want to restrict your representative's scope.",
  },
  {
    title: "Irrevocable Power of Attorney",
    desc: "Cannot be cancelled once executed. Used in specific legal and business contexts. Consult with a legal advisor before granting an irrevocable POA — it has significant legal implications.",
  },
];

const processSteps = [
  {
    title: "Draft the POA Document",
    desc: "Work with a Pakistani lawyer to draft the Power of Attorney. The document must clearly specify the authority granted, the properties involved (if applicable) and any limitations. Legends Marketing can recommend trusted legal professionals.",
  },
  {
    title: "Visit the Pakistani Embassy",
    desc: "Take the drafted POA to the nearest Pakistani embassy or consulate. The embassy staff will witness your signature and attest the document. Some embassies require an appointment — book in advance.",
  },
  {
    title: "Pay the Stamp Duty",
    desc: "Stamp duty on Power of Attorney varies by province. In Islamabad Capital Territory, it is currently PKR 1,000 for a standard GPA. Your lawyer or representative can pay this on your behalf.",
  },
  {
    title: "Register the POA",
    desc: "The attested POA must be registered with the relevant Sub-Registrar office in Pakistan. Your representative handles this step. Registration gives the POA legal standing for property transactions.",
  },
  {
    title: "Send the Original to Pakistan",
    desc: "Courier the original attested and registered POA to your representative. Keep digital scans for your records. The original is required for all official property transactions.",
  },
  {
    title: "Confirmation & Use",
    desc: "Once received and verified, your representative can begin acting on your behalf. Legends Marketing confirms POA validity before proceeding with any transaction.",
  },
];

const tips = [
  {
    title: "Choose Your Representative Carefully",
    desc: "A POA grants significant power. Select someone you trust implicitly — a close family member, trusted friend or professional advisor. The representative should be based in the same city as your property investment.",
  },
  {
    title: "Specify the Scope Clearly",
    desc: "Vague POAs create legal complications. Clearly define what your representative can and cannot do. For property investment, specify: booking, payment, transfer, possession and resale authority.",
  },
  {
    title: "Keep POA Updated",
    desc: "If your circumstances change — new property, different representative, changed authority — update the POA immediately. An outdated POA can cause transaction delays or legal issues.",
  },
  {
    title: "Use a Lawyer",
    desc: "Do not draft a POA yourself. Use a qualified Pakistani property lawyer who understands the specific requirements of your province and the development authority involved.",
  },
];

export default function PowerOfAttorneyPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Power of Attorney Guide</h1>
            <p className="page-hero__sub">
              Authorise a trusted person in Pakistan to manage your property
              investments on your behalf — a complete guide to POA for overseas
              investors.
            </p>
          </div>
        </Container>
      </section>

      <section className="section" id="types">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/overseas/power-of-attorney.jpg"
                alt="Legal power of attorney documentation"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <span className="kicker">Types of POA</span>
              <h2 className="section-head__title" style={{ textAlign: "left" }}>
                Understanding Power of Attorney Types
              </h2>
              <p className="section-head__sub">
                Choose the right type based on your needs and the level of
                authority you want to grant.
              </p>
            </div>
          </div>
          <SectionGrid columns={3}>
            {poaTypes.map((type) => (
              <div
                key={type.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{type.title}</h3>
                <p className="feature-item__desc">{type.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section section--alt" id="process">
        <Container>
          <div className="section-head">
            <span className="kicker">Step-by-Step</span>
            <h2 className="section-head__title">
              How to Set Up a Power of Attorney
            </h2>
            <p className="section-head__sub">
              Follow this process to create a legally valid POA from outside
              Pakistan.
            </p>
          </div>
          <div className="steps-list">
            {processSteps.map((step) => (
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
          <div className="section-head">
            <span className="kicker">Expert Advice</span>
            <h2 className="section-head__title">
              Tips for a Strong Power of Attorney
            </h2>
          </div>
          <SectionGrid columns={2}>
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{tip.title}</h3>
                <p className="feature-item__desc">{tip.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Need a POA?
            </span>
            <h2>Let Us Help You Set It Up</h2>
            <p>
              Our overseas advisors can connect you with trusted lawyers and
              guide you through every step of the Power of Attorney process.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Get POA Assistance
              </Button>
              <Button
                href="/overseas-pakistanis/documentation"
                variant="light-outline"
                size="lg"
              >
                Documentation Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
