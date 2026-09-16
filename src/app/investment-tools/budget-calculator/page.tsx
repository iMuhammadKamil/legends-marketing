import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Investment Budget Calculator",
  description:
    "Plan your real estate investment budget and see what you can afford in Pakistan.",
};

export default function BudgetCalculatorPage() {
  return (
    <Container>
      <Heading level={1}>Investment Budget Calculator</Heading>
      <p>Budget calculator placeholder - functionality added in a later phase.</p>
    </Container>
  );
}