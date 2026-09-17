import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Property walkthroughs, project updates, expert discussions and market analysis videos from Legends Marketing.",
};

const videos = [
  {
    title: "ParkView City Complete Walkthrough 2026",
    duration: "12:34",
    category: "Project Tour",
    slug: "parkview-city-complete-walkthrough-2026",
    thumbnail: "video-parkview.jpg",
  },
  {
    title: "Blue World City Overseas Block , What You Need to Know",
    duration: "8:45",
    category: "Project Update",
    slug: "blue-world-city-overseas-block",
    thumbnail: "video-blueworld.jpg",
  },
  {
    title: "Capital Smart City Investment Analysis",
    duration: "15:20",
    category: "Market Analysis",
    slug: "capital-smart-city-investment-analysis",
    thumbnail: "video-capital.jpg",
  },
  {
    title: "How to Buy Property Remotely from Abroad",
    duration: "10:15",
    category: "Guide",
    slug: "how-to-buy-property-remotely-from-abroad",
    thumbnail: "video-remote.jpg",
  },
  {
    title: "Faisal Town Phase 2 Site Visit",
    duration: "9:50",
    category: "Site Visit",
    slug: "faisal-town-phase-2-site-visit",
    thumbnail: "video-faisal.jpg",
  },
  {
    title: "Investor Q&A , Your Questions Answered",
    duration: "18:30",
    category: "Discussion",
    slug: "investor-qa-your-questions-answered",
    thumbnail: "video-qa.jpg",
  },
];

export default function VideosListingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Video Content
            </span>
            <h1 className="page-hero__title">Videos</h1>
            <p className="page-hero__sub">
              Watch project walkthroughs, site visits, market analysis and expert
              discussions to make informed investment decisions.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {videos.map((video) => (
              <Link
                key={video.slug}
                href={`/media/videos/${video.slug}`}
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
                    position: "relative",
                  }}
                >
                  <img
                    src={`/images/media/${video.thumbnail}`}
                    alt={video.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "2.5rem",
                      color: "#fff",
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ▶
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0.5rem",
                      right: "0.5rem",
                      background: "rgba(0,0,0,0.7)",
                      color: "#fff",
                      padding: "0.15rem 0.4rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.7rem",
                    }}
                  >
                    {video.duration}
                  </span>
                </div>
                <span className="badge">{video.category}</span>
                <h3 className="feature-item__title">{video.title}</h3>
                <span className="card-link">
                  Watch video <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Container>
          <h2 className="section-head__title">Want a Personal Walkthrough?</h2>
          <p
            className="section-head__sub"
            style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}
          >
            Book a one-on-one virtual or in-person walkthrough with one of our
            advisors to see projects before you invest.
          </p>
          <Link href="/contact" className="btn btn--emerald">
            Book a Walkthrough
          </Link>
        </Container>
      </section>
    </>
  );
}
