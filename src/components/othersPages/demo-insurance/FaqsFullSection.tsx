"use client";

import { useFixedThumb } from "@/hooks/useFixedThumb";
import { useAccordion } from "@/hooks/useAccordion";
import { faqsFull, answer } from "@/data/demo-insurance/faqsFull";

// section-faqs on faqs.html — same single-open style-2 accordion as the
// home page's FAQSection, but the left heading is GSAP-pinned
// (useFixedThumb) while the right 10-item list scrolls past, and there's
// no split-text on the heading here (static, matches the source).
export default function FaqsFullSection() {
  const wrapRef = useFixedThumb<HTMLDivElement>();
  const { openKey, toggle } = useAccordion<string>("q1");

  return (
    <div className="section-faqs tf-spacing-1">
      <div className="tf-container fixed-thumb-wrap" ref={wrapRef}>
        <div className="row">
          <div className="col-lg-6">
            <div className="fixed-thumb">
              <div className="heading-section d-grid gap_12">
                <div className="sub text-label text-uppercase text_secondary-color lh-20 letter-spacing-1 mb_8">
                  FAQS
                </div>
                <h2 className="title">Frequently Asked Questions</h2>
                <p className="desc text-body-default text_secondary">
                  Subscribe to get the latest company news, expert insights, and industry trends
                  delivered straight to your inbox — no spam, just value.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="accordion-wrap d-grid gap_16" id="accordion-faq">
              {faqsFull.map((faq, index) => {
                const isOpen = openKey === faq.key;
                return (
                  <li
                    className={`accordion-item style-2 action_click wow fadeInRight${isOpen ? " active" : ""}`}
                    data-wow-delay={`${Math.min(index + 1, 5) * 0.1}s`}
                    key={faq.key}
                  >
                    <a
                      href={`#accordion-${faq.key}`}
                      className={`accordion-title action${isOpen ? "" : " collapsed"}`}
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
                        <p className="text-body-default text_secondary">{answer}</p>
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
