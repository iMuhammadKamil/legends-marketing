import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Gallery Album",
};

export default function GalleryAlbumPage({
  params,
}: {
  params: { "album-slug": string };
}) {
  const slug = params["album-slug"];
  if (!slug) notFound();
  return (
    <Container>
      <Heading level={1}>Album: {slug}</Heading>
      <p>Gallery album placeholder.</p>
    </Container>
  );
}