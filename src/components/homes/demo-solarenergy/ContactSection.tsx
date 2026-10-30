"use client";

import { useState } from "react";
import NiceSelect from "@/components/common/NiceSelect";

const OPTIONS = [
  { value: "", label: "Choose an option" },
  { value: "option1", label: "option 1" },
  { value: "option2", label: "option 2" },
  { value: "option3", label: "option 3" },
];

export default function ContactSection() {
  const [option, setOption] = useState("");

  return (
    <div className="section-contact-3 tf-spacing-1">
      <div className="tf-container">
        <div className="wrap bg-light-color">
          <div className="left">
            <div className="heading-section d-grid gap_13">
              <span className="sub text-label text_primary letter-spacing-1 text-uppercase d-block wow fadeInUp">
                Contact Us
              </span>
              <h3 className="text-capitalize split-text effect-blur-fade">
                Have Questions? <br className="xxl-hide" />
                Call Us 1-555-678-8888
              </h3>
              <p className="text-body-default wow fadeInUp">
                Our team answers questions and provides the right solar solutions.
              </p>
            </div>
            <ul className="list mb_12 d-grid gap_12 wow fadeInUp" data-wow-delay="0.2s">
              <li className="text-button text_primary d-flex gap_8 align-items-center">
                <i className="icon-MapPinLine"></i>
                123 Creative Ave, New York, NY 10001
              </li>
              <li className="text-button text_primary d-flex gap_8 align-items-center">
                <i className="icon-PhoneCall"></i>
                1-555-678-8888
              </li>
              <li className="text-button text_primary d-flex gap_8 align-items-center">
                <i className="icon-Envelope"></i>
                <a href="#" className="link">
                  themesflat@gmail.com
                </a>
              </li>
            </ul>
            <a href="#" className="hover-underline-link text-button link text_primary wow fadeInUp" data-wow-delay="0.4s">
              Open Map
            </a>
          </div>
          <form className="form-contact-2" onSubmit={(e) => e.preventDefault()}>
            <h4 className="text-center mb_20">Your Solar Savings Calculator</h4>
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="text"
                  aria-required="true"
                  required
                />
              </fieldset>
              <NiceSelect options={OPTIONS} value={option} onChange={setOption} />
            </div>
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="text"
                  aria-required="true"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  type="text"
                  placeholder="Installation Address"
                  name="email"
                  aria-required="true"
                  required
                />
              </fieldset>
            </div>
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <input
                  type="text"
                  placeholder="Your Average Monthly Bill?"
                  name="text"
                  aria-required="true"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  type="text"
                  placeholder="Required Solar Plant Capacity (in kW)"
                  name="text"
                  aria-required="true"
                  required
                />
              </fieldset>
            </div>
            <button className="tf-btn btn-hover-animate-2 btn-bg-primary-3 w-full btn-px-32" type="submit">
              <span>Calculate</span>
              <span className="bg-effect"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
