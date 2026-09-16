export type ArticleCategory =
  | "news"
  | "guide"
  | "report"
  | "price-update"
  | "development-update"
  | "blog"
  | "video"
  | "event"
  | "press";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  image?: string;
  author?: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}