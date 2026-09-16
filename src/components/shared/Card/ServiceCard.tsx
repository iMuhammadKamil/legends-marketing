import Link from "next/link";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="card service-card">
      <div className="service-card__icon" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="service-card__title">{service.name}</h3>
      <p className="service-card__desc">{service.shortDescription}</p>
      <Link href={service.href} className="card-link">
        Learn more <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}