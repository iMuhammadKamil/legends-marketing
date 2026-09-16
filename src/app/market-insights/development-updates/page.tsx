import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Development Updates",
  description:
    "Construction and development progress updates for major projects.",
};

export default function DevelopmentUpdatesListingPage() {
  return (
    <Container>
      <Heading level={1}>Development Updates</Heading>
      <p>Development updates listing.</p>
    </Container>
  );
}