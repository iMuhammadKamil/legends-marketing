import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectLegalProps {
  project: Project;
}

export default function ProjectLegal({ project }: ProjectLegalProps) {
  const { legal } = project;
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Legal &amp; Approval Information</h2>
          <div className="grid-2" style={{ gap: "1rem" }}>
            <div className="feature-item">
              <div>
                <div className="project-meta__label" style={{ color: "var(--muted)" }}>
                  NOC Status
                </div>
                <p style={{ fontWeight: 700, color: "var(--charcoal-soft)", marginTop: "0.2rem" }}>
                  {legal.nocStatus}
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div>
                <div className="project-meta__label" style={{ color: "var(--muted)" }}>
                  Approval Authority
                </div>
                <p style={{ fontWeight: 700, color: "var(--charcoal-soft)", marginTop: "0.2rem" }}>
                  {legal.approvalAuthority}
                </p>
              </div>
            </div>
          </div>
          {legal.documents.length > 0 && (
            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ marginBottom: "0.8rem" }}>Documents</h3>
              <ul>
                {legal.documents.map((doc) => (
                  <li key={doc.name} style={{ marginBottom: "0.4rem" }}>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      {doc.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {legal.disclaimer && (
            <p className="tool-disclaimer" style={{ marginTop: "1.5rem" }}>
              {legal.disclaimer}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}