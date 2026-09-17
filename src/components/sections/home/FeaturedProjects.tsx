"use client";

import { useRef } from "react";
import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/Section/SectionHeader";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import { ScrollReveal, StaggerReveal } from "@/components/shared/ScrollReveal/ScrollRevealComponents";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section">
      <Container>
        <ScrollReveal>
          <SectionHeader
            kicker="Our Portfolio"
            title="Featured Investment Projects"
            subtitle="Authorized sales and marketing partnerships with leading developers across Pakistan."
          />
        </ScrollReveal>
        <StaggerReveal
          childSelector=".project-card"
          stagger={0.12}
          start="top 80%"
        >
          <div
            ref={gridRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </StaggerReveal>
        <ScrollReveal delay={0.4}>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Button href="/projects" variant="outline" size="lg">
              View All Projects <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
