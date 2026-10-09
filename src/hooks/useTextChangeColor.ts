"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * Mirrors assets/js/gsapAnimate.js `changetext` — splits `.text-change-color`
 * into lines (SplitText wraps each in a `div`, which is what the CSS
 * gradient/background-clip rules target) and scrubs `backgroundPositionX`
 * from 100% to 0% per line as it scrolls through.
 */
export function useTextChangeColor<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);
    const split = new SplitText(target, { type: "lines" });
    const tweens = split.lines.map((line) =>
      gsap.to(line, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: { trigger: line, scrub: 1, start: "top 85%", end: "bottom center" },
      }),
    );

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
      split.revert();
    };
  }, []);

  return ref;
}
