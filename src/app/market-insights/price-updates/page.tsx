import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Price Updates",
  description:
    "Latest property price updates for projects in Islamabad and Rawalpindi.",
};

export default function PriceUpdatesListingPage() {
  return (
    <Container>
      <Heading level={1}>Price Updates</Heading>
      <p>Price updates listing.</p>
    </Container>
  );
}