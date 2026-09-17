"use client";

import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/Section/SectionHeader";
import { ScrollReveal, StaggerReveal } from "@/components/shared/ScrollReveal/ScrollRevealComponents";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section">
      <Container>
        <ScrollReveal>
          <SectionHeader
            kicker="Client Stories"
            title="What Investors Say"
            subtitle="Real experiences from investors who found their opportunity with Legends Marketing."
          />
        </ScrollReveal>
        {testimonials.length === 0 ? (
          <ScrollReveal delay={0.2}>
            <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
              <p className="section-head__sub">
                We believe client trust is earned, not manufactured. As our
                investors complete their journeys, their stories will be featured
                here with full permission.
              </p>
              <div style={{ marginTop: "1.8rem" }}>
                <Button href="/contact" variant="gold">
                  Share Your Experience
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <StaggerReveal
            childSelector=".testimonial-card"
            stagger={0.12}
            start="top 80%"
          >
            <div className="grid-3">
              {testimonials.map((t) => (
                <figure key={t.id} className="card testimonial-card">
                  <blockquote className="testimonial-card__quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="testimonial-card__footer">
                    <span className="testimonial-card__name">{t.name}</span>
                    <br />
                    <span className="testimonial-card__role">
                      {t.role}, {t.location}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </StaggerReveal>
        )}
      </Container>
    </section>
  );
}
