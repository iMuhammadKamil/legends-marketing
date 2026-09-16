import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={page === 1 ? basePath : `${basePath}/page/${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}