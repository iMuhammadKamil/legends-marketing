import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;
  const imageSrc = project.coverImage || project.masterPlan.imageUrl;

  return (
    <Link href={href} className="project-card" aria-label={`View details for ${project.name}`}>
      <img
        src={imageSrc}
        alt={project.name}
        loading="lazy"
        width={800}
        height={1000}
        className="project-card__img"
      />
      <div className="project-card__overlay" aria-hidden="true" />
      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {project.location.area}, {project.location.city}
        </p>
      </div>
    </Link>
  );
}
