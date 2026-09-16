import Container from "@/components/shared/Container/Container";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import type { Project } from "@/types/project";

interface ProjectAdvisorProps {
  project: Project;
}

export default function ProjectAdvisor({ project }: ProjectAdvisorProps) {
  const { advisor } = project;
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <div className="cta-band" style={{ textAlign: "left" }}>
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Investment Advisor
            </span>
            <h2 style={{ marginBottom: "0.5rem" }}>
              {advisor.designation}
            </h2>
            <p>
              <a
                href={`tel:${advisor.phone}`}
                style={{ color: "var(--gold-light)", fontWeight: 700 }}
              >
                {advisor.phone}
              </a>
              {"  "} &middot; {"  "}
              <a
                href={`mailto:${advisor.email}`}
                style={{ color: "var(--gold-light)", fontWeight: 700 }}
              >
                {advisor.email}
              </a>
            </p>
            <div className="hero__cta" style={{ marginTop: "1.4rem" }}>
              <WhatsAppCTA message={`Hello, I have a question about ${project.name}.`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}