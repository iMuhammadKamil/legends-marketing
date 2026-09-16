import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectHighlightsProps {
  project: Project;
}

export default function ProjectHighlights({ project }: ProjectHighlightsProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Investment Highlights</h2>
          <ul className="grid-2" style={{ gap: "1rem" }}>
            {project.overview.highlights.map((highlight) => (
              <li key={highlight} className="feature-item" style={{ alignItems: "center" }}>
                <span
                  className="feature-item__icon"
                  aria-hidden="true"
                  style={{ color: "var(--gold-dark)" }}
                >
                  &#10003;
                </span>
                <span style={{ fontWeight: 600, color: "var(--charcoal-soft)" }}>
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}