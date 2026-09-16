import Container from "@/components/shared/Container/Container";
import type { Service } from "@/types/service";

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <section className="service-details">
      <Container>
        <h2>About this Service</h2>
        <p>{service.description}</p>
        <ul>
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}