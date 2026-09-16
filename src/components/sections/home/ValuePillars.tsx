const pillars = [
  {
    title: "Transparent Strategy",
    desc: "Clear communication and honest guidance from day one. No hidden fees, no surprises — just straightforward advice tailored to your investment goals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Market Mastery",
    desc: "Deep knowledge of Pakistan's real estate landscape. We analyze trends, forecast growth, and identify high-potential opportunities before they peak.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Guaranteed Execution",
    desc: "From booking to after-sales, we ensure every step is handled professionally. Your investment is managed with precision and accountability.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function ValuePillars() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head text-center">
          <span className="kicker">Why Choose Us</span>
          <h2 className="section-head__title">
            A Trusted Investment Partner
          </h2>
          <p className="section-head__sub">
            Legends Marketing specializes in connecting investors with
            Pakistan&apos;s most promising real estate projects.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="card mp-reveal"
              style={{
                padding: "2.5rem 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "14px",
                  background: "var(--charcoal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.2rem",
                  color: "var(--gold)",
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "0.6rem",
                  color: "var(--charcoal)",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
