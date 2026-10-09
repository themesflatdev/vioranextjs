"use client";

import { useState } from "react";
import Image from "next/image";
import { useSectionTrigger } from "@/hooks/useSectionTrigger";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import VideoModal from "@/components/common/VideoModal";

const marqueeTexts = ["Work Together", "Start Now", "Design Smart", "Grow Faster", "Build Bold"];

// Original markup interleaves text/icon/text/icon/..., ending on a text item
// (5 texts, 4 icons in between) — not a text-block then icon-block.
const marqueeItems = marqueeTexts.flatMap((text, index) =>
  index === 0 ? [{ type: "text" as const, text }] : [{ type: "icon" as const, text }, { type: "text" as const, text }],
);

// section-video — uncover reveal is the same effectSectionTriger mechanism
// as service-detail.html's hero image (useSectionTrigger), video popup
// reuses the home page's VideoModal. The marquee alternates a text item and
// an icon-only item, unlike wrap-partner's logo-only marquee, so it gets
// its own infiniteslide instance here rather than reusing PartnerMarquee.
export default function AboutVideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const sectionRef = useSectionTrigger<HTMLDivElement>();
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction: "left", clone: 2 });

  return (
    <div className="section-video">
      <div className="widget-video section-triger overflow-hidden" ref={sectionRef}>
        <Image
          className="image-inner"
          width={1410}
          height={680}
          src="/assets/images/demo-corporate/bg-video.jpg"
          alt="video"
        />
        <button type="button" onClick={() => setVideoOpen(true)} className="popup-youtube">
          <div className="icon">
            <i className="icon-Play" />
          </div>
        </button>
        <div className="uncover">
          <div className="uncover_slice" />
          <div className="uncover_slice" />
          <div className="uncover_slice" />
        </div>
      </div>
      <div className="wrap-infiniteslide">
        <div className="infiniteslide" data-clone="2" data-style="left" ref={marqueeRef}>
          {marqueeItems.map((item, index) => (
            <div className="marquee-item" key={`${item.type}-${index}`}>
              {item.type === "text" ? (
                <h3>{item.text}</h3>
              ) : (
                <div className="icon">
                  <i className="icon-icon-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <VideoModal youtubeId="MLpWrANjFbI" open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
