import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/Section/SectionHeader";
import SectionGrid from "@/components/shared/Section/SectionGrid";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();
  return (
    <section className="section">
      <Container>
        <SectionHeader
          kicker="Our Portfolio"
          title="Featured Investment Projects"
          subtitle="Authorized sales and marketing partnerships with leading developers across Pakistan."
        />
        <SectionGrid columns={3}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SectionGrid>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Button href="/projects" variant="outline" size="lg">
            View All Projects <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}