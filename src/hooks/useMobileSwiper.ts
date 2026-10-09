"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

type MobileSwiperOptions = {
  screen: number;
  preview: number;
  spacing: number;
};

/**
 * Mirrors assets/js/carousel.js `.tf-sw-mobile` handling — a real Swiper
 * instance only exists while `matchMedia("only screen and (max-width:
 * {screen}px)")` matches; above that breakpoint it is destroyed(true, true)
 * and the inline styles Swiper added to .swiper-wrapper/.swiper-slide are
 * stripped so the theme's CSS grid (tf-grid-layout-sm...) takes over,
 * exactly like the original. Re-evaluated on every resize. Vanilla Swiper
 * on top of markup already rendered by React — not the <Swiper> component.
 */
export function useMobileSwiper<T extends HTMLElement = HTMLElement>({ screen, preview, spacing }: MobileSwiperOptions) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let swiper: Swiper | null = null;

    const initSwiper = () => {
      const matches = window.matchMedia(`only screen and (max-width: ${screen}px)`).matches;
      if (matches) {
        if (!swiper) {
          const paginationEl = container.querySelector<HTMLElement>(".sw-pagination-mb");
          swiper = new Swiper(container, {
            modules: [Pagination],
            slidesPerView: preview,
            spaceBetween: spacing,
            speed: 1000,
            pagination: paginationEl ? { el: paginationEl, clickable: true } : undefined,
          });
        }
      } else if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
        container.querySelectorAll<HTMLElement>(".swiper-wrapper, .swiper-slide").forEach((el) => {
          el.removeAttribute("style");
        });
      }
    };

    initSwiper();
    window.addEventListener("resize", initSwiper);

    return () => {
      window.removeEventListener("resize", initSwiper);
      swiper?.destroy(true, true);
    };
  }, [screen, preview, spacing]);

  return ref;
}
