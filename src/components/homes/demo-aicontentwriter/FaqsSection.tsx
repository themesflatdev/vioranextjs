"use client";

import { useAccordion } from "@/hooks/useAccordion";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { faqAnswer, faqs } from "@/data/demo-aicontentwriter/faqs";

export default function FaqsSection() {
  const { openKey, toggle } = useAccordion<string>("q1");
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-faqs-2 tf-spacing-10">
      <div className="tf-container">
        <div className="box">
          <div className="heading-section">
            <div className="sub text-label text-uppercase text_primary-color fw-5 lh-20 mb_20" ref={subRef}>
              FAQs
            </div>
            <h2 className="title mb_12" ref={titleRef}>
              Frequently Asked Questions
            </h2>
            <p className="desc text-body-2 text_secondary" ref={descRef}>
              Everything you need to know before getting started
            </p>
          </div>
          <ul className="accordion-wrap d-grid gap_16" id="accordion-faq">
            {faqs.map((faq) => {
              const isOpen = openKey === faq.key;
              return (
                <li className="accordion-item style-4 wow fadeInRight" data-wow-delay={faq.delay} key={faq.key}>
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
                      <h5 className="title text-capitalize">{faq.question}</h5>
                      <span className="icon" />
                    </div>
                  </a>
                  <div className={`collapse-content${isOpen ? " is-open" : ""}`}>
                    <div className="accordion-faqs-content">
                      <p className="text-body-default text_primary">{faqAnswer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
