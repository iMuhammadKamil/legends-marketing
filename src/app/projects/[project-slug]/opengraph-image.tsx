import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Project";

export default function OpengraphImage({
  params,
}: {
  params: { "project-slug": string };
}) {
  const project = getProjectBySlug(params["project-slug"]);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          color: "white",
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {project ? project.name : "Legends Marketing"}
      </div>
    ),
    size
  );
}