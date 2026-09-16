import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Payment Methods for Overseas Pakistanis",
  description:
    "Secure and convenient payment methods for overseas Pakistanis investing in Pakistani real estate — wire transfers, bank drafts, online banking and more.",
};

const paymentMethods = [
  {
    title: "International Wire Transfer (TT)",
    desc: "The most common method for overseas investors. Transfer funds directly from your international bank account to the developer's designated PKR or FCY account. Fully traceable, documented and legally compliant. Processing time: 2-5 business days.",
  },
  {
    title: "Bank Draft / Demand Draft",
    desc: "Issue a bank draft from your local bank in favour of the developer. This is a secure, bank-guaranteed payment instrument accepted by all major developers. Suitable for larger down payments and lump-sum instalments.",
  },
  {
    title: "Online Banking / Internet Transfer",
    desc: "Use your bank's online banking portal to transfer funds domestically or internationally. Many Pakistani banks now support direct online remittances for property transactions. Fast, convenient and fully documented.",
  },
  {
    title: "Mobile App Transfers",
    desc: "Transfer funds using mobile banking apps like JazzCash, EasyPaisa or bank-specific apps. Ideal for smaller instalments and quick payments. Ensure you receive a digital receipt for every transaction.",
  },
  {
    title: "Foreign Currency Account (FCY)",
    desc: "Open a foreign currency account with any Pakistani bank. Maintain your savings in USD, GBP, EUR or AED and transfer directly from this account. FCY accounts offer full repatriation rights and protection against currency fluctuation.",
  },
  {
    title: "Through Legends Marketing",
    desc: "We can accept and forward payments on your behalf through our official business accounts. Every transaction is documented, receipted and traceable. This is a convenient option for investors who prefer a single point of contact.",
  },
];

const faqs = [
  {
    question: "Are overseas payments legally protected?",
    answer:
      "Yes. All property transactions in Pakistan are governed by the Transfer of Property Act and overseen by the relevant development authority. Overseas payments through banking channels carry full legal protection and can be verified through bank records.",
  },
  {
    question: "What currency should I pay in?",
    answer:
      "Most developers accept payments in PKR, USD, GBP and AED. If you pay in foreign currency, the conversion rate is applied at the prevailing market rate on the date of receipt. Some societies offer fixed USD pricing for overseas investors.",
  },
  {
    question: "How do I get a payment receipt?",
    answer:
      "Every payment — whether wire transfer, bank draft or online — generates an official receipt. Legends Marketing provides duplicate receipts and maintains a complete payment ledger for your records.",
  },
  {
    question: "Can I pay in instalments from abroad?",
    answer:
      "Absolutely. Most projects offer 12-48 month instalment plans. You can set up recurring transfers or make manual payments at your convenience. We send payment reminders and track your schedule.",
  },
  {
    question: "Is there a minimum payment amount?",
    answer:
      "The minimum is typically the down payment specified by the project — usually 10-20% of the total plot price. After that, instalments follow the society's published schedule.",
  },
];

export default function PaymentMethodsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Overseas Pakistanis
            </span>
            <h1 className="page-hero__title">Payment Methods</h1>
            <p className="page-hero__sub">
              Secure, documented and convenient payment options designed for
              overseas Pakistanis investing in Pakistani real estate.
            </p>
          </div>
        </Container>
      </section>

      <section className="section" id="methods">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3.5rem" }}>
            <div>
              <span className="kicker">Available Options</span>
              <h2 className="section-head__title" style={{ textAlign: "left" }}>
                How You Can Pay From Abroad
              </h2>
              <p className="section-head__sub">
                Choose the method that works best for your location and banking
                setup.
              </p>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="/images/overseas/payment-methods.jpg"
                alt="Secure international payment methods for overseas investors"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <SectionGrid columns={3}>
            {paymentMethods.map((method) => (
              <div
                key={method.title}
                className="feature-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{method.title}</h3>
                <p className="feature-item__desc">{method.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section section--alt" id="faqs">
        <Container>
          <div className="section-head">
            <span className="kicker">Frequently Asked</span>
            <h2 className="section-head__title">Payment FAQs</h2>
          </div>
          <div className="steps-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="step-item">
                <h3 className="step-item__title">{faq.question}</h3>
                <p className="step-item__desc">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="security">
        <Container>
          <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
            <div>
              <span className="kicker">Security & Compliance</span>
              <h2>Your Payments Are Protected</h2>
              <p>
                All payments processed through Legends Marketing are handled
                via official banking channels with full documentation. We
                comply with State Bank of Pakistan regulations for overseas
                property transactions.
              </p>
              <p>
                Every transaction generates an official receipt, and our
                payment ledger provides a complete audit trail from
                initiation to allocation. Your financial security is
                non-negotiable.
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
                100% traceable. 100% documented. 100% secure.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Ready to Pay?
            </span>
            <h2>Need Help With Payments?</h2>
            <p>
              Our advisors can guide you through the best payment method for
              your location and banking setup. Get a personalised recommendation
              today.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Get Payment Guidance
              </Button>
              <Button
                href="/overseas-pakistanis/remote-booking"
                variant="light-outline"
                size="lg"
              >
                Start Remote Booking
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
