import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import Button from "@/components/shared/Button/Button";
import SectionHeader from "@/components/shared/Section/SectionHeader";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { partners } from "@/data/partners";
import { contact } from "@/data/contact";
import "./landing.css";

export const metadata = {
  title: "Legends Marketing | Invest in Pakistan's Premium Real Estate",
  description:
    "Turn your capital into profitable opportunities. Authorized real estate investment consultancy in Islamabad & Rawalpindi. Trusted by 500+ investors.",
};

export default function LandingPage() {
  const featured = getFeaturedProjects();
  const topProject = featured[0];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="landing-hero">
        <div
          className="landing-hero__bg"
          style={{ backgroundImage: "url(/images/hero/main.jpg)" }}
          aria-hidden="true"
        />
        <div className="landing-hero__overlay" aria-hidden="true" />
        <Container>
          <div className="landing-hero__content">
            <span className="landing-hero__kicker fade-up">
              <span className="landing-hero__kicker-dot" aria-hidden="true" />
              Real Estate Investment Consultancy
            </span>
            <h1 className="landing-hero__title fade-up delay-1">
              Turning Properties into <em>Profitable Opportunities</em>
            </h1>
            <p className="landing-hero__desc fade-up delay-2">
              Pakistan&apos;s trusted real estate investment platform. We connect
              local and overseas investors with high-growth property
              opportunities &mdash; backed by transparent, research-led advisory
              from booking to after-sales.
            </p>
            <div className="landing-hero__actions fade-up delay-3">
              <Button href="/projects" variant="gold" size="lg">
                Explore Projects
              </Button>
              <Button href="/contact" variant="light-outline" size="lg">
                Book Free Consultation
              </Button>
            </div>
            <div className="landing-hero__trust fade-up delay-3">
              <div className="landing-hero__trust-item">
                <span className="landing-hero__trust-value">500+</span>
                <span className="landing-hero__trust-label">Investors Served</span>
              </div>
              <div className="landing-hero__trust-item">
                <span className="landing-hero__trust-value">7+</span>
                <span className="landing-hero__trust-label">Authorized Partners</span>
              </div>
              <div className="landing-hero__trust-item">
                <span className="landing-hero__trust-value">RCC</span>
                <span className="landing-hero__trust-label">Registered Firm</span>
              </div>
              <div className="landing-hero__trust-item">
                <span className="landing-hero__trust-value">100%</span>
                <span className="landing-hero__trust-label">Transparent Process</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Floating Stats Panel (Desktop) */}
        <div className="landing-hero__stats-panel" aria-hidden="true">
          <div className="landing-stat-card fade-up delay-2">
            <div className="landing-stat-card__value">50+</div>
            <div className="landing-stat-card__label">Partner Projects</div>
          </div>
          <div className="landing-stat-card fade-up delay-3">
            <div className="landing-stat-card__value">8</div>
            <div className="landing-stat-card__label">Investor Services</div>
          </div>
          <div className="landing-stat-card fade-up delay-3">
            <div className="landing-stat-card__value">24/7</div>
            <div className="landing-stat-card__label">WhatsApp Support</div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="section" style={{ paddingTop: "3rem", paddingBottom: "0" }}>
        <Container>
          <div className="stats-band mp-reveal">
            <div className="stats-band__item">
              <div className="stats-band__value">7+</div>
              <div className="stats-band__label">Authorized Developers</div>
            </div>
            <div className="stats-band__item">
              <div className="stats-band__value">50+</div>
              <div className="stats-band__label">Active Projects</div>
            </div>
            <div className="stats-band__item">
              <div className="stats-band__value">8</div>
              <div className="stats-band__label">Investor Services</div>
            </div>
            <div className="stats-band__item">
              <div className="stats-band__value">100%</div>
              <div className="stats-band__label">RCC Registered</div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section">
        <Container>
          <SectionHeader
            kicker="How It Works"
            title="Your Investment Journey in 4 Steps"
            subtitle="A transparent, guided process from first consultation to profitable returns."
          />
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="process-step mp-reveal">
              <div className="process-step__number">01</div>
              <div className="process-step__content">
                <h3>Free Consultation</h3>
                <p>
                  Book a one-on-one session with our investment advisor. We
                  understand your budget, goals, and timeline to find the
                  perfect match.
                </p>
              </div>
            </div>
            <div className="process-step mp-reveal">
              <div className="process-step__number">02</div>
              <div className="process-step__content">
                <h3>Project Selection</h3>
                <p>
                  Receive a curated shortlist of verified projects with detailed
                  analysis — location, developer track record, payment plans,
                  and growth potential.
                </p>
              </div>
            </div>
            <div className="process-step mp-reveal">
              <div className="process-step__number">03</div>
              <div className="process-step__content">
                <h3>Secure Booking</h3>
                <p>
                  We handle all documentation, verification, and booking
                  formalities. Every transaction is transparent and fully
                  documented.
                </p>
              </div>
            </div>
            <div className="process-step mp-reveal">
              <div className="process-step__number">04</div>
              <div className="process-step__content">
                <h3>Ongoing Support</h3>
                <p>
                  From development updates to resale assistance — your dedicated
                  advisor stays with you throughout the investment lifecycle.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section section--alt">
        <Container>
          <SectionHeader
            kicker="Featured Projects"
            title="Handpicked Investment Opportunities"
            subtitle="Authorized partnerships with Pakistan's most trusted developers."
          />
          {topProject && (
            <div className="project-highlight mp-reveal">
              <div className="project-highlight__image">
                <img
                  src={topProject.coverImage || topProject.masterPlan.imageUrl}
                  alt={topProject.name}
                  width={800}
                  height={600}
                />
                <span className="project-highlight__badge">
                  {topProject.status === "active" ? "Active" : topProject.status}
                </span>
              </div>
              <div className="project-highlight__info">
                <span className="project-highlight__tag">
                  {topProject.category}
                </span>
                <h3 className="project-highlight__name">{topProject.name}</h3>
                <div className="project-highlight__location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {topProject.location.area}, {topProject.location.city}
                </div>
                <p className="project-highlight__desc">
                  {topProject.overview?.description?.substring(0, 200) + "..."}
                </p>
                <div className="project-highlight__features">
                  {topProject.overview?.highlights?.slice(0, 4).map((h) => (
                    <span key={h} className="project-highlight__feature">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </span>
                  ))}
                </div>
                <div className="project-highlight__actions">
                  <Button href={`/projects/${topProject.slug}`} variant="gold">
                    View Project Details
                  </Button>
                  <Button href="/contact" variant="outline">
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Other Projects */}
          {featured.length > 1 && (
            <div style={{ marginTop: "3rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.2rem",
                }}
              >
                {featured.slice(1, 4).map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                      <img
                        src={project.coverImage || project.masterPlan.imageUrl}
                        alt={project.name}
                        width={600}
                        height={400}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "1.2rem 1.5rem" }}>
                      <h3 style={{ fontSize: "1.1rem", marginBottom: "0.3rem", color: "var(--cream)" }}>
                        {project.name}
                      </h3>
                      <p style={{ fontSize: "0.85rem", color: "var(--slate)" }}>
                        {project.location.area}, {project.location.city}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Button href="/projects" variant="outline" size="lg">
                  View All Projects <span aria-hidden="true">&rarr;</span>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ===== WHY INVEST ===== */}
      <section className="section">
        <Container>
          <SectionHeader
            kicker="Why Legends"
            title="Why 500+ Investors Trust Us"
            subtitle="We don't sell properties — we build investment strategies."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: "Research-Led Advisory",
                desc: "Every recommendation is backed by transparent market research — never hype or inflated claims.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                ),
                title: "Authorized Partnerships",
                desc: "Official sales partner of ParkView City, Blue World City, Hashoo Group and other leading developers.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Dedicated Advisor",
                desc: "One advisor per client — from first consultation through booking, documentation and after-sales.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                title: "Overseas Ready",
                desc: "Complete remote investment support for overseas Pakistanis — from booking to power of attorney.",
              },
            ].map((item) => (
              <div key={item.title} className="feature-item mp-reveal">
                <div className="feature-item__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="feature-item__title">{item.title}</h3>
                  <p className="feature-item__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section section--alt">
        <Container>
          <SectionHeader
            kicker="Our Services"
            title="Complete Investor Support"
            subtitle="8 specialized services designed to protect and grow your real estate investment."
          />
          <div className="services-grid">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="service-pill mp-reveal"
                style={{ textDecoration: "none" }}
              >
                <div className="service-pill__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="service-pill__title">{service.name}</span>
                <span className="service-pill__desc">{service.shortDescription}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Button href="/investor-services" variant="outline" size="lg">
              Explore All Services <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== OVERSEAS PAKISTANIS ===== */}
      <section className="section">
        <Container>
          <div className="overseas-banner mp-reveal">
            <div className="overseas-banner__content">
              <span className="overseas-banner__kicker">For Overseas Pakistanis</span>
              <h2 className="overseas-banner__title">
                Invest in Pakistan from Anywhere in the World
              </h2>
              <p className="overseas-banner__desc">
                We specialize in helping overseas Pakistanis invest in real estate
                back home — with complete remote support from booking to possession.
              </p>
              <div className="overseas-banner__list">
                {[
                  "Remote booking & documentation",
                  "Power of attorney guidance",
                  "Secure payment methods",
                  "Regular development updates",
                  "Dedicated overseas advisor",
                ].map((item) => (
                  <div key={item} className="overseas-banner__list-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Button href="/overseas-pakistanis" variant="gold">
                  Overseas Investment Guide
                </Button>
              </div>
            </div>
            <div className="overseas-banner__visual">
              <div className="overseas-globe">
                <span className="overseas-globe__icon" aria-hidden="true">
                  &#127758;
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section--alt">
        <Container>
          <SectionHeader
            kicker="Client Trust"
            title="Built on Trust, Not Promises"
            subtitle="We believe client trust is earned. Here's what our investors say about working with Legends Marketing."
          />
          <div className="testimonial-showcase">
            {[
              {
                initials: "AK",
                name: "Ahmed Khan",
                role: "Investor, Bahria Town",
                quote:
                  "Legends Marketing provided exceptional guidance for my first real estate investment. The process was completely transparent and professional.",
              },
              {
                initials: "SR",
                name: "Sarah Rahman",
                role: "Overseas Investor, Dubai",
                quote:
                  "As an overseas Pakistani, I was worried about investing back home. Legends made the entire process remote-friendly and hassle-free.",
              },
              {
                initials: "MH",
                name: "Muhammad Hassan",
                role: "Property Investor, Islamabad",
                quote:
                  "Their market research and project selection advice helped me make a profitable investment decision. Highly recommended for serious investors.",
              },
            ].map((t) => (
              <div key={t.name} className="testimonial-card-lg mp-reveal">
                <div className="testimonial-card-lg__stars" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="testimonial-card-lg__quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="testimonial-card-lg__author">
                  <div className="testimonial-card-lg__avatar">
                    {t.initials}
                  </div>
                  <div>
                    <div className="testimonial-card-lg__name">{t.name}</div>
                    <div className="testimonial-card-lg__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="section">
        <Container>
          <SectionHeader
            kicker="Trusted Partnerships"
            title="Authorized Developer Partners"
            subtitle="Official sales and marketing partnerships with Pakistan's leading real estate developers."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {partners.map((partner) => (
              <div key={partner.id} className="card partner-card mp-reveal">
                <span className="partner-card__monogram" aria-hidden="true">
                  {partner.name
                    .split(" ")
                    .filter((w) => w.length > 2)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </span>
                <h3 className="partner-card__name">{partner.name}</h3>
                <span className="partner-card__cat">{partner.category}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== INVESTMENT TOOLS ===== */}
      <section className="section section--alt">
        <Container>
          <SectionHeader
            kicker="Investment Tools"
            title="Smart Tools for Smart Investors"
            subtitle="Free calculators and tools to help you make informed investment decisions."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {[
              {
                title: "ROI Calculator",
                desc: "Calculate potential returns on your investment",
                href: "/investment-tools/roi-calculator",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="12" y2="14" />
                  </svg>
                ),
              },
              {
                title: "Installment Calculator",
                desc: "Plan your monthly installment payments",
                href: "/investment-tools/installment-calculator",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                ),
              },
              {
                title: "Budget Calculator",
                desc: "Find projects that match your budget",
                href: "/investment-tools/budget-calculator",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
              {
                title: "Project Comparison",
                desc: "Compare projects side by side",
                href: "/investment-tools/project-comparison",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                ),
              },
            ].map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="card mp-reveal"
                style={{
                  padding: "2rem 1.5rem",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(212, 177, 114, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold)",
                  }}
                >
                  {tool.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", color: "var(--cream)" }}>{tool.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--slate)", margin: 0 }}>{tool.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button href="/investment-tools" variant="outline" size="lg">
              View All Tools <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section landing-cta">
        <Container>
          <div className="landing-cta__inner mp-reveal">
            <span className="landing-cta__kicker">Ready to Invest?</span>
            <h2 className="landing-cta__title">
              Start Your Investment Journey Today
            </h2>
            <p className="landing-cta__desc">
              Speak with a certified investment advisor and discover the right
              opportunity for your goals — with complete transparency and
              dedicated support.
            </p>
            <div className="landing-cta__actions">
              <Button href="/contact" variant="gold" size="lg">
                Book Free Consultation
              </Button>
              <Button href="https://wa.me/923231235444" variant="light-outline" size="lg">
                Chat on WhatsApp
              </Button>
            </div>
            <div className="landing-cta__contact">
              <div className="landing-cta__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                </svg>
                {contact.phone}
              </div>
              <div className="landing-cta__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {contact.email}
              </div>
              <div className="landing-cta__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {contact.officeAddress}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
