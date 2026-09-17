import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Media News",
  description:
    "Latest announcements, project updates and industry coverage from Legends Marketing , your source for real estate news in Islamabad and Rawalpindi.",
};

const articles = [
  {
    title: "Legends Marketing Expands Partnership with ParkView City",
    excerpt:
      "We are pleased to announce an expanded marketing partnership covering additional blocks and commercial plots in ParkView City, Islamabad.",
    date: "August 12, 2026",
    slug: "legends-marketing-expands-partnership-parkview-city",
    image: "news-parkview.jpg",
  },
  {
    title: "Blue World City Launches New Overseas Block",
    excerpt:
      "A dedicated overseas block has been launched with flexible payment plans and world-class amenities for overseas Pakistani investors.",
    date: "July 28, 2026",
    slug: "blue-world-city-launches-new-overseas-block",
    image: "news-blueworld.jpg",
  },
  {
    title: "Capital Smart City Opens Commercial Balloting Results",
    excerpt:
      "The latest commercial balloting results for Capital Smart City have been announced, with strong demand from investors across Pakistan.",
    date: "July 15, 2026",
    slug: "capital-smart-city-commercial-balloting-results",
    image: "news-capital.jpg",
  },
  {
    title: "Faisal Town Phase 2 Development Update",
    excerpt:
      "Road infrastructure and utility work in Faisal Town Phase 2 is progressing ahead of schedule, with possession expected in the coming quarters.",
    date: "June 30, 2026",
    slug: "faisal-town-phase-2-development-update",
    image: "news-faisal.jpg",
  },
  {
    title: "Legends Marketing Hosts Investor Meetup in Dubai",
    excerpt:
      "Over 150 overseas Pakistani investors attended our Dubai meetup to learn about upcoming investment opportunities in Islamabad.",
    date: "June 10, 2026",
    slug: "legends-marketing-hosts-investor-meetup-dubai",
    image: "news-dubai.jpg",
  },
  {
    title: "Saffron City Introduces New Installment Plan",
    excerpt:
      "Saffron City has introduced a 4-year installment plan making it one of the most accessible investment options in the region.",
    date: "May 22, 2026",
    slug: "saffron-city-introduces-new-installment-plan",
    image: "news-saffron.jpg",
  },
];

export default function MediaNewsListingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Media Center
            </span>
            <h1 className="page-hero__title">News &amp; Announcements</h1>
            <p className="page-hero__sub">
              Stay up to date with the latest project launches, partnership
              announcements, and market developments from Legends Marketing.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/media/news/${article.slug}`}
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
                    src={`/images/media/${article.image}`}
                    alt={article.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <span className="kicker" style={{ fontSize: "0.75rem" }}>
                  {article.date}
                </span>
                <h3 className="feature-item__title">{article.title}</h3>
                <p className="feature-item__desc">{article.excerpt}</p>
                <span className="card-link">
                  Read more <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Container>
          <h2 className="section-head__title">Have a Tip?</h2>
          <p
            className="section-head__sub"
            style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}
          >
            If you have news or a story related to Islamabad and Rawalpindi real
            estate, we would love to hear from you.
          </p>
          <Link href="/contact" className="btn btn--emerald">
            Contact Us
          </Link>
        </Container>
      </section>
    </>
  );
}
