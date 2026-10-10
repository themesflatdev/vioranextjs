"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function NewsletterSection() {
  const headingRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-newsletter-3 tf-spacing-1">
      <div className="position-relative">
        <div className="banner">
          <div
            data-speed="0.7"
            className="bg-banner"
            data-background="/assets/images/demo-carservices/newletters-1.jpg"
            style={{ backgroundImage: "url(/assets/images/demo-carservices/newletters-1.jpg)" }}
          ></div>
        </div>
        <div className="tf-container">
          <div className="content-inner">
            <div className="content">
              <div className="heading">
                {/* SỬA: "Subscribe To Newletters" (thiếu chữ "s") → đúng chính tả; tên file ảnh giữ nguyên */}
                <h3 ref={headingRef} className="mb_16 split-text effect-blur-fade">
                  Subscribe To Newsletters
                </h3>
                <p className="text-body-2 text_white wow fadeInUp" data-wow-delay="0.2s">
                  Stay ahead with expert car care tips, service reminders, and exclusive
                  offers—because your car deserves the best attention on every journey.
                </p>
              </div>
              <form
                className="form-newsletter style-1 wow fadeInUp"
                data-wow-delay="0.2s"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="wrap gap_12">
                  <fieldset className="position-relative">
                    <input
                      type="email"
                      className="tb-my-input style-border"
                      name="email"
                      placeholder="Enter your e-mail"
                      required
                    />
                  </fieldset>
                  <button name="submit" type="submit" className="tf-btn btn-bg-primary-2 btn-hover-animate-2 btn-px-32">
                    <span className="text-body-1 fw-6">Subscribe</span>
                  </button>
                </div>
              </form>
              <span className="dot dot-top-left"></span>
              <span className="dot dot-top-right"></span>
              <span className="dot dot-bot-left"></span>
              <span className="dot dot-bot-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
