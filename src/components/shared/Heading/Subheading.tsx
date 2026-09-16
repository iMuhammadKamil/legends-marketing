interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Subheading({ children, className }: SubheadingProps) {
  return <p className={`subheading${className ? ` ${className}` : ""}`}>{children}</p>;
}