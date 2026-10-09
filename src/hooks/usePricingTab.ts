"use client";

import { useEffect, useRef, useState } from "react";

export type PricingPeriod = "monthly" | "yearly";

/**
 * Mirrors assets/js/main.js `tabSlide` (the sliding `.item-slide-effect`
 * pill behind the active tab, sized/positioned via the active tab's
 * offsetWidth/offsetLeft) combined with `initSwitchPriceValue` (the
 * Monthly/Yearly toggle). Price swapping itself is handled in React state
 * by the caller — this hook only owns the active period and keeps the
 * slide indicator in sync with it (including on resize).
 */
export function usePricingTab(initial: PricingPeriod = "monthly") {
  const [period, setPeriod] = useState<PricingPeriod>(initial);
  const tabSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = tabSlideRef.current;
    if (!wrap) return;
    const active = wrap.querySelector<HTMLElement>(".nav-tab-item.active");
    const effect = wrap.querySelector<HTMLElement>(".item-slide-effect");
    if (!active || !effect) return;

    const update = () => {
      effect.style.width = `${active.offsetWidth}px`;
      effect.style.transform = `translateX(${active.offsetLeft}px)`;
    };
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [period]);

  return { period, setPeriod, tabSlideRef };
}
