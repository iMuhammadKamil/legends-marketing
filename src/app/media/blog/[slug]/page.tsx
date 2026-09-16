import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Blog Post",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) notFound();
  return (
    <Container>
      <Heading level={1}>Blog: {slug}</Heading>
      <p>Blog post placeholder.</p>
    </Container>
  );
}