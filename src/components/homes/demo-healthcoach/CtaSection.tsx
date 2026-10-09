"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function CtaSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-cta-4 tf-spacing-1">
      <div className="tf-container w-1840">
        <div className="wrap">
          <div className="content-inner tf-container medium">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading">
                  <h2 className="title text_primary-color split-text effect-scale" ref={titleRef}>
                    Support That Meets You Where You Are
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <p className="text-body-2 mb_32 split-text split-lines-transform" ref={descRef}>
                    Let&rsquo;s chat about helping you feel stronger and in control.
                  </p>
                  <div className="wrap-btn d-flex gap_20 wow fadeInUp">
                    <a href="#" className="tf-btn btn-px-32 btn-hover-animate-2 btn-bg-primary-2">
                      <span>Schedule A Free Consultation</span>
                      <span />
                    </a>
                    <a href="#" className="tf-btn btn-hover-animate-border style-border btn-px-32">
                      <span>Call Us: 315-666-6688</span>
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
