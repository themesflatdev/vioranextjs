type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export default function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className={`wg-pagination${className ? ` ${className}` : ""}`}>
      {pages.map((page) => (
        <li key={page} className={page === currentPage ? "active" : undefined}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
          >
            {page}
          </a>
        </li>
      ))}
      <li className="arrow">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(Math.min(currentPage + 1, totalPages));
          }}
        >
          <i className="icon-CaretRight" />
        </a>
      </li>
    </ul>
  );
}
