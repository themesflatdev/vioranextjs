"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// `banner-request.jpg` uses the ScrollSmoother `data-speed` parallax
// mechanism (same as WhyChooseSection's why-3.jpg), not useImageParallax.
export default function RequestSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-rotation-x");

  return (
    <div className="section-request">
      <div className="thumbs overflow-hidden">
        <Image
          data-speed="0.8"
          data-lag="0"
          loading="eager"
          width={1920}
          height={975}
          src="/assets/images/demo-insurance/banner-request.jpg"
          alt="request"
        />
      </div>
      <div className="box-request">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="box-left">
                <h2 className="text_white mb_36" ref={titleRef}>
                  Get Your Free Insurance Quote Today
                </h2>
                <p className="text_white text-body-default" ref={descRef}>
                  Fill out the quick form our experts will contact you to find the best coverage for
                  your needs. No pressure, no hidden fees. Just honest advice.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="form-request" onSubmit={(e) => e.preventDefault()}>
                <div className="heading mb_24 text-center mb_32">
                  <h5 className="mb_8">Let&apos;s Talk Or Ask Us Anything</h5>
                  <p className="text-body-default text_secondary">
                    Fill out the form and we&apos;ll be in touch soon.
                  </p>
                </div>
                <div className="wrap d-grid gap_8 mb_32">
                  <fieldset>
                    <input id="Name" type="text" placeholder="Full name" name="text" required />
                  </fieldset>
                  <fieldset>
                    <input id="email" type="email" placeholder="Email address" name="email" required />
                  </fieldset>
                  <fieldset>
                    <input id="phone" type="number" placeholder="Phone Number" name="text" required />
                  </fieldset>
                  <fieldset>
                    <textarea id="comment" rows={4} placeholder="How can we help you?" required />
                  </fieldset>
                </div>
                <button className="tf-btn btn-hover-animate-2 btn-bg-1 btn-px-24" type="submit">
                  <span>Submit Request</span>
                  <span className="bg-effect" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
