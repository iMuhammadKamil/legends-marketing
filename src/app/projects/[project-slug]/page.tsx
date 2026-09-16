import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import ProjectHero from "@/components/sections/projects/ProjectHero";
import ProjectOverview from "@/components/sections/projects/ProjectOverview";
import ProjectLocation from "@/components/sections/projects/ProjectLocation";
import ProjectMasterPlan from "@/components/sections/projects/ProjectMasterPlan";
import ProjectBlocks from "@/components/sections/projects/ProjectBlocks";
import ProjectDevelopment from "@/components/sections/projects/ProjectDevelopment";
import ProjectPaymentPlan from "@/components/sections/projects/ProjectPaymentPlan";
import ProjectPricing from "@/components/sections/projects/ProjectPricing";
import ProjectHighlights from "@/components/sections/projects/ProjectHighlights";
import ProjectAmenities from "@/components/sections/projects/ProjectAmenities";
import ProjectGallery from "@/components/sections/projects/ProjectGallery";
import ProjectFAQs from "@/components/sections/projects/ProjectFAQs";
import ProjectLegal from "@/components/sections/projects/ProjectLegal";
import ProjectAdvisor from "@/components/sections/projects/ProjectAdvisor";
import ProjectCTA from "@/components/sections/projects/ProjectCTA";
import ProjectEnquiryForm from "@/components/sections/projects/ProjectEnquiryForm";

interface ProjectPageProps {
  params: { "project-slug": string };
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params["project-slug"]);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    alternates: { canonical: project.seo.canonical },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params["project-slug"]);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectLocation project={project} />
      <ProjectMasterPlan project={project} />
      <ProjectBlocks project={project} />
      <ProjectDevelopment project={project} />
      <ProjectPaymentPlan project={project} />
      <ProjectPricing project={project} />
      <ProjectHighlights project={project} />
      <ProjectAmenities project={project} />
      <ProjectGallery project={project} />
      <ProjectFAQs project={project} />
      <ProjectLegal project={project} />
      <ProjectAdvisor project={project} />
      <ProjectCTA project={project} />
      <ProjectEnquiryForm project={project} />
    </>
  );
}