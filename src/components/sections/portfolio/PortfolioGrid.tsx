"use client";

interface Project {
  title: string;
  location: string;
  image: string;
  wide?: boolean;
}

const projects: Project[] = [
  {
    title: "Park View City",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    wide: true,
  },
  {
    title: "Blue World City",
    location: "Rawalpindi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Faisal Town",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    title: "Saffron City",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Capital Smart City",
    location: "Rawalpindi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    wide: true,
  },
  {
    title: "Hashoo Real Estate",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Premier Choice",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="mp-portfolio" id="projects">
      <div className="mp-portfolio__grid">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`mp-portfolio__card${p.wide ? " mp-portfolio__card--wide" : ""} mp-reveal mp-reveal--d${(i % 6) + 1}`}
          >
            <img
              src={p.image}
              alt={`${p.title} — ${p.location}`}
              loading={i < 2 ? "eager" : "lazy"}
            />
            <div className="mp-portfolio__card-info">
              <h2 className="mp-portfolio__card-title">{p.title}</h2>
              <p className="mp-portfolio__card-location">{p.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
