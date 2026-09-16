"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { BUDGET_RANGES } from "@/lib/constants";

export default function PropertyFinder() {
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const filtered = projects.filter((project) => {
    if (category && project.category !== category) return false;
    if (location && project.location.city.toLowerCase() !== location) return false;
    if (budget) {
      const range = BUDGET_RANGES.find((b) => b.id === budget);
      if (range) {
        const fits =
          project.pricing.minPrice <= range.max &&
          project.pricing.maxPrice >= range.min;
        if (!fits) return false;
      }
    }
    return true;
  });

  return (
    <div className="tool-finder">
      <div className="finder-filters">
        <label>
          Budget
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">Any budget</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Investment Type
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Any type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="mixed">Mixed</option>
          </select>
        </label>
        <label>
          Preferred Location
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Any location</option>
            <option value="islamabad">Islamabad</option>
            <option value="rawalpindi">Rawalpindi</option>
          </select>
        </label>
      </div>
      <ul className="finder-results">
        {filtered.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}