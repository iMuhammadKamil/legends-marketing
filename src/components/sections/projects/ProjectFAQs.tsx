import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectFAQsProps {
  project: Project;
}

export default function ProjectFAQs({ project }: ProjectFAQsProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Frequently Asked Questions</h2>
          {project.faqs.length > 0 ? (
            <div className="grid-2" style={{ gap: "1rem", marginTop: "1.2rem" }}>
              {project.faqs.map((faq) => (
                <div key={faq.id} className="card" style={{ padding: "1.4rem 1.5rem" }}>
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>{faq.question}</h3>
                  <p className="feature-item__desc">{faq.answer}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="section-head__sub">
              Frequently asked questions will be added soon. Ask our advisor
              directly via WhatsApp or phone.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}