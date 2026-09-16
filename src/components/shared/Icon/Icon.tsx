interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`icon icon-${name}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <use href={`/assets/icons/sprite.svg#${name}`} />
    </svg>
  );
}