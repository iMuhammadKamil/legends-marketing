import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Event",
};

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  if (!slug) notFound();
  return (
    <Container>
      <Heading level={1}>Event: {slug}</Heading>
      <p>Event detail placeholder.</p>
    </Container>
  );
}