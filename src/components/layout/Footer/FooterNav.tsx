import Link from "next/link";
import { contact } from "@/data/contact";
import { footerNavItems } from "@/data/navigation";
import { services } from "@/data/services";

export default function FooterNav() {
  return (
    <div className="site-footer__col">
      <h4>Quick Links</h4>
      <nav aria-label="Footer quick links">
        {footerNavItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <h4 style={{ marginTop: "1.6rem" }}>Investor Services</h4>
      <nav aria-label="Footer services">
        {services.map((service) => (
          <Link key={service.slug} href={`/investor-services/${service.slug}`}>
            {service.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}