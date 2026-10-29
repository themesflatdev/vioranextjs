"use client";

import { useEffect, useState } from "react";
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
 * (state, `null` on first render, the real DOM node from then on via a
 * callback ref) so those checks stay false and no extra DOM is ever
 * injected.
 *
 * The commonly-used `onBeforeInit` pattern (mutate
 * `swiper.params.navigation.prevEl/nextEl` from the still-null ref before
 * init) does NOT actually bind — confirmed by inspecting the live Swiper
 * instance (`swiper.navigation.nextEl`/`swiper.pagination.el` stay unset)
 * on already-shipped sections using that exact pattern. `updateSwiper`
 * (same file) only re-runs navigation/pagination init when a *prop*
 * actually changes across a render — so this hook grabs the instance via
 * `onSwiper`, waits for the callback refs to attach, then explicitly
 * destroys and re-inits the navigation/pagination modules against the
 * real elements.
 */
export function useSwiperControls() {
  const [prevEl, prevRef] = useState<HTMLDivElement | null>(null);
  const [nextEl, nextRef] = useState<HTMLDivElement | null>(null);
  const [dotsEl, dotsRef] = useState<HTMLDivElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;

    const navigation = swiper.params.navigation;
    if (navigation && typeof navigation !== "boolean" && (prevEl || nextEl)) {
      // Swiper's navigation module only picks up prevEl/nextEl by mutating
      // its own params object, then destroy()/init() to rebind — there is
      // no setter-based API for this.
      // eslint-disable-next-line react-hooks/immutability
      if (prevEl) navigation.prevEl = prevEl;
      if (nextEl) navigation.nextEl = nextEl;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }

    const pagination = swiper.params.pagination;
    if (pagination && typeof pagination !== "boolean" && dotsEl) {
      pagination.el = dotsEl;
      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, [swiper, prevEl, nextEl, dotsEl]);

  return { prevRef, nextRef, dotsRef, prevEl, nextEl, dotsEl, onSwiper: setSwiper };
}
