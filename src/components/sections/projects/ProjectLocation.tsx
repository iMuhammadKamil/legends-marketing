import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectLocationProps {
  project: Project;
}

export default function ProjectLocation({ project }: ProjectLocationProps) {
  const { location } = project;
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Location</h2>
          <p>{location.address}</p>
          {location.nearby.length > 0 && (
            <ul className="grid-3" style={{ gap: "0.8rem", margin: "1.2rem 0" }}>
              {location.nearby.map((place) => (
                <li key={`${place.name}-${place.distance}`} className="feature-item" style={{ alignItems: "center" }}>
                  <span className="feature-item__icon" aria-hidden="true">
                    &#128205;
                  </span>
                  <span style={{ fontWeight: 600 }}>
                    {place.name}
                    <span className="feature-item__desc"> , {place.distance}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            View on Google Maps <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </Container>
    </section>
  );
}