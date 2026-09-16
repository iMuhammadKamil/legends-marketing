import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events hosted by Legends Marketing — investor meetups, webinars, site visits and project launches.",
};

const upcomingEvents = [
  {
    title: "Investor Meetup — Dubai Edition",
    date: "September 5, 2026",
    time: "7:00 PM – 10:00 PM",
    location: "Dubai, UAE",
    slug: "investor-meetup-dubai-edition",
    image: "event-dubai.jpg",
  },
  {
    title: "Virtual Market Update Webinar",
    date: "September 18, 2026",
    time: "8:00 PM – 9:30 PM",
    location: "Online (Zoom)",
    slug: "virtual-market-update-webinar",
    image: "event-webinar.jpg",
  },
  {
    title: "ParkView City Group Site Visit",
    date: "October 3, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "ParkView City, Islamabad",
    slug: "parkview-city-group-site-visit",
    image: "event-sitevisit.jpg",
  },
];

const pastEvents = [
  {
    title: "Capital Smart City Investment Seminar",
    date: "July 20, 2026",
    location: "Islamabad, Pakistan",
    slug: "capital-smart-city-investment-seminar",
    image: "event-seminar.jpg",
  },
  {
    title: "Overseas Pakistani Investor Webinar",
    date: "June 15, 2026",
    location: "Online (Zoom)",
    slug: "overseas-pakistani-investor-webinar",
    image: "event-overseas.jpg",
  },
  {
    title: "Blue World City Launch Event",
    date: "May 8, 2026",
    location: "Rawalpindi, Pakistan",
    slug: "blue-world-city-launch-event",
    image: "event-launch.jpg",
  },
];

export default function EventsListingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Join Us
            </span>
            <h1 className="page-hero__title">Events</h1>
            <p className="page-hero__sub">
              Attend investor meetups, webinars and site visits to connect with
              our team and explore investment opportunities firsthand.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2
            className="section-head__title"
            style={{ marginBottom: "1.5rem" }}
          >
            Upcoming Events
          </h2>
          <SectionGrid columns={3}>
            {upcomingEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/media/events/${event.slug}`}
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
                    src={`/images/media/${event.image}`}
                    alt={event.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <span className="badge badge--gold">Upcoming</span>
                <span className="kicker" style={{ fontSize: "0.75rem" }}>
                  {event.date} · {event.time}
                </span>
                <h3 className="feature-item__title">{event.title}</h3>
                <p className="feature-item__desc">
                  {event.location}
                </p>
                <span className="card-link">
                  Register <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2
            className="section-head__title"
            style={{ marginBottom: "1.5rem" }}
          >
            Past Events
          </h2>
          <SectionGrid columns={3}>
            {pastEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/media/events/${event.slug}`}
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
                    src={`/images/media/${event.image}`}
                    alt={event.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <span className="kicker" style={{ fontSize: "0.75rem" }}>
                  {event.date}
                </span>
                <h3 className="feature-item__title">{event.title}</h3>
                <p className="feature-item__desc">
                  {event.location}
                </p>
                <span className="card-link">
                  View recap <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Container>
          <h2 className="section-head__title">Don&apos;t Miss the Next One</h2>
          <p
            className="section-head__sub"
            style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}
          >
            Get notified about upcoming events, webinars and site visits before
            they fill up.
          </p>
          <Link href="/contact" className="btn btn--emerald">
            Contact Us
          </Link>
        </Container>
      </section>
    </>
  );
}
