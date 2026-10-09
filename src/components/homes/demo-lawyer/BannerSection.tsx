"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function BannerSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-banner-12 tf-spacing-1">
      <div className="wrap overflow-hidden">
        <div
          className="banner"
          data-speed="0.7"
          data-background="/assets/images/demo-lawyer/banner-1.jpg"
          style={{ backgroundImage: "url(/assets/images/demo-lawyer/banner-1.jpg)" }}
        />
        <div className="tf-container">
          <div className="box">
            <div className="heading-section d-grid gap_16 mb_40">
              <div className="letter-spacing-1 text-label lh-16 text_muted text-uppercase wow fadeInUp">
                Professional Legal Help
              </div>
              <h3 ref={titleRef} className="split-text effect-right">
                Speak Directly With Our <span className="text_primary-color">Legal Team</span>
              </h3>
              <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
                Get straight answers from our experienced legal team — no jargon, no delays.
              </p>
            </div>
            <Link
              href="#"
              className="tf-btn btn-hover-animate-2 btn-bg-secondary rounded-0 btn-px-28 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <span>Contact Us</span>
              <span className="bg-effect" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
