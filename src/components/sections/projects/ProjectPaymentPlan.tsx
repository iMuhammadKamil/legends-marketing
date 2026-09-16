import Container from "@/components/shared/Container/Container";
import type { Project } from "@/types/project";

interface ProjectPaymentPlanProps {
  project: Project;
}

export default function ProjectPaymentPlan({ project }: ProjectPaymentPlanProps) {
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Payment Plans</h2>
          <p>{project.paymentPlan.description}</p>
          <div className="grid-3" style={{ gap: "1.2rem", margin: "1.5rem 0" }}>
            {project.paymentPlan.plans.map((plan) => (
              <div key={plan.id} className="card" style={{ padding: "1.6rem" }}>
                <span className="badge badge--gold">{plan.name}</span>
                <h3 style={{ margin: "0.8rem 0 0.4rem" }}>{plan.duration}</h3>
                <p className="feature-item__desc">Down Payment: {plan.downPayment}</p>
                <p className="feature-item__desc">Installments: {plan.installments}</p>
                {plan.balloonPayment && (
                  <p className="feature-item__desc">Balloon: {plan.balloonPayment}</p>
                )}
                {plan.details.length > 0 && (
                  <ul style={{ marginTop: "0.8rem" }}>
                    {plan.details.map((detail) => (
                      <li
                        key={detail}
                        className="feature-item__desc"
                        style={{ padding: "0.25rem 0" }}
                      >
                        &bull; {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {project.paymentPlan.notes.length > 0 && (
            <p className="tool-disclaimer">{project.paymentPlan.notes.join(" ")}</p>
          )}
        </div>
      </Container>
    </section>
  );
}