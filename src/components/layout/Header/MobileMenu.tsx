"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import Logo from "./Logo";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mobile-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        {open && (
          <>
            <div className="mobile-menu__head">
              <div onClick={() => setOpen(false)}>
                <Logo />
              </div>
              <button
                type="button"
                className="mobile-menu__close"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <div className="mobile-menu__sub">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a Consultation
              </Link>
            </nav>
          </>
        )}
      </div>
    </>
  );
}