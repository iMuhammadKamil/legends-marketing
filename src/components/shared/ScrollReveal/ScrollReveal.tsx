"use client";

import { useEffect } from "react";

const REVEAL_SELECTORS = [
  ".gallery-image",
  ".card",
  ".feature-item",
  ".section-head",
  ".page-hero__inner",
  ".hero__content",
  ".cta-band",
  ".form",
  ".contact-map",
  ".project-sidebar",
  ".project-hero",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "60px 0px", threshold: 0.08 }
    );

    const observe = (el: Element) => {
      if (observed.has(el)) return;
      if (
        el.classList.contains("reveal-in") ||
        el.closest("header") ||
        el.closest("footer") ||
        el.closest("nav")
      ) {
        return;
      }
      observed.add(el);
      io.observe(el);
    };

    const scan = () => {
      document.querySelectorAll(REVEAL_SELECTORS).forEach(observe);
    };

    let raf = 0;
    let scanTimeout = 0;

    const deferredScan = () => {
      cancelAnimationFrame(raf);
      clearTimeout(scanTimeout);
      scanTimeout = window.setTimeout(() => {
        raf = requestAnimationFrame(scan);
      }, 100);
    };

    const start = () => {
      document.documentElement.classList.add("sr-js");
      scan();
      // Only watch for new nodes being added, not class changes
      const mo = new MutationObserver((mutations) => {
        let hasNewNodes = false;
        for (const m of mutations) {
          if (m.type === "childList" && m.addedNodes.length > 0) {
            hasNewNodes = true;
            break;
          }
        }
        if (hasNewNodes) deferredScan();
      });
      mo.observe(document.body, {
        childList: true,
        subtree: true,
      });
      return mo;
    };

    let mo: MutationObserver | undefined;
    let startTimer = 0;
    if (document.readyState === "complete") {
      startTimer = window.setTimeout(() => { mo = start(); }, 150);
    } else {
      window.addEventListener(
        "load",
        () => {
          startTimer = window.setTimeout(() => { mo = start(); }, 150);
        },
        { once: true }
      );
    }

    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(raf);
      clearTimeout(scanTimeout);
      mo?.disconnect();
      io.disconnect();
      document.documentElement.classList.remove("sr-js");
    };
  }, []);

  return null;
}
