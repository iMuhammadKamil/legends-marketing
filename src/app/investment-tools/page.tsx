import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import ToolCard from "@/components/shared/Card/ToolCard";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Investment Tools",
  description:
    "Free investment tools - ROI calculator, installment calculator, budget calculator, project comparison, property finder and investment quiz.",
};

export default function InvestmentToolsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Free Tools
            </span>
            <h1 className="page-hero__title">Investment Tools</h1>
            <p className="page-hero__sub">
              Calculators and guides to help you plan your investment with
              confidence. Results are indicative , verify final figures with
              our advisors.
            </p>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </SectionGrid>
        </Container>
      </section>
    </>
  );
}