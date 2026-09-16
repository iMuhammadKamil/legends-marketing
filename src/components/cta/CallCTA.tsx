import Link from "next/link";
import { contact } from "@/data/contact";

export default function CallCTA() {
  return (
    <a className="btn btn--gold" href={`tel:${contact.phoneTel}`}>
      Call {contact.phone}
    </a>
  );
}