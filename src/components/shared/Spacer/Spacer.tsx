interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Spacer({ size = "md" }: SpacerProps) {
  return <div className={`spacer spacer-${size}`} aria-hidden="true" />;
}