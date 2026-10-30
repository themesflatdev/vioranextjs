"use client";

import { useState } from "react";
import Image from "next/image";
import NiceSelect from "@/components/common/NiceSelect";
import { useAccordion } from "@/hooks/useAccordion";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

const serviceOptions = [
  { value: "services1", label: "Services 1" },
  { value: "services2", label: "Services 2" },
  { value: "services3", label: "Services 3" },
];

const faqItems = [
  {
    key: "accordion-faq-1",
    delay: undefined,
    title: "What types of goods do you transport?",
  },
  {
    key: "accordion-faq-2",
    delay: "0.2s",
    title: "Do you provide international shipping services?",
  },
  {
    key: "accordion-faq-3",
    delay: "0.3s",
    title: "How do you ensure the safety of my shipment?",
  },
  {
    key: "accordion-faq-4",
    delay: "0.4s",
    title: "What are your delivery times?",
  },
];

const faqAnswer =
  "Yes, we provide both domestic and international logistics solutions. Through our network of trusted global partners, we handle cross-border shipments efficiently, manage customs clearance, and ensure your cargo arrives safely and on time anywhere in the world.";

// Same intrinsic dimensions as demo-coworkingspace/demo-medical PartnerMarquee —
// shared site-wide logo assets, CSS forces img height to 38px.
const partnerLogos = [
  { src: "/assets/images/logo/partner-1.svg", width: 110, height: 38 },
  { src: "/assets/images/logo/partner-2.svg", width: 120, height: 33 },
  { src: "/assets/images/logo/partner-3.svg", width: 147, height: 38 },
  { src: "/assets/images/logo/partner-4.svg", width: 120, height: 29 },
  { src: "/assets/images/logo/partner-5.svg", width: 110, height: 25 },
  { src: "/assets/images/logo/partner-6.svg", width: 130, height: 25 },
];

export default function FaqSection() {
  const [service, setService] = useState("");
  const { toggle, isOpen } = useAccordion<string>("accordion-faq-2");
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ clone: 2, direction: "left" });

  return (
    <div className="section-faqs-6 tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="heading-section text-center mb_48">
          <div className="wrap-line-marker text-label text_primary text-uppercase letter-spacing-1 justify-content-center mb_12 wow fadeInUp">
            <span className="line-marker line-primary lh-16"></span>Frequently Asked Questions
          </div>
          <h2 className="split-text effect-right">Your Questions, Our Answers</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form
              className="form-book-move wow fadeInLeft"
              onSubmit={(e) => e.preventDefault()}
            >
              <h4 className="text_white text-center mb_20">Book Your Move Today</h4>
              <div className="wrap mb_20">
                <div className="tf-grid-layout md-col-2 gap_20 mb_20">
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="text"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      name="text"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                </div>
                <div className="tf-grid-layout md-col-2 gap_20 mb_20">
                  <fieldset>
                    <input
                      className="input-has-icon"
                      type="text"
                      placeholder="Pickup Address"
                      name="email"
                      aria-required="true"
                      required
                    />
                    <i className="icon-MapPin"></i>
                  </fieldset>
                  <fieldset>
                    <input
                      className="input-has-icon"
                      type="text"
                      placeholder="Delivery Address"
                      name="text"
                      aria-required="true"
                      required
                    />
                    <i className="icon-MapPin"></i>
                  </fieldset>
                </div>
                <div className="tf-grid-layout md-col-2 gap_20 mb_20">
                  <NiceSelect
                    options={serviceOptions}
                    value={service}
                    onChange={setService}
                    placeholder="Choose Services"
                  />
                  <fieldset>
                    <input className="input-has-icon" type="date" />
                    <i className="icon-CalendarBlank"></i>
                  </fieldset>
                </div>
                <fieldset>
                  <textarea
                    id="comment"
                    rows={4}
                    placeholder="Additional Notes"
                    aria-required="true"
                    required
                  ></textarea>
                </fieldset>
              </div>
              <button
                className="tf-btn btn-hover-animate-2 btn-bg-primary-2 w-full btn-px-32"
                type="submit"
              >
                <span>Get A Free Quote</span>
                <span className="bg-effect"></span>
              </button>
            </form>
          </div>
          <div className="col-lg-6">
            <ul className="accordion-wrap d-grid gap_16" id="accordion-faq">
              {faqItems.map((item) => {
                const open = isOpen(item.key);
                return (
                  <li
                    key={item.key}
                    className={`accordion-item action_click style-3 v2 wow fadeInRight${open ? " active" : ""}`}
                    data-wow-delay={item.delay}
                  >
                    <a
                      href={`#${item.key}`}
                      className={`accordion-title action${open ? "" : " collapsed"}`}
                      aria-expanded={open}
                      aria-controls={item.key}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(item.key);
                      }}
                    >
                      <div className="heading">
                        <h5 className="title text-capitalize">{item.title}</h5>
                        <span className="icon"></span>
                      </div>
                    </a>
                    <div
                      id={item.key}
                      className={`collapse${open ? " show" : ""}`}
                      data-bs-parent="#accordion-faq"
                    >
                      <div className="accordion-faqs-content">
                        <p className="text-body-default text_secondary">{faqAnswer}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap-partner tf-spacing-1 pb-0">
        <div className="tf-container">
          <div className="wrap-infiniteslide">
            <div className="infiniteslide" data-clone="2" data-style="left" ref={marqueeRef}>
              {partnerLogos.map((partner) => (
                <div className="marquee-item" key={partner.src}>
                  <Image
                    src={partner.src}
                    alt="partner"
                    width={partner.width}
                    height={partner.height}
                    style={{ height: "38px", width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
