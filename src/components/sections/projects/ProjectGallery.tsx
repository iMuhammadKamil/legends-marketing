import Image from "@/components/shared/Image/Image";
import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="kicker">Visual Portfolio</span>
            <h2>Project Gallery & Master Layouts</h2>
          </div>
          {project.gallery.length > 0 ? (
            <div className="grid-2" style={{ gap: "1.5rem" }}>
              {project.gallery.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
                >
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", overflow: "hidden" }}>
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="gallery-image"
                      style={{ objectFit: "cover" }}
                    />
                    {item.category && (
                      <span
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "rgba(6, 35, 27, 0.85)",
                          color: "var(--gold-light)",
                          fontSize: "0.75rem",
                          fontWeight: "700",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "999px",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.category}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--charcoal)", marginBottom: "0.2rem" }}>
                      {item.alt}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0 }}>
                      Official verified site visualization for {project.name}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card" style={{ overflow: "hidden" }}>
              <Image
                src={project.coverImage || project.masterPlan.imageUrl}
                alt={`${project.name} master plan`}
                width={1200}
                height={600}
                style={{ width: "100%", height: 320, objectFit: "cover" }}
              />
              <div style={{ padding: "1.2rem 1.5rem" }}>
                <p className="form__note" style={{ marginTop: 0 }}>
                  Site photos and walkthrough videos are updated regularly. Contact our investment advisor for live video tours.
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}