"use client";

import { useEffect, useRef } from "react";
import Atropos from "atropos";

/**
 * Mirrors assets/js/main.js `handleAtropos` — `Atropos({ el, shadow: true,
 * highlight: true })` for each `.my-atropos` element, destroyed on
 * unmount/route change so re-mounting (e.g. switching niches) never leaks
 * instances or throws.
 */
export function useAtropos<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const instance = Atropos({ el, shadow: true, highlight: true });
    return () => instance.destroy();
  }, []);

  return ref;
}
