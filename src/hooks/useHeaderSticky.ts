"use client";

import { useEffect, useRef, useState } from "react";

const THRESHOLD = 400;
const DELTA = 10;

/**
 * Mirrors the theme's `headerSticky` behavior from assets/js/main.js:
 * direction-aware (scrolling down hides it, scrolling up reveals it), with a
 * 10px buffer to avoid jitter, only active once scrollTop >= 400. This is a
 * DIFFERENT mechanism from `useHeaderFixed` (plain threshold, no direction) —
 * check which class the niche's header actually uses (`header-sticky` vs
 * `header-fixed`) before picking a hook, do not assume from the niche name.
 */
export function useHeaderSticky() {
  const [isSticky, setIsSticky] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop < THRESHOLD) {
        setIsSticky(false);
        lastScrollTop.current = scrollTop;
        return;
      }

      if (scrollTop > lastScrollTop.current + DELTA) {
        setIsSticky(false);
      } else if (scrollTop < lastScrollTop.current - DELTA) {
        setIsSticky(true);
      }

      lastScrollTop.current = scrollTop;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isSticky;
}
