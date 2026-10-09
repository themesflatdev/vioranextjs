"use client";

import { useEffect, useRef } from "react";
import ImageCompare from "image-compare-viewer";

/**
 * Mirrors assets/js/image-compare-viewer.js — wraps `.img-viewer-compare-wrap`
 * (2 `<img>` children: before, after) with the real `image-compare-viewer`
 * library, same options (white control, circle handle with blur, no
 * smoothing, Before/After labels).
 */
export function useImageCompare<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // mount() returns void — never chain off its result (no destroy either;
    // the library offers no teardown API).
    new ImageCompare(element, {
      controlColor: "#FFFFFF",
      controlShadow: false,
      addCircle: true,
      addCircleBlur: true,
      smoothing: false,
      showLabels: true,
      labelOptions: { before: "Before", after: "After" },
    }).mount();

    const labelBefore = element.querySelector<HTMLElement>(".icv__label-before");
    const labelAfter = element.querySelector<HTMLElement>(".icv__label-after");
    const control = element.querySelector<HTMLElement>(".icv__control");

    const adjustLabelOpacity = () => {
      if (!labelBefore || !labelAfter || !control) return;
      const controlRect = control.getBoundingClientRect();
      const beforeRect = labelBefore.getBoundingClientRect();
      const afterRect = labelAfter.getBoundingClientRect();

      labelBefore.style.opacity =
        controlRect.right > beforeRect.left && controlRect.left < beforeRect.right ? "0" : "1";
      labelAfter.style.opacity =
        controlRect.left < afterRect.right && controlRect.right > afterRect.left ? "0" : "1";
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      adjustLabelOpacity();
    };

    element.addEventListener("mousemove", adjustLabelOpacity);
    element.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      element.removeEventListener("mousemove", adjustLabelOpacity);
      element.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return ref;
}
