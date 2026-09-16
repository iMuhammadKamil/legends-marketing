import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Market Reports",
  description:
    "In-depth real estate market reports for Islamabad and Rawalpindi.",
};

export default function ReportsListingPage() {
  return (
    <Container>
      <Heading level={1}>Market Reports</Heading>
      <p>Market reports listing.</p>
    </Container>
  );
}