import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Overview</h2>
          <p>{project.overview.description}</p>
          <div className="project-meta-grid">
            <div className="card project-meta" style={{ background: "var(--white)" }}>
              <div className="project-meta__label" style={{ color: "var(--muted)" }}>
                Total Area
              </div>
              <div className="project-meta__value" style={{ color: "var(--charcoal)" }}>
                {project.overview.totalArea}
              </div>
            </div>
            <div className="card project-meta" style={{ background: "var(--white)" }}>
              <div className="project-meta__label" style={{ color: "var(--muted)" }}>
                Plot Sizes
              </div>
              <div className="project-meta__value" style={{ color: "var(--charcoal)" }}>
                {project.overview.plotSizes.join(", ")}
              </div>
            </div>
            <div className="card project-meta" style={{ background: "var(--white)" }}>
              <div className="project-meta__label" style={{ color: "var(--muted)" }}>
                Possession
              </div>
              <div className="project-meta__value" style={{ color: "var(--charcoal)" }}>
                {project.overview.possessionStatus}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}