"use client";

import { useAccordion } from "@/hooks/useAccordion";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { faqAnswer, faqs } from "@/data/demo-saas/faqs";

export default function FaqsSection() {
  const { openKey, toggle } = useAccordion<string>("accordion-faq-1");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-faqs-3 tf-spacing-1 pt-0">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <div className="heading-section-4">
                <div className="tag text-label text-uppercase wow fadeInUp text_white mb_20">FAQs</div>
                <h2 className="title font-2 split-text effect-blur-fade" ref={titleRef}>
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <ul className="accordion-wrap d-grid gap_16" id="accordion-faq">
              {faqs.map((faq) => {
                const isOpen = openKey === faq.key;
                return (
                  <li className="accordion-item style-5 wow fadeInRight" data-wow-delay={faq.delay} key={faq.key}>
                    <a
                      href={`#${faq.key}`}
                      className={`accordion-title${isOpen ? "" : " collapsed"}`}
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(faq.key);
                      }}
                    >
                      <div className="heading">
                        <h5 className="title text-capitalize font-2">{faq.question}</h5>
                        <span className="icon" />
                      </div>
                    </a>
                    <div className={`collapse-content${isOpen ? " is-open" : ""}`}>
                      <div className="accordion-faqs-content">
                        <p className="text-body-default text_muted">{faqAnswer}</p>
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
