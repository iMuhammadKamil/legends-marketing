interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export default function Grid({
  children,
  columns = 3,
  gap = "md",
  className,
}: GridProps) {
  const style = { gridTemplateColumns: `repeat(${columns}, 1fr)` };
  return (
    <div
      className={`grid grid-gap-${gap}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}