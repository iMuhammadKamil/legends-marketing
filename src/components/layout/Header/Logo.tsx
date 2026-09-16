import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Legends Marketing - Home">
      <span className="brand__mark">
        <Image
          src="/images/logo/logo.jpg"
          alt="Legends Marketing"
          width={64}
          height={64}
          priority
        />
      </span>
    </Link>
  );
}