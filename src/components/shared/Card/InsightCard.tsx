import Link from "next/link";
import type { Article } from "@/types/article";

interface InsightCardProps {
  article: Article;
  basePath: string;
}

export default function InsightCard({ article, basePath }: InsightCardProps) {
  return (
    <article className="card insight-card">
      <div
        className="insight-card__media"
        style={{
          background: article.image
            ? `url(${article.image}) center/cover no-repeat`
            : "linear-gradient(135deg, var(--emerald-800), var(--emerald-950))",
        }}
      >
        <span className="insight-card__tag">{article.category.replace("-", " ")}</span>
      </div>
      <div className="insight-card__body">
        <h3 className="insight-card__title">{article.title}</h3>
        <p className="insight-card__excerpt">{article.excerpt}</p>
        <Link href={`${basePath}/${article.slug}`} className="card-link">
          Read more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}