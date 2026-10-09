"use client";

import { useEffect } from "react";

type WowInstance = { init: () => void };
type WowConstructor = new (options: {
  boxClass?: string;
  animateClass?: string;
  offset?: number;
  live?: boolean;
}) => WowInstance;

declare global {
  interface Window {
    WOW?: WowConstructor;
  }
}

/**
 * Mirrors assets/js/main.js `wow` — loads the real assets/js/wow.min.js
 * (via next/script in the root layout, since the UMD build only sets
 * `window.WOW` and doesn't produce a static export bundlers can resolve)
 * and initializes it with the exact same options (offset 30, live DOM
 * watching, honors data-wow-delay/data-wow-duration on `.wow` elements).
 * The script loads with strategy="afterInteractive" (not beforeInteractive —
 * that strategy triggers React 19's "Encountered a script tag while
 * rendering React component" dev-only warning in Next.js 16); the poll
 * below already handles window.WOW not being ready yet on mount.
 */
export function useWow() {
  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.WOW) return;
      new window.WOW({ boxClass: "wow", animateClass: "animated", offset: 30, live: true }).init();
    };

    if (window.WOW) {
      init();
    } else {
      const id = window.setInterval(() => {
        if (window.WOW) {
          window.clearInterval(id);
          init();
        }
      }, 50);
      return () => {
        cancelled = true;
        window.clearInterval(id);
      };
    }
  }, []);
}
