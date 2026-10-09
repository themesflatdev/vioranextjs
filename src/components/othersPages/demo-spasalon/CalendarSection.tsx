"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// Static decorative image — not an interactive calendar widget (confirmed
// against the source HTML, which embeds a plain <img>, no calendar JS).
export default function CalendarSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-calendar tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_16 text-center mb_40">
          <div className="sub text-label text_primary-color text-uppercase wow fadeInUp">Calendar</div>
          <h2 className="title text-nowrap split-text effect-right" ref={titleRef}>
            Find Your Perfect Time
          </h2>
        </div>
        <div className="wrap-calendar">
          <Image loading="lazy" width={1290} height={865} src="/assets/images/demo-spasalon/calendar.jpg" alt="calendar" />
        </div>
      </div>
    </div>
  );
}
