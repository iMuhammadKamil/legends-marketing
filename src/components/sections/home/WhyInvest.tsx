"use client";

import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/Section/SectionHeader";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { ScrollReveal, StaggerReveal } from "@/components/shared/ScrollReveal/ScrollRevealComponents";

const reasons = [
  {
    icon: "&#9881;",
    title: "Research-Led Advisory",
    desc: "Investment decisions grounded in transparent market research, never in hype or inflated claims.",
  },
  {
    icon: "&#128179;",
    title: "Authorized Partnerships",
    desc: "Official sales and marketing partner of leading developers including ParkView City and Blue World City.",
  },
  {
    icon: "&#10003;",
    title: "Registered & Trusted",
    desc: "Registered with the Rawalpindi Chamber of Commerce and committed to ethical investment guidance.",
  },
  {
    icon: "&#128214;",
    title: "End-to-End Support",
    desc: "From project selection and booking to documentation and after-sales, one dedicated advisor per client.",
  },
];

export default function WhyInvest() {
  return (
    <section className="section section--alt">
      <Container>
        <ScrollReveal>
          <SectionHeader
            kicker="Why Legends"
            title="Why Invest With Legends Marketing"
            subtitle="Trusted guidance that puts your capital to work in the right projects."
          />
        </ScrollReveal>
        <StaggerReveal
          childSelector=".feature-item"
          stagger={0.1}
          start="top 80%"
        >
          <SectionGrid columns={2}>
            {reasons.map((reason) => (
              <div key={reason.title} className="feature-item">
                <div
                  className="feature-item__icon"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: reason.icon }}
                />
                <div>
                  <h3 className="feature-item__title">{reason.title}</h3>
                  <p className="feature-item__desc">{reason.desc}</p>
                </div>
              </div>
            ))}
          </SectionGrid>
        </StaggerReveal>
      </Container>
    </section>
  );
}
