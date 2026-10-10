"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors assets/js/main.js `animateCounters` — counts 0 -> target over
 * `duration` ms, but only once, and only once the element is FULLY inside
 * the viewport (the original's `isInViewport` checks the whole rect, not
 * just an intersection), never re-running on subsequent scrolls.
 */
export function useCountUp(target: number, duration: number, initial = 0) {
  const [value, setValue] = useState(initial);
  const ref = useRef<HTMLElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * target));
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setValue(target);
          }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 1.0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}
