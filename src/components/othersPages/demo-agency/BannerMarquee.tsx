"use client";

import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

const defaultItems = ["Work Together", "Start Now", "Design Smart", "Grow Faster", "Build Bold"];

// wrap-banner-slide — icon+text combined "banner-inner" items, reused
// verbatim across ResumeSection (Home Agency), and the "dark" variant of
// TestimonialSection (/our-team, /our-pricing, /testimonials).
export default function BannerMarquee({ items = defaultItems }: { items?: string[] }) {
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction: "left", clone: 2 });

  return (
    <div className="wrap-banner-slide">
      <div className="infiniteslide" data-clone="2" data-style="left" ref={marqueeRef}>
        {items.map((text) => (
          <div className="banner-inner" key={text}>
            <i className="icon-icon-1" />
            <h3 className="text_primary">{text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
