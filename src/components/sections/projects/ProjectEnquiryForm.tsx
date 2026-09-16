import EnquiryForm from "@/components/forms/EnquiryForm";
import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectEnquiryFormProps {
  project: Project;
}

export default function ProjectEnquiryForm({
  project,
}: ProjectEnquiryFormProps) {
  return (
    <section className="project-enquiry">
      <Container>
        <h2>Booking / Enquiry</h2>
        <EnquiryForm projectSlug={project.slug} />
      </Container>
    </section>
  );
}