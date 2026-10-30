"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export type SplitTextEffect =
  | "fade"
  | "right"
  | "left"
  | "up"
  | "down"
  | "rotate"
  | "scale"
  | "lines-transform"
  | "lines-rotation-x"
  | "words-scale"
  | "blur-fade";

/**
 * Mirrors assets/js/gsapAnimate.js `animation_text` — real GSAP SplitText
 * reveal driven by ScrollTrigger (start "top 86%", plays once, never
 * reverses back). Each branch matches the original's per-effect settings
 * exactly (duration/stagger/ease/offsets), not an approximation.
 */
export function useSplitTextReveal<T extends HTMLElement = HTMLElement>(effect: SplitTextEffect) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);
    // SplitText's default accessible:true sets aria-label on `target` — give it
    // role="text" so that's valid ARIA (a bare div/p doesn't support naming).
    target.setAttribute("role", "text");
    const split = new SplitText(target, { type: "words, chars", lineThreshold: 0.5, linesClass: "split-line" });
    let splitSet: Element[] = split.chars;
    gsap.set(target, { perspective: 400 });

    const scrollTrigger = {
      trigger: target,
      start: "top 86%",
      toggleActions: "play none none reverse",
      once: true,
    };
    const settings: gsap.TweenVars = { scrollTrigger, duration: 0.9, stagger: 0.02, ease: "power3.out" };
    let tween: gsap.core.Tween;

    switch (effect) {
      case "fade":
        tween = gsap.from(splitSet, { ...settings, opacity: 0 });
        break;
      case "right":
        tween = gsap.from(splitSet, { ...settings, opacity: 0, x: 50 });
        break;
      case "left":
        tween = gsap.from(splitSet, { ...settings, opacity: 0, x: -50 });
        break;
      case "up":
        tween = gsap.from(splitSet, { ...settings, opacity: 0, y: 20 });
        break;
      case "down":
        tween = gsap.from(splitSet, { ...settings, opacity: 0, y: -80 });
        break;
      case "rotate":
        tween = gsap.from(splitSet, { ...settings, opacity: 0, rotateX: "50deg" });
        break;
      case "scale":
        tween = gsap.from(splitSet, { ...settings, opacity: 0, scale: 0.5 });
        break;
      case "lines-transform":
        split.split({ type: "lines", lineThreshold: 0.5, linesClass: "split-line" });
        splitSet = split.lines;
        tween = gsap.from(splitSet, { ...settings, opacity: 0, stagger: 0.2, yPercent: 100, autoAlpha: 0 });
        break;
      case "lines-rotation-x":
        split.split({ type: "lines", lineThreshold: 0.5, linesClass: "split-line" });
        splitSet = split.lines;
        tween = gsap.from(splitSet, {
          ...settings,
          opacity: 0,
          stagger: 0.2,
          rotationX: -120,
          transformOrigin: "top center -50",
        });
        break;
      case "words-scale": {
        split.split({ type: "words" });
        splitSet = split.words;
        splitSet.forEach((el, i) => {
          gsap.set(el, { opacity: 0, scale: i % 2 === 0 ? 0 : 2, force3D: true });
        });
        tween = gsap.to(splitSet, {
          scrollTrigger,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.05,
        });
        break;
      }
      case "blur-fade":
        split.split({ type: "words" });
        splitSet = split.words;
        tween = gsap.fromTo(
          splitSet,
          { opacity: 0, filter: "blur(10px)", y: 20 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger },
        );
        break;
    }

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split.revert();
    };
  }, [effect]);

  return ref;
}
