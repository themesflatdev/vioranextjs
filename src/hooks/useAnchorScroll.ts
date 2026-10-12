"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * Mirrors assets/js/main.js `oneNavOnePage` — `.nav_link` click handler on
 * `.section-onepage` pages (the landing page only): `e.preventDefault()`,
 * jump to `target offset.top - headerHeight` via `$("html,body").animate(
 * {scrollTop}, 0)` (duration 0 = instant, not actually animated). Reimplemented
 * against ScrollSmoother (which owns the real scroll position here) instead of
 * `window.scrollTo`, same instant jump + header-height offset.
 */
export function useAnchorScroll() {
  return (hash: string) => {
    const target = document.querySelector<HTMLElement>(hash);
    if (!target) return;

    const header = document.querySelector<HTMLElement>(".header");
    const headerHeight = header?.offsetHeight ?? 0;
    const smoother = ScrollSmoother.get();

    if (smoother) {
      const targetY = smoother.scrollTop() + target.getBoundingClientRect().top - headerHeight;
      smoother.scrollTo(targetY, false);
    } else {
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo(0, targetY);
    }
  };
}
