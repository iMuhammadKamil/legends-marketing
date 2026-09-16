import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Investment Guides",
  description:
    "Practical real estate investment guides for buyers and investors in Pakistan.",
};

export default function GuidesListingPage() {
  return (
    <Container>
      <Heading level={1}>Investment Guides</Heading>
      <p>Investment guides listing.</p>
    </Container>
  );
}