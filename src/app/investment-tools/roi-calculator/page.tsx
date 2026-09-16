import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description:
    "Estimate the return on investment for a real estate project in Pakistan. Illustrative estimates only.",
};

export default function ROICalculatorPage() {
  return (
    <Container>
      <Heading level={1}>ROI Calculator</Heading>
      <p>ROI calculator placeholder - functionality added in a later phase.</p>
    </Container>
  );
}