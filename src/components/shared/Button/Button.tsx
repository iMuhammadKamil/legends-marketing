import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "gold" | "emerald" | "outline" | "light-outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  href,
  children,
  variant = "emerald",
  size = "md",
  type = "button",
  onClick,
  className,
  disabled,
}: ButtonProps) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size === "lg" ? "btn--lg" : size === "sm" ? "btn--sm" : "",
    disabled ? "btn--disabled" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}