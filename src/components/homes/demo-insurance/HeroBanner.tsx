"use client";

import { useImageParallax } from "@/hooks/useImageParallax";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const supportItems = [
  "24/7 Claims Support",
  "Flexible Plans",
  "Trusted Advisors",
  "Financial Peace Of Mind",
];

// Video is "../video/medical-video.mp4" in the source HTML too — the
// theme has no dedicated insurance hero video, so it reuses the medical
// one as-is (confirmed with user, not a mistake to fix).
export default function HeroBanner() {
  const parallaxRef = useImageParallax<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="hero-banner-3 parallax-container overflow-hidden" ref={parallaxRef}>
      <div className="parallax-video">
        <video className="thumbs-video video-inner" muted autoPlay loop playsInline>
          <source src="/assets/video/medical-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="title text_white" ref={titleRef}>
                Protect What Matters Most
              </h1>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text-body-2 text_white mb_24" ref={descRef}>
                  Comprehensive insurance solutions for your family, health, business, and future —
                  with the trust you deserve.
                </p>
                <a href="#" className="tf-btn btn-hover-animate-2 wow fadeInUp">
                  <span>Get a Quote</span>
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="tf-container">
            <div className="wrap d-flex">
              <h6 className="font-main text_white flex-0 title">The Support You Deserve:</h6>
              <ul className="tf-grid-layout xl-col-4 sm-col-2">
                {supportItems.map((item) => (
                  <li className="d-flex align-items-center gap_8 text-button text_white" key={item}>
                    <i className="icon-CheckCircle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
