"use client";

import { useScrollBanners } from "@/hooks/useScrollBanners";

const TEXT = "Welcome to Viora Your Trusted Energy Solutions Partner";

export default function ScrollingBannerSection() {
  const ref = useScrollBanners<HTMLDivElement>();

  return (
    <div ref={ref} className="banner-container clone-text">
      <div className="banner-stripe mb_40">
        <div className="text-container scrolling-text effect-right">
          <span className="banner-text text-strock">{TEXT}</span>
        </div>
      </div>
      <div className="banner-stripe mb_40">
        <div className="text-container scrolling-text effect-left">
          <span className="banner-text text_primary">
            {TEXT} {TEXT}
          </span>
        </div>
      </div>
      <div className="banner-stripe">
        <div className="text-container scrolling-text effect-right">
          <span className="banner-text text-strock">{TEXT}</span>
        </div>
      </div>
    </div>
  );
}
