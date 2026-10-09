"use client";

import { useState } from "react";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { services } from "@/data/demo-agency/services";

// nice-select options originally were placeholder "option 1/2/3" text
// unrelated to an agency's services (a real content bug, see
// agency-pages-menu-only.md) — now filled in for real with the agency's
// actual services, per the dedicated /contact pass.
const serviceOptions = [
  { value: "", label: "Choose an option" },
  ...services.map((service) => ({ value: service.slug, label: service.title })),
];

type ContactTeaser3Props = {
  // "has-bg" (default) = wrapper "v2 has-bg tf-spacing-1 bg-linear-color",
  // plain ".wrap" — matches /our-team, /our-pricing, /testimonials, /faqs,
  // /team-detail/[slug] and /service-detail/[slug]. "plain" = services.html's
  // own variant: wrapper just "v2 tf-spacing-1", ".wrap bg-dark-color"
  // instead — confirmed as a real per-page difference, not guessed.
  variant?: "has-bg" | "plain";
};

// section-contact-3 — placeholder structure reused verbatim (unfixed
// content) by /our-team, /our-pricing, /testimonials, /faqs, /services and
// /service-detail/[slug]; the real content pass happens later in a
// dedicated /contact prompt.
export default function ContactTeaser3({ variant = "has-bg" }: ContactTeaser3Props) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const wrapperClass = variant === "plain" ? "v2 tf-spacing-1" : "v2 has-bg tf-spacing-1 bg-linear-color";
  const innerWrapClass = variant === "plain" ? "wrap bg-dark-color" : "wrap";

  return (
    <div className={`section-contact-3 ${wrapperClass}`}>
      <div className="tf-container">
        <div className={innerWrapClass}>
          <div className="left">
            <div className="heading-section d-grid gap_13">
              <span className="sub text-label text_white letter-spacing-1 text-uppercase d-block wow fadeInUp">
                Contact Us
              </span>
              <h3 className="text-capitalize text_white" ref={titleRef}>
                Have Questions? <br className="xxl-hide" />
                Call Us 1-555-678-8888
              </h3>
              <p className="text-body-default wow fadeInUp text_muted">
                Our team answers questions and provides the right solar solutions.
              </p>
            </div>
            <ul className="list mb_12 d-grid gap_12 wow fadeInUp" data-wow-delay="0.2s">
              <li className="text-button text_white d-flex gap_8 align-items-center">
                <i className="icon-MapPinLine" />
                123 Creative Ave, New York, NY 10001
              </li>
              <li className="text-button text_white d-flex gap_8 align-items-center">
                <i className="icon-PhoneCall" />
                1-555-678-8888
              </li>
              <li className="text-button text_white d-flex gap_8 align-items-center">
                <i className="icon-Envelope" />
                <a href="#" className="link">
                  themesflat@gmail.com
                </a>
              </li>
            </ul>
            <a href="#" className="hover-underline-link text-button link text_white wow fadeInUp" data-wow-delay="0.4s">
              Open Map
            </a>
          </div>
          <form className="form-contact-2 v2" onSubmit={(e) => e.preventDefault()}>
            <h4 className="text_white mb_20">Contact With Us</h4>
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <input className="style-line-bottom" type="text" placeholder="Full Name" name="text" required />
              </fieldset>
              <div className={`nice-select${open ? " open" : ""}`} tabIndex={0} onClick={() => setOpen((v) => !v)}>
                <span className="current">{serviceOptions[selectedIndex].label}</span>
                <ul className="list">
                  {serviceOptions.map((option, index) => (
                    <li
                      key={`${option.value}-${option.label}`}
                      data-value={option.value || undefined}
                      className={`option${index === selectedIndex ? " selected" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(index);
                        setOpen(false);
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <input className="style-line-bottom" type="number" placeholder="Phone Number" name="text" required />
              </fieldset>
              <fieldset>
                <input className="style-line-bottom" type="text" placeholder="Email address" name="email" required />
              </fieldset>
            </div>
            <fieldset className="mb_20">
              <textarea
                id="comment"
                className="style-line-bottom"
                rows={4}
                placeholder="Tell us something .... "
                required
              />
            </fieldset>
            <button className="tf-btn rounded-icon btn-hover-rounded-icon hover-1 btn-bg-primary" type="submit">
              <div className="btn_inner">
                <div className="btn_text">
                  <span>Get in touch</span>
                </div>
                <div className="btn_icon">
                  <span>
                    <i className="icon-ArrowUpRight" />
                    <i className="icon-ArrowUpRight" />
                  </span>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
