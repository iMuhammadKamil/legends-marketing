import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectAmenitiesProps {
  project: Project;
}

export default function ProjectAmenities({ project }: ProjectAmenitiesProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Amenities</h2>
          {project.amenities.length > 0 ? (
            <ul className="grid-3" style={{ gap: "1rem" }}>
              {project.amenities.map((amenity) => (
                <li key={amenity.id} className="feature-item" style={{ alignItems: "center" }}>
                  <span className="feature-item__icon" aria-hidden="true">
                    {amenity.icon || "&#10003;"}
                  </span>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--charcoal-soft)" }}>
                      {amenity.name}
                    </span>
                    {amenity.description && (
                      <p className="feature-item__desc">{amenity.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="section-head__sub">
              Amenities will be listed soon. Contact our advisor for details.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}