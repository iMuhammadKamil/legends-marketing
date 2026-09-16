import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Project Comparison",
  description:
    "Compare real estate projects side by side - location, approval, plots, payment plans and development.",
};

export default function ProjectComparisonPage() {
  return (
    <Container>
      <Heading level={1}>Project Comparison</Heading>
      <p>Project comparison placeholder - functionality added in a later phase.</p>
    </Container>
  );
}