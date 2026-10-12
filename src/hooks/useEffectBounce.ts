"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Direction = "up" | "down" | "left" | "right";

/**
 * Mirrors assets/js/gsapAnimate.js `effectBounce` (`.effectBounce` elements):
 * gsap.fromTo bounce-in from the given direction, duration 1.3s, ease
 * "bounce.out", delay from `data-delay` (seconds, default 0), scrollTrigger
 * start "top 85%" / toggleActions "play none none reverse".
 */
export function useEffectBounce<T extends HTMLElement = HTMLElement>(
  delay: number = 0,
  direction: Direction = "up",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const fromVars: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") fromVars.y = 70;
    else if (direction === "down") fromVars.y = -70;
    else if (direction === "left") fromVars.x = -70;
    else if (direction === "right") fromVars.x = 70;

    const tween = gsap.fromTo(el, fromVars, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.3,
      ease: "bounce.out",
      delay,
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, direction]);

  return ref;
}
