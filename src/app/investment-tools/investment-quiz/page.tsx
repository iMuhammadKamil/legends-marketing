import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Investment Quiz",
  description:
    "Take the investment quiz to discover the best real estate options for you.",
};

export default function InvestmentQuizPage() {
  return (
    <Container>
      <Heading level={1}>Investment Quiz</Heading>
      <p>Investment quiz placeholder - functionality added in a later phase.</p>
    </Container>
  );
}