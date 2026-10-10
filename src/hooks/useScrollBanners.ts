"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `scrollBanners` — each
 * `.banner-stripe .text-container` scrubs horizontally as it crosses the
 * viewport ("top bottom" -> "bottom top", scrub 1): `-7%` for
 * `.effect-left`, `7%` for `.effect-right`.
 */
export function useScrollBanners<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const stripes = container.querySelectorAll<HTMLElement>(".banner-stripe .text-container");
      stripes.forEach((el) => {
        let x: string | undefined;
        if (el.classList.contains("effect-left")) x = "-7%";
        if (el.classList.contains("effect-right")) x = "7%";
        if (!x) return;

        gsap.to(el, {
          x,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return ref;
}
