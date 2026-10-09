"use client";

import { useState } from "react";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import NiceSelect from "@/components/common/NiceSelect";

// Original HTML dropdown options leak carservices content ("tireRotation",
// "brakeCheck" data-values) — replaced with real legal-issue categories per
// the prompt's instruction.
const legalIssueOptions = [
  { value: "", label: "Type of Legal Issue" },
  { value: "civil-family", label: "Civil & Family Law" },
  { value: "corporate-business", label: "Corporate & Business Law" },
  { value: "criminal-defense", label: "Criminal Defense" },
];

export default function ContactSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const formTitleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const [legalIssue, setLegalIssue] = useState("");

  return (
    <div className="section-contact-4 tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="wrap tf-grid-layout lg-col-2 gap-0">
          <div className="left">
            <div className="heading-section d-grid gap_16">
              <span className="sub text-label text_muted letter-spacing-1 text-uppercase d-block lh-16 wow fadeInUp">
                Free Consultation
              </span>
              <h4 ref={titleRef} className="split-text effect-right">
                Comprehensive Expert Legal Solutions For <span className="text_primary-color">Every Case</span>
              </h4>
              <p className="text-body-default wow fadeInUp" data-wow-delay=".2s">
                Your ideal workspace is just a message or call away with us.
              </p>
            </div>
            <ul className="list-check d-grid gap_8 wow fadeInUp" data-wow-delay="0.4s">
              <li className="text-body-default d-flex gap_12 text_primary">
                <i className="icon-Check" />
                Comprehensive Legal Case Strategy.
              </li>
              <li className="text-body-default d-flex gap_12 text_primary">
                <i className="icon-Check" />
                Expert Legal Litigation Guidance.
              </li>
              <li className="text-body-default d-flex gap_12 text_primary">
                <i className="icon-Check" />
                Precise Legal Contract Preparation.
              </li>
            </ul>
            <ul className="list mb_12 d-grid gap_12 wow fadeInUp" data-wow-delay="0.6s">
              <li className="text-button text_primary d-flex gap_8 align-items-center">
                <i className="icon-MapPinLine" />
                123 Creative Ave, New York, NY 10001
              </li>
              <li className="text-button text_primary d-flex gap_8 align-items-center">
                <i className="icon-PhoneCall" />
                1-555-678-8888
              </li>
              <li className="text-button text_primary d-flex gap_8 align-items-center">
                <i className="icon-Envelope" />
                <Link href="#" className="link">
                  themesflat@gmail.com
                </Link>
              </li>
            </ul>
            <div className="wow fadeInUp" data-wow-delay="0.8s">
              <Link href="#" className="hover-underline-link text-button link text_primary-color">
                Open Map
              </Link>
            </div>
          </div>
          <form className="form-legal-consultation" onSubmit={(e) => e.preventDefault()}>
            <h4 ref={formTitleRef} className="text-center text_white mb_20 split-text effect-right">
              Free Legal Consultation
            </h4>
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <input type="text" placeholder="Your name" name="text" aria-required="true" required />
              </fieldset>
              <fieldset>
                <input type="email" placeholder="Email address" name="text" aria-required="true" required />
              </fieldset>
            </div>
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <input type="number" placeholder="Phone Number" name="text" aria-required="true" required />
              </fieldset>
              <fieldset>
                <input className="input-has-icon" type="date" aria-required="true" required />
                <i className="icon-CalendarBlank" />
              </fieldset>
            </div>
            <NiceSelect
              className="mb_20"
              options={legalIssueOptions}
              value={legalIssue}
              onChange={setLegalIssue}
            />
            <fieldset className="mb_20">
              <textarea id="comment" rows={4} placeholder="Additional Notes" aria-required="true" required />
            </fieldset>
            <button
              className="tf-btn btn-hover-animate-2 btn-bg-white-3 rounded-0 w-full btn-px-32"
              type="submit"
            >
              <span>Get A Free Quote</span>
              <span className="bg-effect" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
