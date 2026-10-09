"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `effectSectionTriger` — ref goes on
 * `.section-triger`; its `.uncover_slice` children (default height:100% in
 * CSS, covering the image) animate to height:0 with a 0.3s stagger while
 * the sibling `.image-inner` scales to 1.3, both starting once the
 * section's midpoint crosses the bottom of the viewport ("50% bottom").
 */
export function useSectionTrigger<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    const slices = section.querySelectorAll<HTMLElement>(".uncover_slice");
    const image = section.querySelector<HTMLElement>(".image-inner");

    gsap.set(slices, { height: "100%" });

    const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: "50% bottom" } });
    tl.to(slices, { height: 0, ease: "power6.inOut", duration: 0.6, stagger: { each: 0.3 } }, "start").to(
      image,
      { scale: 1.3, duration: 1.5, ease: "power6.inOut" },
      "start",
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return ref;
}
