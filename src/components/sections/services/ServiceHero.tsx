import Container from "@/components/shared/Container/Container";
import type { Service } from "@/types/service";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="service-hero">
      <Container>
        <h1>{service.name}</h1>
        <p>{service.shortDescription}</p>
      </Container>
    </section>
  );
}