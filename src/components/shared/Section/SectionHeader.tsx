import Heading from "@/components/shared/Heading/Heading";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`section-head${align === "left" ? " section-head--left" : ""}`}
    >
      {kicker && <span className="kicker">{kicker}</span>}
      <Heading level={2} className="section-head__title">
        {title}
      </Heading>
      {subtitle && <p className="section-head__sub">{subtitle}</p>}
    </div>
  );
}