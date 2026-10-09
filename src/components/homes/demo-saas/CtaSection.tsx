"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import ImageDistortionBox from "./ImageDistortionBox";

export default function CtaSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-cta-3 tf-spacing-1 pt-0">
      <div className="tf-container medium">
        <ImageDistortionBox background="/assets/images/demo-saas/bg-1.jpg" className="box tf-image-distortion">
          <h2 className="mb_12 title split-text effect-blur-fade position-relative z-5" ref={titleRef}>
            Ready To Get Started?
          </h2>
          <p
            className="text-body-2 text_white mb_40 split-text split-lines-transform position-relative z-5"
            ref={descRef}
          >
            Create your free account in minutes. No credit card needed.
          </p>
          <form
            className="form-newsletter style-1 wow fadeInUp position-relative z-5"
            data-wow-delay="0.4s"
            action="#"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="wrap gap_12">
              <fieldset className="position-relative">
                <input type="email" className="tb-my-input style-border" name="email" placeholder="Enter Your Email" required />
              </fieldset>
              <button name="submit" type="submit" className="tf-btn btn-switch-text">
                <span>
                  <span className="btn-double-text text-body-1 fw-6" data-text="Get Started">
                    Get Started
                  </span>
                </span>
              </button>
            </div>
          </form>
        </ImageDistortionBox>
      </div>
    </div>
  );
}
