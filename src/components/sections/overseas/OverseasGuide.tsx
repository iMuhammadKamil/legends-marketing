import Link from "next/link";
import Container from "@/components/shared/Container/Container";

const links = [
  { label: "Why Invest in Pakistan", href: "/overseas-pakistanis/why-invest" },
  { label: "Overseas Investment Guide", href: "/overseas-pakistanis/investment-guide" },
  { label: "Documentation", href: "/overseas-pakistanis/documentation" },
  { label: "Remote Booking Process", href: "/overseas-pakistanis/remote-booking" },
  { label: "Payment Methods", href: "/overseas-pakistanis/payment-methods" },
  { label: "Power of Attorney Guide", href: "/overseas-pakistanis/power-of-attorney" },
];

export default function OverseasGuide() {
  return (
    <section className="overseas-guide">
      <Container>
        <h2>How to Invest Remotely</h2>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}