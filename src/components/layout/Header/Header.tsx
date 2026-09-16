"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import HeaderCTA from "./HeaderCTA";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="site-header__inner">
        <Logo />
        <Navigation />
        <HeaderCTA />
        <MobileMenu />
      </div>
    </header>
  );
}