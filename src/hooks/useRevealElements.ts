"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `initRevealElements` for `[data-ns-animate]`
 * — fade+blur reveal driven entirely by the element's own data attributes
 * (duration, delay, offset, start, end, direction, instant, rotation,
 * animation-type). `data-spring` (Springer easing) is unused across the
 * project so far — not implemented, add it if a future niche needs it.
 */
export function useRevealElements<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    gsap.registerPlugin(ScrollTrigger);

    const duration = elem.hasAttribute("data-duration") ? parseFloat(elem.getAttribute("data-duration")!) : 0.6;
    const delay = elem.hasAttribute("data-delay") ? parseFloat(elem.getAttribute("data-delay")!) : 0;
    const offset = elem.hasAttribute("data-offset") ? parseFloat(elem.getAttribute("data-offset")!) : 60;
    const instant = elem.hasAttribute("data-instant") && elem.getAttribute("data-instant") !== "false";
    const start = elem.getAttribute("data-start") || "top 90%";
    const end = elem.getAttribute("data-end") || "top 50%";
    const direction = elem.getAttribute("data-direction") || "down";
    const rotation = elem.hasAttribute("data-rotation") ? parseFloat(elem.getAttribute("data-rotation")!) : 0;
    const animationType = elem.getAttribute("data-animation-type") || "from";

    elem.style.opacity = "1";
    elem.style.filter = "blur(0)";

    const animationProps: gsap.TweenVars =
      animationType === "to"
        ? { opacity: 1, filter: "blur(0)", duration, delay, ease: "power2.out" }
        : { opacity: 0, filter: "blur(16px)", duration, delay, ease: "power2.out" };

    if (rotation !== 0) animationProps.rotation = rotation;

    if (!instant) {
      animationProps.scrollTrigger = { trigger: elem, start, end, scrub: false };
    }

    switch (direction) {
      case "left":
        animationProps.x = -offset;
        break;
      case "right":
        animationProps.x = offset;
        break;
      case "down":
        animationProps.y = offset;
        break;
      case "up":
      default:
        animationProps.y = -offset;
        break;
    }

    const tween = animationType === "to" ? gsap.to(elem, animationProps) : gsap.from(elem, animationProps);

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return ref;
}
