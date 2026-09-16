import { contact } from "@/data/contact";

export default function FooterContact() {
  return (
    <div className="site-footer__col">
      <h4>Get in Touch</h4>
      <ul className="site-footer__contact">
        <li>
          <span aria-hidden="true">&#128205;</span>
          <span>{contact.officeAddress}</span>
        </li>
        <li>
          <span aria-hidden="true">&#128222;</span>
          <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
        </li>
        <li>
          <span aria-hidden="true">&#9993;</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <span aria-hidden="true">&#128338;</span>
          <span>{contact.hours}</span>
        </li>
      </ul>
    </div>
  );
}