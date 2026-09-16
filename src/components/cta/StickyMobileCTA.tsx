import CallCTA from "./CallCTA";
import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="sticky-cta">
      <CallCTA />
      <Link href="/contact" className="btn btn--emerald">
        Book Consultation
      </Link>
    </div>
  );
}