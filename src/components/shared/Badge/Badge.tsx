interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`badge${variant === "gold" ? " badge--gold" : ""}`}>
      {children}
    </span>
  );
}