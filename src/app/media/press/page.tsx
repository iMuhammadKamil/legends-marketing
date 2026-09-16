import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Press & PR",
  description:
    "Official press releases, media coverage and public statements from Legends Marketing — your trusted real estate marketing partner.",
};

const releases = [
  {
    title:
      "Legends Marketing Becomes Authorized Partner for ParkView City Expansion",
    date: "August 1, 2026",
    summary:
      "Legends Marketing has been appointed as an authorized marketing and sales partner for the expanded ParkView City development in Islamabad.",
    slug: "legends-marketing-authorized-partner-parkview-city-expansion",
    image: "press-partner.jpg",
  },
  {
    title:
      "Record-Breaking Month: Legends Marketing Facilitates PKR 500M+ in Sales",
    date: "July 15, 2026",
    summary:
      "In a landmark achievement, Legends Marketing facilitated over PKR 500 million in property transactions in a single month across multiple projects.",
    slug: "record-breaking-month-legends-marketing-500m-sales",
    image: "press-record.jpg",
  },
  {
    title:
      "Legends Marketing Partners with Capital Smart City for Exclusive Marketing Rights",
    date: "June 20, 2026",
    summary:
      "A new strategic partnership gives Legends Marketing exclusive marketing rights for select sectors within Capital Smart City.",
    slug: "legends-marketing-capital-smart-city-exclusive-rights",
    image: "press-exclusive.jpg",
  },
  {
    title: "Legends Marketing Launches Overseas Investor Support Program",
    date: "May 28, 2026",
    summary:
      "A new end-to-end support program for overseas Pakistanis includes remote booking, power of attorney assistance and virtual site visits.",
    slug: "legends-marketing-launches-overseas-investor-support",
    image: "press-overseas.jpg",
  },
  {
    title:
      "Legends Marketing Featured in Dawn Business as Top Emerging Real Estate Firm",
    date: "April 30, 2026",
    summary:
      "Dawn Business highlighted Legends Marketing as one of the fastest-growing real estate marketing firms in the Islamabad-Rawalpindi corridor.",
    slug: "legends-marketing-featured-dawn-business",
    image: "press-featured.jpg",
  },
];

export default function PressListingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Official Statements
            </span>
            <h1 className="page-hero__title">Press &amp; PR</h1>
            <p className="page-hero__sub">
              Official press releases, partnership announcements and media
              coverage featuring Legends Marketing.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {releases.map((release) => (
              <Link
                key={release.slug}
                href={`/media/press/${release.slug}`}
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
                    aspectRatio: "16/9",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/images/media/${release.image}`}
                    alt={release.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <span className="kicker" style={{ fontSize: "0.75rem" }}>
                  {release.date}
                </span>
                <h3 className="feature-item__title">{release.title}</h3>
                <p className="feature-item__desc">{release.summary}</p>
                <span className="card-link">
                  Read full release <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Container>
          <h2 className="section-head__title">Media Enquiries</h2>
          <p
            className="section-head__sub"
            style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}
          >
            For press inquiries, interviews or media partnerships, please reach
            out to our communications team.
          </p>
          <Link href="/contact" className="btn btn--emerald">
            Contact Media Relations
          </Link>
        </Container>
      </section>
    </>
  );
}
