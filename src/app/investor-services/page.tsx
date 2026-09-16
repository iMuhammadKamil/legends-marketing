import type { Metadata } from "next";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import ServiceCard from "@/components/shared/Card/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Investor Services",
  description:
    "Professional investor services - investment consultancy, property buying and selling, portfolio planning, market research and advisory.",
};

export default function InvestorServicesPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Investor Services
            </span>
            <h1 className="page-hero__title">Services Built for Smart Investors</h1>
            <p className="page-hero__sub">
              From your first consultation to after-sales support — a complete
              suite of investor services under one roof.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </SectionGrid>
          <div className="cta-band" style={{ marginTop: "3.5rem" }}>
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Not sure where to start?
            </span>
            <h2>Speak With an Investment Advisor</h2>
            <p>
              Tell us your goals and we will recommend the right service and
              project for you.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Button href="/contact" variant="gold" size="lg">
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}