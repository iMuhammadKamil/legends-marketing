import Image from "@/components/shared/Image/Image";
import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectMasterPlanProps {
  project: Project;
}

export default function ProjectMasterPlan({ project }: ProjectMasterPlanProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Master Plan</h2>
          <p>{project.masterPlan.description}</p>
          <div className="project-masterplan-card">
            <Image
              src={project.masterPlan.imageUrl}
              alt={`${project.name} master plan`}
              width={1200}
              height={800}
              className="project-masterplan-img"
              style={{ width: "100%", height: 480, objectFit: "cover" } as React.CSSProperties}
            />
          </div>
          <p className="form__note">
            Total plots: {project.masterPlan.totalPlots.toLocaleString()}. For
            the latest block-wise availability, contact our investment advisor.
          </p>
        </div>
      </Container>
    </section>
  );
}