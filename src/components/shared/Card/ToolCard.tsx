import Link from "next/link";
import type { Tool } from "@/types/service";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="card tool-card">
      <div className="tool-card__icon" aria-hidden="true">
        {tool.icon}
      </div>
      <h3 className="tool-card__title">{tool.name}</h3>
      <p className="tool-card__desc">{tool.shortDescription}</p>
      <Link href={tool.href} className="card-link">
        Open tool <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}