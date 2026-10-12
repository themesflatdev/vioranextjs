"use client";

import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { slideItems } from "@/data/landing/banner";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

function MarqueeColumn({ hide, direction }: { hide: string; direction: "up" | "down" }) {
  const ref = useInfiniteSlide<HTMLDivElement>({ clone: 2, direction });
  return (
    <div ref={ref} className={`infiniteslide ${hide}`.trim()} data-clone="2" data-style={direction}>
      {slideItems.map((item) => (
        <div className="marquee-item" key={item.src}>
          <Image src={item.src} alt="slide-item" width={item.width} height={item.height} />
        </div>
      ))}
    </div>
  );
}

export default function BannerSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");

  return (
    <div className="section-banner-landing">
      <div className="wrap-slide tf-grid-layout lg-col-3 md-col-2 gap_30">
        <MarqueeColumn hide="lg-hide" direction="up" />
        <MarqueeColumn hide="md-hide" direction="down" />
        <MarqueeColumn hide="" direction="up" />
      </div>
      <div className="content text-center">
        <h1 ref={titleRef} className="title text_white text-capitalize mb_40 split-text split-lines-rotation-x">
          Start designing with ready blocks and elements.
        </h1>
        <a href="#" className="tf-btn btn-hover-animate-2 mx-auto wow fadeInUp" data-wow-delay="0.4s">
          <span>View Demo</span>
          <span className="bg-effect" />
        </a>
      </div>
    </div>
  );
}
