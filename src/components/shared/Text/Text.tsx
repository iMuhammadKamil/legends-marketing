interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Text({ children, size = "md", className }: TextProps) {
  return <p className={`text text-${size}${className ? ` ${className}` : ""}`}>{children}</p>;
}