import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Real Estate News",
  description:
    "Latest real estate news from Islamabad, Rawalpindi and across Pakistan.",
};

export default function NewsListingPage() {
  return (
    <Container>
      <Heading level={1}>Real Estate News</Heading>
      <p>Latest market news listing.</p>
    </Container>
  );
}