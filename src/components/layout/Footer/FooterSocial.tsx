import { contact } from "@/data/contact";

export default function FooterSocial() {
  const { social } = contact;
  const links = [
    { label: "Facebook", href: social.facebook },
    { label: "Instagram", href: social.instagram },
    { label: "YouTube", href: social.youtube },
    { label: "LinkedIn", href: social.linkedin },
  ];
  return (
    <div className="site-footer__col">
      <h4>Follow Us</h4>
      <nav aria-label="Social media">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label} <span aria-hidden="true">&rarr;</span>
          </a>
        ))}
      </nav>
    </div>
  );
}