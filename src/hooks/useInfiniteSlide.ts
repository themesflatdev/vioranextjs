"use client";

import { useEffect, useRef } from "react";

type Direction = "left" | "right" | "up" | "down";

type Options = {
  speed?: number;
  direction?: Direction;
  clone?: number;
  pauseOnHover?: boolean;
};

/**
 * Mirrors assets/js/infinityslide.js `$.fn.infiniteslide` — clones the
 * marquee's children `clone` times, measures the width (or height for
 * up/down) of the original set, then animates a translate3d loop whose
 * duration is derived from that measured size / speed (px per second),
 * so the visual speed matches the original regardless of content length.
 */
export function useInfiniteSlide<T extends HTMLElement = HTMLDivElement>({
  speed = 50,
  direction = "left",
  clone = 4,
  pauseOnHover = true,
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isVertical = direction === "up" || direction === "down";
    const styleId = `infiniteslide-${Math.random().toString(36).slice(2)}`;
    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);

    if (el.parentElement) el.parentElement.style.overflow = "hidden";
    el.style.display = "flex";
    el.style.flexWrap = "nowrap";
    el.style.alignItems = "center";
    el.style.flexDirection = isVertical ? "column" : "row";

    const originalChildren = Array.from(el.children) as HTMLElement[];
    originalChildren.forEach((child) => {
      child.style.flex = "none";
      child.style.display = "block";
    });

    for (let i = 0; i < clone; i++) {
      originalChildren.forEach((child) => {
        const cloned = child.cloneNode(true) as HTMLElement;
        cloned.classList.add("infiniteslide_clone");
        el.appendChild(cloned);
      });
    }

    const measure = () => {
      let size = 0;
      originalChildren.forEach((child) => {
        const rect = child.getBoundingClientRect();
        const style = getComputedStyle(child);
        const margin = isVertical
          ? parseFloat(style.marginTop) + parseFloat(style.marginBottom)
          : parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        size += (isVertical ? rect.height : rect.width) + margin;
      });
      return size;
    };

    const apply = () => {
      const num = measure();
      const translate = isVertical ? `0,-${num}px,0` : `-${num}px,0,0`;
      styleTag.textContent = `@keyframes ${styleId}{from{transform:translate3d(0,0,0);}to{transform:translate3d(${translate});}}`;
      const reverse = direction === "right" || direction === "down" ? " reverse" : "";
      el.style.animation = `${styleId} ${num / speed}s linear 0s infinite${reverse}`;
    };

    apply();
    window.addEventListener("resize", apply);

    const handleEnter = () => {
      if (pauseOnHover) el.style.animationPlayState = "paused";
    };
    const handleLeave = () => {
      if (pauseOnHover) el.style.animationPlayState = "running";
    };
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("resize", apply);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      styleTag.remove();
      el.querySelectorAll(".infiniteslide_clone").forEach((n) => n.remove());
    };
  }, [speed, direction, clone, pauseOnHover]);

  return ref;
}
