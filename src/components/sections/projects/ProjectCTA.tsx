import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectCTAProps {
  project: Project;
}

export default function ProjectCTA({ project }: ProjectCTAProps) {
  return (
    <section className="section">
      <Container>
        <div className="cta-band">
          <span className="kicker" style={{ color: "var(--gold-light)" }}>
            Take the Next Step
          </span>
          <h2>Ready to Invest in {project.name}?</h2>
          <p>Get the latest payment plans, prices and availability.</p>
          <div className="hero__cta" style={{ justifyContent: "center" }}>
            <Button href="/contact" variant="gold" size="lg">
              Book / Enquire Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}