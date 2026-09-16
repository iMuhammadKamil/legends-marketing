"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export default function ProjectComparison() {
  const [selected, setSelected] = useState<string[]>([projects[0]?.slug]);

  function toggleProject(slug: string) {
    setSelected((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : prev.length < 3
          ? [...prev, slug]
          : prev
    );
  }

  const compared = projects.filter((p) => selected.includes(p.slug));

  return (
    <div className="tool-comparison">
      <fieldset>
        <legend>Select up to 3 projects to compare</legend>
        {projects.map((project) => (
          <label key={project.id}>
            <input
              type="checkbox"
              checked={selected.includes(project.slug)}
              onChange={() => toggleProject(project.slug)}
            />
            {project.name}
          </label>
        ))}
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {compared.map((p) => (
              <th key={p.id}>{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Location</td>
            {compared.map((p) => (
              <td key={p.id}>{p.location.area}, {p.location.city}</td>
            ))}
          </tr>
          <tr>
            <td>Legal / Approval Status</td>
            {compared.map((p) => (
              <td key={p.id}>{p.legal.nocStatus}</td>
            ))}
          </tr>
          <tr>
            <td>Plot Sizes</td>
            {compared.map((p) => (
              <td key={p.id}>{p.overview.plotSizes.join(", ")}</td>
            ))}
          </tr>
          <tr>
            <td>Price Range</td>
            {compared.map((p) => (
              <td key={p.id}>
                {p.pricing.minPrice.toLocaleString()} -{" "}
                {p.pricing.maxPrice.toLocaleString()}
              </td>
            ))}
          </tr>
          <tr>
            <td>Development</td>
            {compared.map((p) => (
              <td key={p.id}>{p.overview.possessionStatus}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}