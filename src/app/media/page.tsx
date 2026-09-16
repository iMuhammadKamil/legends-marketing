import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Legends Marketing media center - news, blog, videos, project gallery, events and press releases.",
};

const categories = [
  {
    title: "News",
    desc: "Latest announcements from Legends Marketing.",
    href: "/media/news",
  },
  {
    title: "Blog",
    desc: "Articles on investing, projects and the market.",
    href: "/media/blog",
  },
  {
    title: "Videos",
    desc: "Project walkthroughs and expert discussions.",
    href: "/media/videos",
  },
  {
    title: "Project Gallery",
    desc: "Visual updates from the projects we represent.",
    href: "/media/gallery",
  },
  {
    title: "Events",
    desc: "Webinars, site visits and investor sessions.",
    href: "/media/events",
  },
  {
    title: "Press & PR",
    desc: "Official statements and media coverage.",
    href: "/media/press",
  },
];

export default function MediaPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Media Center
            </span>
            <h1 className="page-hero__title">Media &amp; Updates</h1>
            <p className="page-hero__sub">
              News, blog, videos, project galleries, events and press coverage
              — all in one place.
            </p>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="card feature-item"
                style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}
              >
                <h3 className="feature-item__title">{category.title}</h3>
                <p className="feature-item__desc">{category.desc}</p>
                <span className="card-link">
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>
    </>
  );
}