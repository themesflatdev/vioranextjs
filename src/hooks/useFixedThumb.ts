"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `fixedThumb` — only active from 992px up
 * (gsap.matchMedia "(min-width: 992px)"). The ref goes on `.fixed-thumb-wrap`;
 * inside it, the `.fixed-thumb` element is GSAP-pinned (not CSS position:
 * sticky) while the wrapper scrolls past: start "top center-={startOffset}"
 * (data-startoffset on the thumb element, default 320), end "bottom 65%",
 * pinSpacing false, scrub 1.
 */
export function useFixedThumb<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;
    const thumb = wrap.querySelector<HTMLElement>(".fixed-thumb");
    if (!thumb) return;

    gsap.registerPlugin(ScrollTrigger);
    const startOffset = Number(thumb.dataset.startoffset) || 320;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: `top center-=${startOffset}`,
          end: "bottom 65%",
          pin: thumb,
          pinSpacing: false,
          scrub: 1,
        },
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return ref;
}
