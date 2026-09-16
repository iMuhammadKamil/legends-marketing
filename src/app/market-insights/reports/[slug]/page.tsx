import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Market Report",
};

export default function ReportArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  if (!slug) notFound();
  return (
    <Container>
      <Heading level={1}>Report: {slug}</Heading>
      <p>Market report content placeholder.</p>
    </Container>
  );
}