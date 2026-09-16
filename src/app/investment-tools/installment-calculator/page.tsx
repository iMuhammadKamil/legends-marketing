import type { Metadata } from "next";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Installment Calculator",
  description:
    "Calculate monthly installments for real estate payment plans in Pakistan.",
};

export default function InstallmentCalculatorPage() {
  return (
    <Container>
      <Heading level={1}>Installment Calculator</Heading>
      <p>Installment calculator placeholder - functionality added in a later phase.</p>
    </Container>
  );
}