interface SectionGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function SectionGrid({
  children,
  columns = 3,
  className,
}: SectionGridProps) {
  return (
    <div className={`grid-${columns}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}