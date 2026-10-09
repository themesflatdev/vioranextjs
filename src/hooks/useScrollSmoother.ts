"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * Mirrors assets/js/gsapAnimate.js `effectScrollSmoother` — wraps
 * #smooth-wrapper/#smooth-content and turns on `effects: true`, which is
 * what makes `data-speed` parallax attributes (e.g. the About video
 * thumbnail) work anywhere inside the wrapper.
 */
export function useScrollSmoother() {
  useEffect(() => {
    if (!document.getElementById("smooth-wrapper")) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    // Sections mounted inside {children} create their own ScrollTrigger
    // instances in child effects, which React runs *before* this parent
    // effect — so refresh once more here (and again after images finish
    // loading) so trigger start/end positions match the final smoothed
    // layout instead of whatever was measured pre-smoother.
    ScrollTrigger.refresh();
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      smoother.kill();
    };
  }, []);
}
