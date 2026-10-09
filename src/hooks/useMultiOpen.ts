"use client";

import { useState } from "react";

/**
 * Independent multi-open toggle — each key opens/closes on its own,
 * unlike `useAccordion` (single-open, opening one closes the rest).
 * Matches the footer mobile accordion columns (`.footer-col-block.open`),
 * which expand independently of one another.
 */
export function useMultiOpen<TKey extends string = string>(initialOpen: TKey[] = []) {
  const [openKeys, setOpenKeys] = useState<Set<TKey>>(new Set(initialOpen));

  const toggle = (key: TKey) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return { isOpen: (key: TKey) => openKeys.has(key), toggle };
}
