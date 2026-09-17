"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  ".mp-reveal",
  ".stats-band",
  ".process-step",
  ".project-highlight",
  ".service-pill",
  ".overseas-banner",
  ".testimonial-card-lg",
  ".landing-cta__inner",
  ".landing-stat-card",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll(REVEAL_SELECTORS);

      elements.forEach((el) => {
        if (
          el.classList.contains("reveal-in") ||
          el.closest("header") ||
          el.closest("footer") ||
          el.closest("nav")
        ) {
          return;
        }

        gsap.set(el, { opacity: 0, y: 30 });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });
      });

      const headings = document.querySelectorAll(".section-head");
      headings.forEach((heading) => {
        const kicker = heading.querySelector(".kicker");
        const title = heading.querySelector(".section-head__title");
        const sub = heading.querySelector(".section-head__sub");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        if (kicker) {
          tl.fromTo(
            kicker,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
          );
        }
        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          );
        }
        if (sub) {
          tl.fromTo(
            sub,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.35"
          );
        }
      });

      const staggerGroups = [
        ".grid-3 > *",
        ".grid-4 > *",
        ".services-grid > *",
      ];
      staggerGroups.forEach((selector) => {
        const items = document.querySelectorAll(selector);
        if (items.length === 0) return;

        gsap.set(items, { opacity: 0, y: 24 });

        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: items[0].parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
