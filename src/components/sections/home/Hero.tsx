import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import AnimatedCounter from "@/components/shared/AnimatedCounter/AnimatedCounter";
import { projects } from "@/data/projects";
import { partners } from "@/data/partners";
import { services } from "@/data/services";
import { contact } from "@/data/contact";

export default function Hero() {
  const projectCount = projects.length;
  const partnerCount = partners.length;
  const serviceCount = services.length;

  return (
    <section className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: "url(/images/hero/main.jpg)" }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <Container>
        <div className="hero__content">
          <span className="hero__kicker fade-up">Real Estate Investment Consultancy</span>
          <h1 className="hero__title fade-up delay-1">
            Turning Properties into <em>Profitable Opportunities</em>
          </h1>
          <p className="hero__lead fade-up delay-2">
            {contact.company} connects investors with Pakistan&rsquo;s most
            promising real estate projects &mdash; with transparent,
            research-led advisory from booking to after-sales.
          </p>
          <div className="hero__cta fade-up delay-3">
            <Button href="/projects" variant="gold" size="lg">
              Explore Projects
            </Button>
            <Button
              href="/contact"
              variant="light-outline"
              size="lg"
            >
              Book a Consultation
            </Button>
          </div>
          <div className="hero-stats">
            <AnimatedCounter
              end={50}
              suffix="+"
              label="Partner Projects"
            />
            <AnimatedCounter
              end={7}
              suffix="+"
              label="Authorized Partners"
            />
            <AnimatedCounter
              end={serviceCount}
              label="Investor Services"
            />
            <div>
              <div className="hero-stat__value">RCC</div>
              <div className="hero-stat__label">Registered Firm</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
