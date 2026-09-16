import { contact } from "@/data/contact";

export default function FooterLegal() {
  return (
    <div className="site-footer__bottom">
      <p>
        &copy; {new Date().getFullYear()} {contact.company}. All rights
        reserved.
      </p>
      <p className="site-footer__reg">{contact.registration}</p>
    </div>
  );
}