"use client";

import type { FormEvent } from "react";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// Form không có xử lý JS trong main.js gốc -> chỉ preventDefault, không
// alert/điều hướng. id="fisrtName" (gõ sai gốc) SỬA thành "firstName".
export default function WorkTogetherSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("left");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="section-work-together">
      <div className="banner overflow-hidden">
        <div
          className="bg-banner"
          data-speed="0.8"
          data-background="/assets/images/demo-construction/section-contact.jpg"
          style={{ backgroundImage: "url(/assets/images/demo-construction/section-contact.jpg)" }}
        />
      </div>
      <div className="tf-container tf-spacing-1">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="box-info">
              <div className="heading-section d-grid gap_12 mb_32">
                <div
                  className="sub lh-16 text-label text_primary-color text-uppercase split-text effect-left mb_4"
                  ref={subRef}
                >
                  Let&rsquo;s Work Together
                </div>
                <h2 className="title split-text effect-blur-fade" ref={titleRef}>
                  Reach Out to Us
                </h2>
                <p className="desc text-body-2 text_secondary split-text split-lines-transform" ref={descRef}>
                  We&rsquo;re here to assist with any questions, concerns, or inquiries&mdash;contact us today!
                </p>
              </div>
              <ul className="info-list d-grid gap_24">
                <li className="wow fadeInUp">
                  <div className="text-button mb_8 text_primary">PHONE:</div>
                  <h5>1-555-678-8888</h5>
                </li>
                <li className="wow fadeInUp">
                  <div className="text-button mb_8 text_primary">EMAIL:</div>
                  <h5>
                    <a href="#" className="link text-uppercase">
                      themesflat@gmail.com
                    </a>
                  </h5>
                </li>
                <li className="wow fadeInUp">
                  <div className="text-button mb_8 text_primary">ADDRESS:</div>
                  <h5 className="text-uppercase">101 E 129th St, East Chicago, 2nd Floor, NY</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <form className="form-contact" onSubmit={handleSubmit}>
              <div className="wrap mb_39">
                <div className="tf-grid-layout md-col-2 gap_20 mb_28">
                  <fieldset>
                    <input
                      className="style-line-bottom"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      name="text"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      className="style-line-bottom"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      name="text"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                </div>
                <div className="tf-grid-layout md-col-2 gap_20 mb_28">
                  <fieldset>
                    <input
                      className="style-line-bottom"
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      className="style-line-bottom"
                      id="phone"
                      type="number"
                      placeholder="Phone Number"
                      name="text"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                </div>
                <fieldset>
                  <textarea
                    id="comment"
                    className="style-line-bottom"
                    rows={4}
                    placeholder="Your Message"
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <button className="tf-btn btn-hover-animate-2 btn-bg-primary-2 rounded-0 btn-px-32" type="submit">
                <span>Send Message</span>
                <span className="bg-effect" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
