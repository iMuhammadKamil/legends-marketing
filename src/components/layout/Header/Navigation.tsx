"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";

export default function Navigation() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenItem(null);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenItem(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <nav ref={navRef} aria-label="Main navigation">
      <ul className="main-nav">
        {navItems.map((item) => {
          const hasChildren = !!item.children && item.children.length > 0;
          const isOpen = openItem === item.href;
          return (
            <li
              key={item.href}
              className={`main-nav__item${isOpen ? " main-nav__item--open" : ""}`}
              onMouseEnter={() => hasChildren && setOpenItem(item.href)}
              onMouseLeave={() => setOpenItem(null)}
            >
              <Link
                href={item.href}
                className="main-nav__link"
                aria-haspopup={hasChildren ? "true" : undefined}
                aria-expanded={hasChildren ? isOpen : undefined}
                onClick={(event) => {
                  if (hasChildren) {
                    event.preventDefault();
                    setOpenItem(isOpen ? null : item.href);
                  }
                }}
              >
                {item.label}
              </Link>
              {hasChildren && (
                <div
                  className={`main-nav__dropdown${
                    isOpen ? " main-nav__dropdown--open" : ""
                  }`}
                >
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenItem(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}