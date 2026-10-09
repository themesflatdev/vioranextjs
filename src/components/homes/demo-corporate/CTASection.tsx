"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function CTASection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-cta tf-spacing-1">
      <div className="tf-container">
        <div className="content-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading">
                <h2 className="title" ref={titleRef}>Ready To Take Your Business Further?</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <p className="text-body-2 mb_30" ref={descRef}>
                  Let&rsquo;s discuss how we can help you achieve your business goals.
                </p>
                <div className="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp">
                  <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary">
                    <span>Schedule A Free Consultation</span>
                    <span />
                  </a>
                  <a href="#" className="tf-btn btn-hover-animate-border style-border-2">
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
  );
}
