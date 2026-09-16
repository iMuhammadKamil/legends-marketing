import Link from "next/link";
import { projects } from "@/data/projects";

export default function Sidebar() {
  return (
    <aside className="project-sidebar">
      <Link href="/projects" className="project-sidebar__back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        All Projects
      </Link>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}