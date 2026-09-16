import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Video",
};

export default function VideoDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  if (!slug) notFound();
  return (
    <Container>
      <Heading level={1}>Video: {slug}</Heading>
      <p>Video detail placeholder.</p>
    </Container>
  );
}