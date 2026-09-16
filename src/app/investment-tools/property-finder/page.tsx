import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Property Finder",
  description:
    "Find investment properties that match your budget, type and preferred location.",
};

export default function PropertyFinderPage() {
  return (
    <Container>
      <Heading level={1}>Property Finder</Heading>
      <p>Property finder placeholder - functionality added in a later phase.</p>
    </Container>
  );
}