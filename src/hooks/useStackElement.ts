"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `stackElement` — only active from 767px up
 * (gsap.matchMedia "(min-width: 767px)"). The ref goes on `.stack-element`;
 * each `.element` child inside its `.stack-content-wrap` gets pinned
 * (ScrollTrigger pin, pinSpacing false, scrub 1, start "top 100") for a
 * scroll distance equal to the combined height of the elements below it —
 * recomputed (old triggers killed, new ones built) on every resize, exactly
 * like the original's `updateTotalHeight`.
 */
export function useStackElement<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const stack = ref.current;
    if (!stack) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 767px)", () => {
      let triggers: ScrollTrigger[] = [];

      const updateTotalHeight = () => {
        const wrap = stack.querySelector<HTMLElement>(".stack-content-wrap");
        if (!wrap) return;
        let totalHeight = wrap.offsetHeight;

        triggers.forEach((t) => t.kill());
        triggers = [];

        stack.querySelectorAll<HTMLElement>(".element").forEach((element) => {
          totalHeight -= element.offsetHeight;
          triggers.push(
            ScrollTrigger.create({
              trigger: element,
              scrub: 1,
              start: "top 100",
              end: `+=${totalHeight}`,
              pin: true,
              pinSpacing: false,
            })
          );
        });
      };

      updateTotalHeight();
      window.addEventListener("resize", updateTotalHeight);

      return () => {
        window.removeEventListener("resize", updateTotalHeight);
        triggers.forEach((t) => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return ref;
}
