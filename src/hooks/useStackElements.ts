"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `stackElement` — pins each `.element`
 * inside `.stack-content-wrap` in turn as it scrolls past, only above the
 * 767px breakpoint (gsap.matchMedia reverts/re-creates the ScrollTriggers
 * automatically when crossing that boundary). `end` for each pin shrinks by
 * that element's own height so the next element pins right where the
 * previous one left off. Relies on the parent HeaderSection's
 * useScrollSmoother() to ScrollTrigger.refresh() after this effect runs
 * (child effects run before the parent's), since pin positions depend on
 * the smoothed layout.
 */
export function useStackElements<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const stack = ref.current;
    if (!stack) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 767px)", () => {
      let scrollTriggerInstances: ScrollTrigger[] = [];

      const updateTotalHeight = () => {
        const wrap = stack.querySelector<HTMLElement>(".stack-content-wrap");
        if (!wrap) return;
        let totalHeight = wrap.offsetHeight;

        scrollTriggerInstances.forEach((instance) => instance.kill());
        scrollTriggerInstances = [];

        stack.querySelectorAll<HTMLElement>(".element").forEach((element) => {
          const tabHeight = element.offsetHeight;
          totalHeight -= tabHeight;

          scrollTriggerInstances.push(
            ScrollTrigger.create({
              trigger: element,
              scrub: 1,
              start: "top 100",
              end: `+=${totalHeight}`,
              pin: true,
              pinSpacing: false,
            }),
          );
        });
      };

      updateTotalHeight();
      window.addEventListener("resize", updateTotalHeight);

      return () => {
        window.removeEventListener("resize", updateTotalHeight);
        scrollTriggerInstances.forEach((instance) => instance.kill());
        scrollTriggerInstances = [];
      };
    });

    return () => mm.revert();
  }, []);

  return ref;
}
