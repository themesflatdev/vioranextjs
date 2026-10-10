"use client";

import Link from "next/link";
import { useAccordion } from "@/hooks/useAccordion";
import { faqs } from "@/data/demo-coworkingspace/faqs";

export default function FaqSection() {
  const { toggle, isOpen } = useAccordion<string>("faq-1");

  return (
    <div className="section-faqs-5 tf-spacing-1">
      <div className="tf-container large">
        <div className="row">
          <div className="col-lg-6">
            <div className="box-left">
              <div className="heading-section mb_48 d-grid gap_16">
                <div className="sub text-label text-uppercase split-text effect-up text_primary lh-26">
                  NEED HELP?
                </div>
                {/* SỬA: "Gotquestions? We'vegotanswers." (thiếu khoảng trắng) → đúng chính tả */}
                <h2 className="title split-text effect-right">
                  Got questions? We&rsquo;ve got answers.
                </h2>
                <p className="desc text-body-2 text_secondary split-text split-lines-transform">
                  Find clear explanations about our coworking space, memberships, pricing,
                  amenities, community benefits, and flexible workspace options.
                </p>
              </div>
              <Link href="#" className="tf-btn btn-switch-text wow fadeInUp" data-wow-delay="0.4s">
                <span>
                  <span className="btn-double-text" data-text="Discover More">
                    Discover More
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="accordion-wrap d-grid gap_16" id="accordion-faq">
              {faqs.map((faq) => {
                const open = isOpen(faq.key);
                return (
                  <li
                    key={faq.key}
                    className={`accordion-item action_click style-border wow fadeInLeft${
                      open ? " active" : ""
                    }`}
                    data-wow-delay={faq.wowDelay}
                  >
                    <a
                      href={`#accordion-${faq.key}`}
                      className={`accordion-title action${open ? "" : " collapsed"}`}
                      aria-expanded={open}
                      aria-controls={`accordion-${faq.key}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(faq.key);
                      }}
                    >
                      <div className="heading">
                        <h5 className="title text-capitalize">{faq.question}</h5>
                        <span className="icon" />
                      </div>
                    </a>
                    <div
                      id={`accordion-${faq.key}`}
                      className={`collapse-content${open ? " is-open" : ""}`}
                    >
                      <div className="accordion-faqs-content">
                        <p className="text-body-2 text_secondary">{faq.answer}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
