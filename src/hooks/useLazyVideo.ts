"use client";

import { useEffect, useRef, useState } from "react";

// Defers loading a below-the-fold <video>'s source until it nears the
// viewport, so the browser doesn't open a long-lived streaming connection
// for an autoplay/loop video the user hasn't scrolled to yet (that open
// connection blocks `networkidle`-based tooling and wastes bandwidth).
export default function useLazyVideo<T extends HTMLElement = HTMLDivElement>(rootMargin = "600px") {
  const containerRef = useRef<T>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  return { containerRef, shouldLoad };
}
