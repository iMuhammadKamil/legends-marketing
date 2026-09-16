import Button from "@/components/shared/Button/Button";
import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const bgImage = project.coverImage || project.masterPlan.imageUrl;
  return (
    <section className="project-hero">
      {/* Full-bleed background image */}
      <div
        className="project-hero__media"
        aria-hidden="true"
      >
        <img
          src={bgImage}
          alt=""
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>

      {/* Gradient overlay for text legibility */}
      <div className="project-hero__overlay" aria-hidden="true" />

      {/* Content overlay */}
      <div className="project-hero__content">
        <div className="container">
          <div className="project-hero__badge">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              {project.category} &middot; {project.location.city}
            </span>
          </div>
          <h1 className="project-hero__title">{project.name}</h1>
          <p className="project-hero__tagline">{project.tagline}</p>

          <div className="project-hero__actions">
            <Button href="/contact" variant="gold" size="lg">
              Get Payment Plan
            </Button>
            <Button
              href={`tel:${project.advisor.phone}`}
              variant="light-outline"
              size="lg"
            >
              Talk to an Advisor
            </Button>
          </div>

          <div className="project-hero__meta">
            <div className="project-meta">
              <div className="project-meta__label">Location</div>
              <div className="project-meta__value">
                {project.location.area}, {project.location.city}
              </div>
            </div>
            <div className="project-meta">
              <div className="project-meta__label">Total Area</div>
              <div className="project-meta__value">
                {project.overview.totalArea}
              </div>
            </div>
            <div className="project-meta">
              <div className="project-meta__label">Plot Sizes</div>
              <div className="project-meta__value">
                {project.overview.plotSizes.join(", ")}
              </div>
            </div>
            <div className="project-meta">
              <div className="project-meta__label">Possession</div>
              <div className="project-meta__value">
                {project.overview.possessionStatus}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="project-hero__scroll" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="sr-only">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}