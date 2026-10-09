"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

/**
 * Wires a Swiper instance to the theme's own nav/dots elements (never
 * Swiper's auto-generated `.swiper-button-prev/next`/`.swiper-pagination`).
 *
 * Passing `navigation={true}` or a `pagination`/`navigation` object missing
 * `el`/`prevEl`/`nextEl` makes swiper-react's `needsNavigation`/
 * `needsPagination` (swiper/shared/update-swiper.mjs) return true, which
 * renders Swiper's own default arrow/dot elements alongside the theme's —
 * never do that. This hook always keeps `el`/`prevEl`/`nextEl` present
 * (ref.current, `null` on first render) so those checks stay false and no
 * extra DOM is ever injected.
 *
 * The commonly-used `onBeforeInit` pattern (mutate
 * `swiper.params.navigation.prevEl/nextEl` from the still-null ref before
 * init) does NOT actually bind — confirmed by inspecting the live Swiper
 * instance (`swiper.navigation.nextEl`/`swiper.pagination.el` stay unset)
 * on already-shipped sections using that exact pattern. `updateSwiper`
 * (same file) only re-runs navigation/pagination init when a *prop*
 * actually changes across a render — so this hook grabs the instance via
 * `onSwiper`, waits for refs to attach, then explicitly destroys and
 * re-inits the navigation/pagination modules against the real elements.
 */
export function useSwiperControls() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;

    const navigation = swiper.params.navigation;
    if (navigation && typeof navigation !== "boolean" && (prevRef.current || nextRef.current)) {
      if (prevRef.current) navigation.prevEl = prevRef.current;
      if (nextRef.current) navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }

    const pagination = swiper.params.pagination;
    if (pagination && typeof pagination !== "boolean" && dotsRef.current) {
      pagination.el = dotsRef.current;
      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, [swiper]);

  return { prevRef, nextRef, dotsRef, onSwiper: setSwiper };
}
