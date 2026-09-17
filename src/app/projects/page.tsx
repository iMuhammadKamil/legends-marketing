import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import ProjectGrid from "@/components/sections/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our real estate projects in Islamabad, Rawalpindi and Pakistan - ParkView City, Blue World City, Hashoo Real Estate, Faisal Town and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Our Portfolio
            </span>
            <h1 className="page-hero__title">Investment Projects</h1>
            <p className="page-hero__sub">
              Explore the projects we are authorized to market and sell , each
              with transparent details, master plans and dedicated advisor
              support.
            </p>
          </div>
        </Container>
      </section>
      <ProjectGrid />
    </>
  );
}