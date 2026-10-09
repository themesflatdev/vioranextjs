"use client";

import { useRef, useState } from "react";

/**
 * Single-open-at-a-time accordion, mirroring Bootstrap's collapse +
 * `data-bs-parent` behavior (opening one item closes any other). All items
 * start closed unless `initialOpen` is passed.
 *
 * `debounceMs` (opt-in, default 0 = off) mirrors assets/js/main.js
 * `accordionActive`'s `isProcessing` guard used by `.action_click` FAQ
 * accordions specifically (500ms) — ignores further toggles until the
 * window elapses, so rapid clicks don't re-trigger the collapse mid-
 * transition. Mobile-nav-style accordions (`.menu-item-has-children-mobile`,
 * plain Bootstrap collapse in the original) never had this guard — leave
 * their callers on the default 0 so this doesn't change their behavior.
 */
export function useAccordion<TKey extends string = string>(
  initialOpen: TKey | null = null,
  debounceMs = 0,
) {
  const [openKey, setOpenKey] = useState<TKey | null>(initialOpen);
  const isProcessing = useRef(false);

  const toggle = (key: TKey) => {
    if (debounceMs > 0) {
      if (isProcessing.current) return;
      isProcessing.current = true;
      setTimeout(() => {
        isProcessing.current = false;
      }, debounceMs);
    }
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return { openKey, toggle, isOpen: (key: TKey) => openKey === key };
}
