"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  end,
  duration = 1800,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end) + (progress >= 1 ? 0 : 1));
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref}>
      <div className="hero-stat__value">
        {count}
        {suffix}
      </div>
      <div className="hero-stat__label">{label}</div>
    </div>
  );
}
