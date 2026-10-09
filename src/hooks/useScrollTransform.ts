"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollTransformOptions = {
  direction?: "left" | "right" | "up" | "down";
  distance?: string;
  rotate?: number | string;
  rotateOnly?: boolean;
};

/**
 * Mirrors assets/js/gsapAnimate.js `scrollTransform` (`.scroll-transform`
 * elements) — a translate scrub (own start/end/scrub) plus an independent
 * rotate scrub when `rotate` is given, exactly as the two separate
 * `gsap.to` calls in the original.
 */
export function useScrollTransform<T extends HTMLElement = HTMLElement>({
  direction = "up",
  distance = "10%",
  rotate,
  rotateOnly = false,
}: ScrollTransformOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.registerPlugin(ScrollTrigger);
    const tweens: gsap.core.Tween[] = [];

    if (!rotateOnly) {
      const animationProperty =
        direction === "left"
          ? { x: `-${distance}` }
          : direction === "right"
            ? { x: `${distance}` }
            : direction === "down"
              ? { y: `${distance}` }
              : { y: `-${distance}` };

      tweens.push(
        gsap.to(element, {
          ...animationProperty,
          scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 3 },
        }),
      );
    }

    if (rotate !== undefined) {
      tweens.push(
        gsap.to(element, {
          rotate,
          scrollTrigger: { trigger: element, start: "top 60%", end: "bottom top", scrub: 2 },
        }),
      );
    }

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [direction, distance, rotate, rotateOnly]);

  return ref;
}
