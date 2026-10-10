"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function FarmingVideoSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");

  return (
    <div className="section-farming-video tf-spacing-1 pb-0">
      <div className="tf-container">
        <div className="heading-section mb_48 text-center">
          <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_16 lh-16">
            FARMING VIDEO
          </div>
          <h2 ref={titleRef} className="title split-text effect-scale">
            Innovating Farming <br className="xl-hide" />
            Technology Meets Tradition
          </h2>
        </div>
      </div>
      <video className="thumb thumbs-video" muted autoPlay loop playsInline>
        <source src="/assets/video/video-agriculture-farming.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
