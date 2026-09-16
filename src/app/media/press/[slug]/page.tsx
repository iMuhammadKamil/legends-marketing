import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Press Release",
};

export default function PressReleasePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  if (!slug) notFound();
  return (
    <Container>
      <Heading level={1}>Press: {slug}</Heading>
      <p>Press release placeholder.</p>
    </Container>
  );
}