"use client";

import { useEffect, useRef } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * Back-to-top button with a circular scroll-progress ring.
 *
 * Replaces the original `.progress-wrap` block + `goTop()` in assets/js/main.js
 * (identical markup on all 93 pages). Behaviour copied 1:1:
 *  - ring stroke-dashoffset = pathLength - scroll * pathLength / (docHeight - viewport)
 *  - `.active-progress` once window scrollY > 200
 *  - click → scroll to top instantly (original animate duration is 0)
 * Rendered inside each niche wrapper (`.niche-*`) — NOT in the root layout —
 * so the CSS variables (--White / --Text-primary / --Primary) of that niche
 * apply, and outside `#smooth-wrapper` so `position: fixed` isn't broken by
 * ScrollSmoother's transform.
 */
export default function ScrollToTop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    if (!wrap || !path) return;
    const pathLength = path.getTotalLength();
    path.style.transition = "none";
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 10ms linear";

    const update = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? pathLength - (scroll * pathLength) / height : pathLength;
      path.style.strokeDashoffset = `${progress}`;
      wrap.classList.toggle("active-progress", scroll > 200);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTop = () => {
    try {
      ScrollSmoother.get()?.scrollTo(0, false);
    } catch {
      /* smoother not created on this page */
    }
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="progress-wrap"
      ref={wrapRef}
      role="button"
      tabIndex={0}
      aria-label="Back to top"
      onClick={goTop}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goTop();
        }
      }}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
