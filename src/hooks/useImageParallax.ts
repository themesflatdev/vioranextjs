"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Mirrors assets/js/gsapAnimate.js `imageParallax` — the ref goes on the
 * `.parallax-container`; inside it, the `.image-inner`/`.video-inner`
 * element scrubs from 0 to yPercent 40 as the container crosses the
 * viewport ("top top" -> "bottom top").
 */
export function useImageParallax<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const media = container.querySelector<HTMLElement>(".image-inner, .video-inner");
    if (!media) return;

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.to(media, {
      yPercent: 40,
      ease: "none",
      scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: true },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return ref;
}
