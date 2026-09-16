import Logo from "@/components/layout/Header/Logo";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterLegal from "./FooterLegal";
import { contact } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Logo />
            <p className="site-footer__about">
              {contact.tagline} We connect investors with Pakistan&rsquo;s
              most promising real estate projects.
            </p>
            <p className="site-footer__reg">{contact.registration}</p>
          </div>
          <FooterNav />
          <FooterContact />
          <FooterSocial />
        </div>
        <FooterLegal />
      </div>
    </footer>
  );
}