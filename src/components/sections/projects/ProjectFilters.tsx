"use client";

import { useState } from "react";

const filters = ["All", "Residential", "Commercial", "Islamabad", "Rawalpindi"];

export default function ProjectFilters() {
  const [active, setActive] = useState("All");

  return (
    <div className="project-filters">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={active === filter ? "active" : ""}
          onClick={() => setActive(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}