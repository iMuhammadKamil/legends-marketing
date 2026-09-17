import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Photo galleries of our featured real estate projects , progress updates, site photos, master plans and community events.",
};

const albums = [
  {
    title: "ParkView City , Aerial Views",
    count: 24,
    slug: "parkview-city-aerial-views",
    image: "gallery-parkview.jpg",
  },
  {
    title: "Blue World City , Construction Progress",
    count: 18,
    slug: "blue-world-city-construction-progress",
    image: "gallery-blueworld.jpg",
  },
  {
    title: "Capital Smart City , Master Plan Walkthrough",
    count: 12,
    slug: "capital-smart-city-master-plan-walkthrough",
    image: "gallery-capital.jpg",
  },
  {
    title: "Faisal Town Phase 2 , Site Photos",
    count: 15,
    slug: "faisal-town-phase-2-site-photos",
    image: "gallery-faisal.jpg",
  },
  {
    title: "Saffron City , Community Event",
    count: 20,
    slug: "saffron-city-community-event",
    image: "gallery-saffron.jpg",
  },
  {
    title: "Premier Choice , Commercial Development",
    count: 10,
    slug: "premier-choice-commercial-development",
    image: "gallery-premier.jpg",
  },
];

export default function GalleryListingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Visual Portfolio
            </span>
            <h1 className="page-hero__title">Project Gallery</h1>
            <p className="page-hero__sub">
              Browse photo albums from our featured projects , construction
              updates, aerial views, master plans and event highlights.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {albums.map((album) => (
              <Link
                key={album.slug}
                href={`/media/gallery/${album.slug}`}
                className="card feature-item"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/images/media/${album.image}`}
                    alt={album.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <h3 className="feature-item__title">{album.title}</h3>
                <p className="feature-item__desc">
                  {album.count} photos
                </p>
                <span className="card-link">
                  View album <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Container>
          <h2 className="section-head__title">Visit Our Projects</h2>
          <p
            className="section-head__sub"
            style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}
          >
            Nothing beats seeing a project in person. Arrange a site visit with
            our team to experience the developments firsthand.
          </p>
          <Link href="/contact" className="btn btn--emerald">
            Arrange a Site Visit
          </Link>
        </Container>
      </section>
    </>
  );
}
