import Container from "@/components/shared/Container/Container";
import { contact } from "@/data/contact";

export default function OurStory() {
  return (
    <section id="our-story" className="section">
      <Container>
        <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
          <div>
            <span className="kicker">Who We Are</span>
            <h2>Turning Properties into Profitable Opportunities</h2>
            <p>
              {contact.company} was founded on a simple belief: property
              investment should be transparent, structured, and accessible. Too
              many investors were being pushed into decisions by hype and
              inflated claims — we chose a different path.
            </p>
            <p>
              We connect investors — locally and overseas — with Pakistan&apos;s
              most promising real estate projects through authorized
              partnerships with leading developers. Every recommendation is
              grounded in research, not rumours.
            </p>
            <p>
              Today we serve investors from our office in Rawalpindi, and we are
              proud to be {contact.registration.toLowerCase()}.
            </p>
          </div>
          <div
            className="card"
            style={{
              aspectRatio: "4 / 3",
              background:
                "linear-gradient(135deg, var(--emerald-800), var(--emerald-950))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "center",
              color: "var(--white)",
            }}
          >
            <span
              style={{ fontSize: "3rem", color: "var(--gold-light)" }}
              aria-hidden="true"
            >
              LM
            </span>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                color: "var(--white)",
                padding: "0 1.5rem",
              }}
            >
              {contact.tagline}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}