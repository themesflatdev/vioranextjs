"use client";

import { useEffect, useRef } from "react";

/**
 * Mirrors assets/js/gsapAnimate.js `animateImgItem` — IntersectionObserver
 * (threshold 0.1) adds "active-animate" once the element enters the
 * viewport, triggering the clip-path/opacity reveal transition defined per
 * `.tf-animateCLP-*` class in _animation.scss (element is invisible,
 * clipped, until this class is added — not decorative-only). Reads an
 * optional `data-delay` (seconds) attribute off the element itself, same
 * as the original. The class is never removed once added (one-way reveal,
 * matches original), so unobserving after the first trigger is safe.
 */
export function useAnimateImgItem<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = parseFloat(entry.target.getAttribute("data-delay") || "0") || 0;
          setTimeout(() => {
            entry.target.classList.add("active-animate");
          }, delay * 1000);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
