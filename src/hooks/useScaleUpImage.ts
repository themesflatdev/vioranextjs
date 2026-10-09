"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `effectScaleImg` — scrub timeline on
 * `.scale-up-img` sections: the `.scale-up` child scales to 1.15 as the
 * section scrolls from "top bottom" to "bottom center" (scrub 1).
 */
export function useScaleUpImage<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const section = ref.current;
    const target = section?.querySelector<HTMLElement>(".scale-up");
    if (!section || !target) return;

    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top bottom", end: "bottom center", scrub: 1 },
    });
    timeline.to(target, { scale: 1.15, duration: 1 });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  return ref;
}
