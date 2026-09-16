import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "News Article",
};

export default function MediaNewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  if (!slug) notFound();
  return (
    <Container>
      <Heading level={1}>News: {slug}</Heading>
      <p>Media news article placeholder.</p>
    </Container>
  );
}