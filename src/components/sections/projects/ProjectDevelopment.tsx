import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectDevelopmentProps {
  project: Project;
}

export default function ProjectDevelopment({
  project,
}: ProjectDevelopmentProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Development Updates</h2>
          {project.development.length > 0 ? (
            <div className="grid-2" style={{ gap: "1rem", marginTop: "1.2rem" }}>
              {project.development.map((update) => (
                <div key={update.id} className="card" style={{ padding: "1.4rem 1.5rem" }}>
                  <span className="badge badge--gold">{update.date}</span>
                  <h3 style={{ margin: "0.6rem 0 0.3rem", fontSize: "1.05rem" }}>
                    {update.title}
                  </h3>
                  <p className="feature-item__desc">{update.description}</p>
                  {update.percentage !== undefined && (
                    <p className="feature-item__desc" style={{ marginTop: "0.6rem", fontWeight: 700 }}>
                      Progress: {update.percentage}%
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="section-head__sub">
              Development updates will be added as official information becomes
              available.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}