"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  scale?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  x = 0,
  duration = 0.8,
  stagger = 0,
  start = "top 85%",
  scale = 1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !ref.current) return;

    const ctx = gsap.context(() => {
      const children = stagger
        ? ref.current!.children
        : [ref.current!];

      gsap.fromTo(
        children,
        { opacity: 0, y, x, scale: scale !== 1 ? scale : undefined },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          ease: "power3.out",
          delay,
          stagger: stagger || undefined,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y, x, duration, stagger, start, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerReveal({
  children,
  className = "",
  childSelector = "> *",
  delay = 0,
  y = 24,
  duration = 0.6,
  stagger = 0.08,
  start = "top 80%",
}: ScrollRevealProps & { childSelector?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !ref.current) return;

    const ctx = gsap.context(() => {
      const items = ref.current!.querySelectorAll(childSelector);
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          delay,
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [childSelector, delay, y, duration, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function Parallax({
  children,
  className = "",
  speed = 0.5,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => speed * 80,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
