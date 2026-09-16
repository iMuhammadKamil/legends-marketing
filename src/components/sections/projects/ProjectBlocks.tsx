import Badge from "@/components/shared/Badge/Badge";
import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectBlocksProps {
  project: Project;
}

export default function ProjectBlocks({ project }: ProjectBlocksProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Blocks &amp; Sectors</h2>
          <div className="grid-3" style={{ gap: "1.2rem", marginTop: "1.2rem" }}>
            {project.blocks.map((block) => (
              <div key={block.id} className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <h3>{block.name}</h3>
                  <Badge variant="gold">{block.status.replace("-", " ")}</Badge>
                </div>
                <p className="feature-item__desc">
                  Plot Sizes: {block.plotSizes.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}