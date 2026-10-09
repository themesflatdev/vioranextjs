"use client";

import { useEffect, useState } from "react";

const FIXED_THRESHOLD = 300;

/**
 * Mirrors the theme's `headerFixed` behavior from assets/js/main.js: a plain
 * scroll-position threshold (not direction-aware like `headerSticky`).
 */
export function useHeaderFixed(threshold: number = FIXED_THRESHOLD) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isFixed;
}
