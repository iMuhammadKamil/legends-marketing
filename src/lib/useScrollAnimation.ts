"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealOptions {
  trigger?: RefObject<HTMLElement> | string;
  start?: string;
  duration?: number;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
  onEnter?: () => void;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement>,
  options: UseScrollRevealOptions = {}
) {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !ref.current) return;

    const {
      start = "top 85%",
      duration = 0.8,
      y = 30,
      x = 0,
      opacity = 0,
      scale = 1,
      ease = "power3.out",
      delay = 0,
      onEnter,
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none none",
          },
          onStart: onEnter,
        }
      );
    });

    return () => ctx.revert();
  }, [ref, options]);
}

export function useStaggerReveal(
  containerRef: RefObject<HTMLElement>,
  childSelector: string,
  options: UseScrollRevealOptions = {}
) {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !containerRef.current) return;

    const {
      start = "top 80%",
      duration = 0.6,
      y = 24,
      stagger = 0.08,
      ease = "power3.out",
    } = options;

    const ctx = gsap.context(() => {
      const children = containerRef.current!.querySelectorAll(childSelector);
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [containerRef, childSelector, options]);
}

export function useParallax(
  ref: RefObject<HTMLElement>,
  speed: number = 0.5
) {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => speed * 100,
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
  }, [ref, speed]);
}
