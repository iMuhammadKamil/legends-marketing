import Container from "@/components/shared/Container/Container";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section className="section">
      <Container>
        <SectionGrid columns={3}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SectionGrid>
      </Container>
    </section>
  );
}