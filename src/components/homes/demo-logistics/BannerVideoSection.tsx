"use client";

import useLazyVideo from "@/hooks/useLazyVideo";

export default function BannerVideoSection() {
  const { containerRef, shouldLoad } = useLazyVideo<HTMLDivElement>();

  return (
    <div className="section-banner-9" ref={containerRef}>
      <video className="thumb thumbs-video" muted autoPlay loop playsInline preload="none">
        {shouldLoad && <source src="/assets/video/video-logistics.mp4" type="video/mp4" />}
      </video>
      <div className="content-inner">
        <div className="tf-container">
          <div className="heading-section mb_40 text-center">
            <h2 className="text_white mb_16 split-text effect-right">
              Start Your Hassle-Free Move
            </h2>
            <p className="text-body-default text_white wow fadeInUp" data-wow-delay="0.2s">
              Fast, reliable, and customized logistics solutions at your fingertips.
            </p>
          </div>
          <a
            href="#"
            className="tf-btn btn-bg-primary-2 btn-hover-animate-2 mx-auto wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <span>Get A Free Quote</span>
            <span className="bg-effect"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
