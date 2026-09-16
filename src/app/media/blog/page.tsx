import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import SectionGrid from "@/components/shared/Section/SectionGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights, investment tips, market analysis and guides for real estate investors in Islamabad, Rawalpindi and across Pakistan.",
};

const posts = [
  {
    title: "How to Evaluate a Real Estate Investment in Pakistan",
    excerpt:
      "A practical framework for assessing location, developer track record, payment plans and resale potential before committing capital.",
    date: "August 8, 2026",
    tag: "Investing",
    slug: "how-to-evaluate-real-estate-investment-pakistan",
    image: "blog-evaluate.jpg",
  },
  {
    title: "5 Mistakes Overseas Pakistanis Make When Buying Property",
    excerpt:
      "From skipping due diligence to choosing the wrong advisor — avoid the most common pitfalls that cost overseas investors time and money.",
    date: "July 24, 2026",
    tag: "Overseas",
    slug: "5-mistakes-overseas-pakistanis-buying-property",
    image: "blog-overseas.jpg",
  },
  {
    title: "Islamabad vs Rawalpindi: Where Should You Invest in 2026?",
    excerpt:
      "A data-driven comparison of returns, infrastructure growth and future development plans for both cities.",
    date: "July 10, 2026",
    tag: "Market Analysis",
    slug: "islamabad-vs-rawalpindi-where-to-invest-2026",
    image: "blog-islamabad.jpg",
  },
  {
    title: "Understanding Payment Plans: Installments vs Full Payment",
    excerpt:
      "We break down the financial implications of different payment structures and help you choose what suits your budget.",
    date: "June 25, 2026",
    tag: "Finance",
    slug: "understanding-payment-plans-installments-vs-full-payment",
    image: "blog-payment.jpg",
  },
  {
    title: "Why Gwadar Is Not the Only Emerging Market to Watch",
    excerpt:
      "While Gwadar gets the headlines, several Islamabad-adjacent projects are delivering stronger near-term returns for investors.",
    date: "June 12, 2026",
    tag: "Market Analysis",
    slug: "why-gwadar-is-not-only-emerging-market-to-watch",
    image: "blog-gwadar.jpg",
  },
  {
    title: "The Role of a Real Estate Advisor in Pakistan",
    excerpt:
      "What a licensed advisor does differently from a property dealer and why it matters for your investment journey.",
    date: "May 30, 2026",
    tag: "Guides",
    slug: "role-of-real-estate-advisor-pakistan",
    image: "blog-advisor.jpg",
  },
];

export default function BlogListingPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="page-hero__inner">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Insights &amp; Analysis
            </span>
            <h1 className="page-hero__title">Blog</h1>
            <p className="page-hero__sub">
              Expert perspectives on real estate investing, market trends and
              practical guidance for buyers in Pakistan and abroad.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionGrid columns={3}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/media/blog/${post.slug}`}
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
                    src={`/images/media/${post.image}`}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <span className="badge">{post.tag}</span>
                <span className="kicker" style={{ fontSize: "0.75rem" }}>
                  {post.date}
                </span>
                <h3 className="feature-item__title">{post.title}</h3>
                <p className="feature-item__desc">{post.excerpt}</p>
                <span className="card-link">
                  Read article <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </SectionGrid>
        </Container>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Container>
          <h2 className="section-head__title">Subscribe for Updates</h2>
          <p
            className="section-head__sub"
            style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}
          >
            Get the latest blog posts and market insights delivered to your
            inbox. No spam — just actionable real estate intelligence.
          </p>
          <Link href="/contact" className="btn btn--emerald">
            Get in Touch
          </Link>
        </Container>
      </section>
    </>
  );
}
