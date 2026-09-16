import type { Project } from "@/types/project";
import { parkviewCity } from "./parkview-city";
import { blueWorldCity } from "./blue-world-city";
import { hashooRealEstate } from "./hashoo-real-estate";
import { faisalTown } from "./faisal-town";
import { premierChoice } from "./premier-choice";
import { saffronCity } from "./saffron-city";
import { capitalSmartCity } from "./capital-smart-city";

export const projects: Project[] = [
  parkviewCity,
  blueWorldCity,
  hashooRealEstate,
  faisalTown,
  premierChoice,
  saffronCity,
  capitalSmartCity,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getActiveProjects(): Project[] {
  return projects.filter((p) => p.status === "active");
}

export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return getActiveProjects().slice(0, 4);
}