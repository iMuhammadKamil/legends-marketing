import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  type = "website",
}: SEOProps): Metadata {
  const url = canonical ? `${SITE.url}${canonical}` : SITE.url;

  return {
    title,
    description,
    keywords,
    alternates: canonical ? { canonical: url } : undefined,
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: SITE.name,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}