"use client";

import { useFixedThumb } from "@/hooks/useFixedThumb";
import { useAccordion } from "@/hooks/useAccordion";
import { faqs } from "@/data/demo-corporate/faqs";

// section-faqs — left heading is GSAP-pinned while the right accordion
// list scrolls past (useFixedThumb, same mechanism as /portfolio and
// /blog-detail). The accordion itself reuses the theme's own CSS-driven
// collapse mechanism (`.collapse-content`/`.is-open`, see _mixin.scss)
// instead of the original's inert Bootstrap `collapse`/`show` classnames
// (Bootstrap JS was removed per CLAUDE.md rule 1). Single-open, Q1 open by
// default.
export default function FaqsSection() {
  const wrapRef = useFixedThumb<HTMLDivElement>();
  const { openKey, toggle } = useAccordion<string>("q1");

  return (
    <div className="section-faqs tf-spacing-1">
      <div className="tf-container fixed-thumb-wrap" ref={wrapRef}>
        <div className="row">
          <div className="col-lg-6">
            <div className="fixed-thumb">
              <div className="heading-section d-grid gap_12">
                <div className="sub text-label text-uppercase text_primary-color mb_12">FAQs</div>
                <h2 className="title">Frequently Asked Questions</h2>
                <p className="desc text-body-default">
                  Subscribe to get the latest company news, expert insights, and industry trends
                  delivered straight to your inbox — no spam, just value.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="accordion-wrap">
              {faqs.map((faq) => {
                const isOpen = openKey === faq.key;
                return (
                  <li className="accordion-item style-1" key={faq.key}>
                    <a
                      href={`#accordion-${faq.key}`}
                      className={`accordion-title${isOpen ? "" : " collapsed"}`}
                      aria-expanded={isOpen}
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
                    <div className={`collapse-content${isOpen ? " is-open" : ""}`}>
                      <div className="accordion-faqs-content">
                        <p className="text-body-default text_primary">{faq.answer}</p>
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
