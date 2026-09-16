import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function Image({
  src,
  alt,
  className,
  style,
  width,
  height,
  fill,
  priority,
  sizes,
}: ImageProps) {
  if (fill) {
    return (
      <NextImage
        src={src}
        alt={alt}
        className={className}
        style={style}
        fill
        priority={priority}
        sizes={sizes || "100vw"}
      />
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
