const checks = [
  "Clear coordination from day one",
  "Constant project visibility & reporting",
  "Guaranteed quality in execution",
  "On-time, on-budget delivery",
];

export default function PortfolioAbout() {
  return (
    <section className="mp-about" id="about">
      <div className="mp-about__grid">
        <div className="mp-reveal">
          <p className="mp-about__label">Why Legends Marketing</p>
          <h2 className="mp-about__title">
            A trusted investment partner
          </h2>
          <p className="mp-about__desc">
            Legends Marketing specializes in connecting investors with
            Pakistan&apos;s most promising real estate projects. We work
            methodically, with attention to detail and transparent agreements.
            Our strength lies in:
          </p>
          <div className="mp-about__checks">
            {checks.map((c) => (
              <div key={c} className="mp-about__check">
                <span className="mp-about__check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="mp-about__image mp-reveal mp-reveal--d2">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80"
            alt="Modern interior design showcase"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
