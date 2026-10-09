"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function BannerSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-banner-3 tf-spacing-1">
      <div className="tf-container w-1840 position-relative">
        <div className="banner">
          <div
            className="bg-img"
            data-speed="0.8"
            data-lag="0"
            data-background="/assets/images/demo-healthcoach/banner-2.jpg"
            style={{ backgroundImage: "url(/assets/images/demo-healthcoach/banner-2.jpg)" }}
          />
        </div>
        <div className="content text-center">
          <div>
            <h2 className="text_white mb_40 title split-text effect-right" ref={titleRef}>
              Support Your Body, The Right Way.
            </h2>
            <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-white-2 mx-auto btn-px-32 wow fadeInUp" data-wow-delay="0.4s">
              <span>Get The Right Plan</span>
              <span />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
